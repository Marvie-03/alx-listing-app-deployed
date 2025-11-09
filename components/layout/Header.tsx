import React, { useState } from "react";
import {
  Search,
  Calendar,
  Users,
  Home,
  Building,
  TreePine,
  Mountain,
  Waves,
  MapPin,
  Car,
  Tent,
  Building2,
  Ship,
  Tractor,
  Castle,
  LucideIcon,
} from "lucide-react";

interface AccommodationType {
  icon: LucideIcon;
  label: string;
  active: boolean;
}

const Header = () => {
  const [location, setLocation] = useState<string>("");
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<string>("");

  const accommodationTypes: AccommodationType[] = [
    { icon: Home, label: "Rooms", active: false },
    { icon: Building, label: "Mansion", active: false },
    { icon: TreePine, label: "Countryside", active: false },
    { icon: Building2, label: "Villa", active: false },
    { icon: Mountain, label: "Tropical", active: false },
    { icon: Car, label: "New", active: false },
    { icon: Waves, label: "Amazing pool", active: false },
    { icon: MapPin, label: "Beach front", active: false },
    { icon: Mountain, label: "Island", active: false },
    { icon: Tent, label: "Camping", active: false },
    { icon: Building2, label: "Apartment", active: false },
    { icon: Home, label: "House", active: false },
    { icon: Ship, label: "Lakefront", active: false },
    { icon: Home, label: "Farm house", active: false },
    { icon: Tractor, label: "Treehouse", active: false },
    { icon: Castle, label: "Cabins", active: false },
    { icon: Building, label: "Castles", active: false },
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-red-500">alx</div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 max-w-2xl">
          <div className="px-6 py-3 border-r border-gray-300">
            <div className="text-xs font-semibold text-gray-800 mb-1">
              Location
            </div>
            <input
              type="text"
              placeholder="Search destinations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent w-32"
            />
          </div>

          <div className="px-6 py-3 border-r border-gray-300">
            <div className="text-xs font-semibold text-gray-800 mb-1">
              Check in
            </div>
            <input
              type="text"
              placeholder="Add dates"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent w-20"
            />
          </div>

          <div className="px-6 py-3 border-r border-gray-300">
            <div className="text-xs font-semibold text-gray-800 mb-1">
              Check out
            </div>
            <input
              type="text"
              placeholder="Add dates"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent w-20"
            />
          </div>

          <div className="px-6 py-3">
            <div className="text-xs font-semibold text-gray-800 mb-1">
              People
            </div>
            <input
              type="text"
              placeholder="Add guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent w-20"
            />
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full mr-2 transition-colors duration-200">
            <Search size={16} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Sign in
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
            Sign up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            {accommodationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={index}
                  className={`flex flex-col items-center gap-2 min-w-fit px-2 py-2 rounded-lg transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 ${
                    type.active
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  <IconComponent size={24} />
                  <span className="text-xs font-medium whitespace-nowrap">
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 ml-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="w-4 h-4 border border-gray-400 rounded flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-400"></div>
                <div className="w-1 h-1 bg-gray-400 ml-0.5"></div>
                <div className="w-1 h-1 bg-gray-400 ml-0.5"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Filters</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
