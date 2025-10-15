"use client";

export default function AreasWeServe() {
  const areas = [
    "Acton", "Bushy Park", "Cowley", "Dollis Hill", "Egypt", "Fulham",
    "Hampton Hill", "Hayes", "Isleworth", "Langley", "Iver", "New Malden",
    "Putney", "Shepperton", "Spelthorne", "The Hyde", "Watford", "West Molesey",
    "Bedfont", "Chalfont Common", "Cricklewood", "Ealing", "Elstree", "Fulmer",
    "Hampton Wick", "Heronsgate", "Kensal Green", "Lingley", "Maple Cross",
    "Northolt", "Richmond", "Sipson", "Staines", "Thorpe", "Waxham Court",
    "Western Ave", "Brent", "Chalfont St Peter", "Croxley Green", "Earls Court",
    "Eton College", "Gerrards Cross", "Harefield", "Heston", "Kensington",
    "London Heathrow Airport", "Maple Cross Rickmansworth", "Norwood Green",
    "Richmond Park", "Slough", "Stoke Poges", "Twickenham", "Wembley", "Weston",
    "Brent Cross", "Chiswick", "Datchet", "Earls Court", "Eton Windsor",
    "Greenford", "Harlington", "Higher Denham", "Kenton Kingsbury", "London Rd",
    "Mayes", "Old Windsor", "Rickmansworth", "South Harrow", "Sunbury-on-Thames",
    "Upton", "West Drayton", "Wexham", "Brentford", "Colnbrook", "Denham",
    "Eastcote", "Farnham Royal", "Greenhill", "Harrow-on-the-Hill", "Horton",
    "Kew", "Longford", "Mill End", "Park Royale", "Ruislip", "South Oxney",
    "Surbiton", "Uxbridge", "West Ealing", "Willesden", "Bushey", "Country Way",
    "Denham Green", "Egham", "Feltham", "Ham", "Hatch End", "Hythe End",
    "Laleham", "Loudwater", "Mortlake", "Pinner", "Ruislip Common", "Southall",
    "Thames Ditton", "Wandsworth", "West Hyde", "Wimbledon Common",
  ];

  const columns = 4;
  const rows = Array.from({ length: Math.ceil(areas.length / columns) }, (_, i) =>
    areas.slice(i * columns, i * columns + columns)
  );

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center mb-10 text-gray-800">
        Areas We Serve
      </h2>

      <div className="overflow-x-auto">
        {/* Changed table styling to border-separate with small spacing */}
        <table className="min-w-full border-separate border-spacing-1">
          <tbody>
            {rows.map((row, rowIndex) => (
              // All rows are white by default
              <tr key={rowIndex} className="bg-white shadow-sm rounded-lg">
                {row.map((area, colIndex) => (
                  <td
                    key={colIndex}
                    // Added a clear border around each cell
                    className="relative px-6 py-4 text-gray-700 font-medium border border-gray-200 rounded-lg 
                                      group transition-colors duration-300"
                  >
                    <span
                      className="relative inline-block cursor-pointer transition-colors duration-300 group-hover:text-primary"
                    >
                      {area}
                      {/* underline animation */}
                      <span
                        className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary 
                                          transition-all duration-300 group-hover:w-full"
                      ></span>
                    </span>
                  </td>
                ))}
                {/* fill empty cells */}
                {row.length < columns &&
                  Array.from({ length: columns - row.length }).map((_, idx) => (
                    // Empty cells still get the border for consistency
                    <td key={idx} className="px-6 py-4 border border-gray-200"></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}