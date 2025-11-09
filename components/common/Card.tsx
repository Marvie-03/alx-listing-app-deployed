import React, { useState } from "react";
import Image from "next/image";
import { CardProps } from "../../interfaces";
import { Bath, Bed, Heart, MapPin, Star, Users } from "lucide-react";
const Card: React.FC<CardProps> = ({ property, onFavorite, onBook }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageSrc, setImageSrc] = useState(property.image);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (onFavorite) {
      onFavorite(property);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <Image
        src={imageSrc}
        alt={property.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        width={500}
        height={256}
        onError={() => {
          setImageSrc(
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          );
        }}
      />

      {/* Discount Badge */}
      {property.discount && (
        <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
          {property.discount}% OFF
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200"
      >
        <Heart
          size={16}
          className={`${
            isFavorited ? "text-red-500 fill-current" : "text-gray-600"
          } transition-colors duration-200`}
        />
      </button>

      {/* Property Tags */}
      <div className="absolute bottom-3 left-3 flex gap-1">
        {property.category.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-1">
              {property.name}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin size={14} className="mr-1" />
              <span>
                {property.address.state}, {property.address.country}
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 ml-2">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">
              {property.rating}
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Bed size={14} />
            <span>{property.offers.bed} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={14} />
            <span>{property.offers.shower} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{property.offers.occupants}</span>
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(property.price)}
            </span>
            <span className="text-gray-600 text-sm">/night</span>
          </div>

          <button
            onClick={() => onBook && onBook(property)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
