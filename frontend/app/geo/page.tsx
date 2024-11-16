import Map from "@/components/Map";

export default function Maps() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Geo Location Maps</h1>
      <p className="mb-4">
        This is a sample page for displaying maps in the Geo Location route.
      </p>
      <div className="map-container">
        {/* Placeholder for map component */}
        <Map />
      </div>
    </div>
  );
}
