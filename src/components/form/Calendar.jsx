"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setCalendar } from "@/app/store/reducers/formSlice";

export default function Calendar({ register, setValue }) {
  const dispatch = useDispatch();
  const storedDate = useSelector((state) => state.form.calendar);

  const [mode, setMode] = useState(storedDate?.mode || "On");
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  // Helper to safely parse any date input into a valid dayjs object
  const safeParseDayjs = (dateInput) => {
    if (!dateInput) return null;
    const parsed = dayjs(dateInput);
    return parsed.isValid() ? parsed : null;
  };

  const [selectedDates, setSelectedDates] = useState(() => {
    if (storedDate?.dates && Array.isArray(storedDate.dates)) {
      // Ensure all stored dates are parsed into valid dayjs objects
      return storedDate.dates.map(date => safeParseDayjs(date)).filter(Boolean);
    }
    return [];
  });

  const [range, setRange] = useState(storedDate?.range || "Exact date");

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");

  const daysInMonth = [];
  let date = startOfMonth.startOf("week");
  while (date.isBefore(endOfMonth.endOf("week"))) {
    daysInMonth.push(date);
    date = date.add(1, "day");
  }

  const handleDateClick = (day) => {
    // --- START OF PAST DATE FIX ---
    // Do not allow selection of past dates
    if (day.isBefore(dayjs(), 'day')) {
      return; // Exit if the date is in the past
    }
    // --- END OF PAST DATE FIX ---

    if (mode === "Between") {
      if (selectedDates.length === 0) {
        setSelectedDates([day]);
      } else if (selectedDates.length === 1) {
        const sorted = [selectedDates[0], day].sort((a, b) =>
          a.isAfter(b) ? 1 : -1
        );
        setSelectedDates(sorted);
      } else {
        // If two dates are already selected and a new one is clicked, start a new range
        setSelectedDates([day]);
      }
    } else { // "On" or "I'm unsure" modes
      setSelectedDates([day]);
    }
  };

  const isSelected = (day) => {
    if (mode === "Between" && selectedDates.length === 2) {
      return (
        day.isSame(selectedDates[0], "day") ||
        day.isSame(selectedDates[1], "day") ||
        (day.isAfter(selectedDates[0], "day") &&
          day.isBefore(selectedDates[1], "day"))
      );
    }
    return selectedDates.some((d) => d.isSame(day, "day"));
  };

  // 🔹 Sync with Redux & react-hook-form automatically
  useEffect(() => {
    // When dispatching to Redux, it's best to store dates in a format that can be easily re-hydrated.
    // dayjs objects are not directly serializable. Convert them to ISO strings.
    const serializableDates = selectedDates.map(day => day.toISOString());
    const payload = { mode, dates: serializableDates, range };

    // Prevent dispatch loop: only update if changed
    const isDifferent =
      JSON.stringify(storedDate) !== JSON.stringify(payload);

    if (isDifferent) {
      dispatch(setCalendar(payload));
      // react-hook-form's setValue usually expects plain data, so ISO strings are good here too.
      setValue("Calendar", payload);
    }
  }, [mode, selectedDates, range, storedDate, dispatch, setValue]);


  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-1">When is your move?</h2>
      <p className="text-gray-500 mb-4">
        Select all that apply and give details where possible.
      </p>

      {/* Mode Buttons */}
      <div className="flex gap-2 mb-4">
        {["On", "Between", "I'm unsure"].map((m) => (
          <button
            key={m}
            type="button"
            className={`px-4 py-2 rounded-full border ${
              mode === m
                // --- START OF STYLING FIX ---
                ? "bg-zinc-600 text-white" // Changed text-white-1 to text-white
                // --- END OF STYLING FIX ---
                : "bg-white text-black border-gray-300"
            }`}
            onClick={() => {
              setMode(m);
              setSelectedDates([]);
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Calendar */}
      <div className="border rounded-lg p-4 inline-block w-full">
        {/* Month Nav */}
        <div className="flex justify-between items-center mb-2">
          <button
            type="button"
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          >
            ←
          </button>
          <span className="font-semibold">
            {currentMonth.format("MMMM YYYY")}
          </span>
          <button
            type="button"
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          >
            →
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 text-center font-semibold mb-2">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center ">
          {daysInMonth.map((day, idx) => {
            const isPastDate = day.isBefore(dayjs(), 'day'); // Check if date is in the past
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleDateClick(day)}
                disabled={isPastDate} // Disable past dates
                className={`w-8 h-8 mx-auto rounded-full text-sm ${
                  isSelected(day)
                    ? "bg-gray-600 text-white"
                    : day.month() === currentMonth.month()
                    ? isPastDate
                      ? "text-gray-300 cursor-not-allowed" // Style for past dates in current month
                      : "text-black hover:bg-gray-200"
                    : "text-gray-400 cursor-not-allowed" // Style for dates outside current month
                }`}
              >
                {day.date()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Select */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {["Exact date", "± 3 days", "± a week", "± a fortnight"].map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setRange(label)}
            className={`px-4 py-2 rounded-full border ${
              range === label
                ? "bg-zinc-600 text-white-1 border-black"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
