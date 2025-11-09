import React from "react";
import Image from "next/image";
import { PropertyDetailProps, Property } from "@/interfaces";


const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Property Image */}
      <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
        <Image
          src={property.image}
          alt={property?.title || "Default"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Property Title and Price */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
        <p className="text-lg font-semibold text-blue-600 mt-2">
          ${property.price}
        </p>
      </div>

      {/* Property Location */}
      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-medium">Location:</span> {property.location}
        </p>
      </div>

      {/* Property Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
        <p className="text-gray-700">{property.description}</p>
      </div>

      {/* Property Details (Bedrooms, Bathrooms, Area) */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {property.bedrooms && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 font-medium">Bedrooms</p>
            <p className="text-lg font-semibold">{property.bedrooms}</p>
          </div>
        )}
        {property.bathrooms && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 font-medium">Bathrooms</p>
            <p className="text-lg font-semibold">{property.bathrooms}</p>
          </div>
        )}
        {property.area && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 font-medium">Area</p>
            <p className="text-lg font-semibold">{property.area}</p>
          </div>
        )}
      </div>

      {/* Property Amenities */}
      {property.amenities && property.amenities.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Amenities</h2>
          <ul className="list-disc list-inside text-gray-700">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
