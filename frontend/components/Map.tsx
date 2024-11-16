"use client";

import { useEffect, useRef } from "react";
import { Loader } from "google-maps";

const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
const loader = new Loader(apiKey, {
  libraries: ["places"],
});

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const google = await loader.load();

        if (mapRef.current) {
          new google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }}
      className="rounded-lg shadow-lg"
    />
  );
}
