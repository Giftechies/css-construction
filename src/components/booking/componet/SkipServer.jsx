// ❌ no "use client"
import React from "react";

export default async function SkipServer({ type, postcode }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/frontend/form?postcode=${postcode}&jobType=${type}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const response = data.data || [];

  let Isdelivery = [];
  if (type?.trim()?.toLowerCase() === "roll and roll off") {
    Isdelivery = response.map((item) => ({
      label: item.label,
      baseprice: item.baseprice,
      tones: item.tones,
      toneprice: item.toneprice,
    }));
  } else {
    Isdelivery = response.map((item) => ({
      size: item.sizeId?.size,
      rate: item.rate,
    }));
  }

  // Just return data, not JSX
  return Isdelivery;
}
