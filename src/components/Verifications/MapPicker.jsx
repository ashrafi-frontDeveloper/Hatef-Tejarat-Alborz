// components/MapPicker.jsx
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 35.6892, // Tehran
  lng: 51.3890,
};

export default function MapPicker({ onSelect }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmQTb8ERIIFmn9tbDJwRc5xaAU0VG47cI", // 🔑 حتماً جایگزین کن
  });

  const [marker, setMarker] = useState(null);

  const handleClick = useCallback(async (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarker({ lat, lng });

    // تبدیل مختصات به آدرس
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY_HERE`);
    const data = await response.json();
    const address = data.results[0]?.formatted_address || "Unknown Location";

    onSelect({ lat, lng, address });
  }, [onSelect]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onClick={handleClick}
    >
      {marker && <Marker position={marker} />}
    </GoogleMap>
  );
}
