"use client";

import { useEffect, useState } from "react";


export default function PlaceDescription({ register, errors, setValue, getValues, moving }) {
  const place = [
    { title: 'Ground floor' },
    { title: "Stairs" },
    { title: "Elevator" },
  ];

  const street = [
    { title: 'Narrow street' },
    { title: "Height restrictions" },
    { title: "No Parking" },
    { title: "Steep Driveway" },
    { title: "Overhanging trees" },
    { title: "Low power lines" },
  ];

  const currentKey = moving === "pickup" ? "placeDescription" : "movingPlaceDescription";
  const defaultValues = getValues(currentKey) || {};

  const [selectedPlace, setSelectedPlace] = useState(
    Array.isArray(defaultValues.place) ? defaultValues.place : (defaultValues.place ? [defaultValues.place] : [])
  );
  const [selectedStreet, setSelectedStreet] = useState(defaultValues.street || []);
  const [stairsFlights, setStairsFlights] = useState(defaultValues.stairs || "");

  // Update form immediately on state change
  const updateForm = (newPlace, newStreet, newStairs) => {
    const formData = {
      place: newPlace,
      ...(newPlace.includes("Stairs") && { stairs: newStairs }),
      street: newStreet
    };
    setValue(currentKey, formData, { shouldValidate: true });
  };

  const handlePlaceClick = (title) => {
    let newSelected;
    if (title === "Ground floor") {
      newSelected = ["Ground floor"];
    } else {
      const withoutGround = selectedPlace.filter(item => item !== "Ground floor");
      newSelected = withoutGround.includes(title)
        ? withoutGround.filter(item => item !== title)
        : [...withoutGround, title];
    }
    setSelectedPlace(newSelected);
    updateForm(newSelected, selectedStreet, stairsFlights);
  };

  const handleStreetClick = (title) => {
    const newSelected = selectedStreet.includes(title)
      ? selectedStreet.filter(item => item !== title)
      : [...selectedStreet, title];
    setSelectedStreet(newSelected);
    updateForm(selectedPlace, newSelected, stairsFlights);
  };

  const handleStairsChange = (value) => {
    setStairsFlights(value);
    updateForm(selectedPlace, selectedStreet, value);
  };
return (
    <div className="place-description-form">
      <h2 className="h2">Describe the access to your {moving} property</h2>
      <p className=" text-zinc-400" >Select all that apply and give details where possible.</p>

      {/* PLACE SECTION */}
      <section className="place mt-6">
        <span className=" h5" >Your place</span>
        <div className="flex gap-4 mt-4 flex-wrap">
          {place.map((item, index) => (
            <div
              key={index}
              onClick={() => handlePlaceClick(item.title)}
              className={`flex items-center gap-2 border px-6 py-2 rounded-full duration-300 cursor-pointer 
                ${selectedPlace.includes(item.title)
                  ? 'bg-gray-600 text-white-1'
                  : 'hover:bg-gray-300 hover:text-white'}`}
            >
              <label className="text-sm">{item.title}</label>
            </div>
          ))}
        </div>

        {/* STAIRS INPUT */}
        {selectedPlace.includes("Stairs") && (
          <div className="mt-4 text-gray-700">
            <div className="flex items-center gap-2 mt-2">
              <input
                type="number"
                value={stairsFlights}
                onChange={(e) => setStairsFlights(e.target.value)}
                min={1}
                className="border-b outline-0 pb-1 border-black"
              />
              <span className="relative group inline-block size-6 text-[14px] text-white-1 text-center rounded-full bg-gray-400 cursor-pointer">
                i
                <span className="hidden group-hover:block absolute w-96  text-wrap top-1/2 left-full ml-2 -translate-y-1/2 whitespace-nowrap bg-white text-black-1 border p-1 rounded shadow">
                  A flight of stairs (8 or more steps) is a set of steps that connects one level, floor, or landing to another.
                </span>
              </span>
            </div>
            <span className="block mt-4">
              For example: A 2-story home usually has 1-2 flights of stairs inside.
            </span>
          </div>
        )}
      </section>

      {/* STREET SECTION */}
      <section className="street mt-6">
        <span className="h5 ">Your street</span>
        <div className=" flex flex-wrap gap-4 mt-4">
          {street.map((item, index) => (
            <div
              key={index}
              onClick={() => handleStreetClick(item.title)}
              className={`px-4 py-2 border rounded-full flex items-center gap-2 cursor-pointer 
                ${selectedStreet.includes(item.title)
                  ? 'bg-gray-600 text-white-1'
                  : 'hover:bg-gray-300 '}`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
