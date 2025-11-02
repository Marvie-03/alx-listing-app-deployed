import React from 'react';

// Placeholder for CardProps
export interface CardProps {
  property: PropertyProps;
  onFavorite?: (property: PropertyProps) => void;
  onBook?: (property: PropertyProps) => void;
}

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
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: PropertyAddress;
  rating: number;
  category: string[];
  price: number;
  offers: PropertyOffers;
  image: string;
  discount: string;
}

export interface Property {
  id: string | number;
  title: string;
  price: string | number;
  location: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  amenities?: string[];
  description?: string;
}

export interface PropertyCardProps {
  property: Property;
}
export interface PropertyDetailProps {
  property: Property;
}
