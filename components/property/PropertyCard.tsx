import React from "react";
import Image from "next/image"; // If using Next.js for optimized images
import { PropertyCardProps } from "@/interfaces";



const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {property.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{property.location}</p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">
            ${property.price}
          </span>
          <div className="flex space-x-2">
            {property.bedrooms && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {property.bedrooms} Bed
              </span>
            )}
            {property.bathrooms && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {property.bathrooms} Bath
              </span>
            )}
            {property.area && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {property.area}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
