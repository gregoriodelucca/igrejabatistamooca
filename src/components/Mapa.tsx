// src/components/Mapa.tsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa: React.FC = () => {
  // Coordenadas da Igreja Batista Nacional Mooca (Rua Javari, 79 - Mooca, São Paulo)
  const location = {
    lat: -23.5587, // latitude
    lng: -46.5860, // longitude
  };

  return (
    <section id="mapa" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nosso Local</h2>
        <LoadScript googleMapsApiKey="SUA_CHAVE_DE_API_AQUI">
          <GoogleMap
            mapContainerStyle={{
              height: "400px",
              width: "100%",
            }}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default Mapa;
