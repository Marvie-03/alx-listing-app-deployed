import React from "react";

export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Placeholder for ButtonProps
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface PropertyAddress {
  state: string;
  city: string;
  country: string;
}

interface PropertyOffers {
  bed: number | string;
  shower: number | string;
  occupants: number | string;
}

export interface Property {
  id?: string | number;
  name: string;
  title?: string;
  price: number;
  location?: string;
  address: PropertyAddress;
  rating: number;
  category: string[];
  offers: PropertyOffers;
  image: string;
  discount?: number | string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  amenities?: string[];
  description?: string;
}

// Placeholder for CardProps
export interface CardProps {
  property: Property;
  onFavorite?: (property: Property) => void;
  onBook?: (property: Property) => void;
}

export interface PropertyCardProps {
  property: Property;
}
export interface PropertyDetailProps {
  property: Property;
}
