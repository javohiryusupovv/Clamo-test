"use client";

import { useState } from "react";
import ReyesterCard from "./ReyesterCard";
import { ReyesterItem } from "../../../../../../app.types";

interface ReyesterType {
  id: number;
  name: string;
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

  const filtered = selectedType
    ? reyesters.filter((r) =>
        r.reyester_type?.some(
          (type: ReyesterType) => type.slug === selectedType
        )
      )
    : reyesters;

  return (
    <div>
      <div className="flex justify-end mb-6">
        <select
          className="w-max appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Barchasi</option>
          {types.map((type) => (
            <option key={type.id} value={type.slug}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

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
