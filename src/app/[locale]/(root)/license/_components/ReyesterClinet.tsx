"use client";

import { useState } from "react";
import ReyesterCard from "./ReyesterCard";
import { ReyesterItem } from "../../../../../../app.types";

interface ReyesterType {
  id: number;
  name_uz: string;
  slug: string;
}

export default function ReyesterClient({
  reyesters,
  types,
}: {
  reyesters: ReyesterItem[];
  types: ReyesterType[];
}) {
  const [selectedType, setSelectedType] = useState("");

  // Filtering: reyester_type ichida tanlangan slug bo‘lsa
  const filtered = selectedType
    ? reyesters.filter((r) =>
        r.reyester_type?.some((type: ReyesterType) => type.slug === selectedType)
      )
    : reyesters;

  return (
    <div>
      {/* Select Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          className="border px-4 py-2 rounded"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Barchasi</option>
          {types.map((type) => (
            <option key={type.id} value={type.slug}>
              {type.name_uz}
            </option>
          ))}
        </select>
      </div>

      {/* Reyester cards */}
      <div className="space-y-6">
        {filtered.map((item) => (
          <ReyesterCard
            key={item.id}
            title={item.title_uz}
            location={item.location_uz}
            accreditationNumber={item.accreditation_number}
            registrationDate={item.registration_date}
            reyesterType={item.reyester_type}
            website={item.website}
            shares={item.shares}
            email={item.email}
            phone={item.phone}
          />
        ))}
      </div>
    </div>
  );
}
