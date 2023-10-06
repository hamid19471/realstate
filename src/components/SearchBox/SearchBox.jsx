import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SingleGuestCard from "./SingleGuestCard/SingleGuestCard";

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState({
    Adults: 1,
    Children: 0,
    rooms: 1,
  });

  const handleGestOptions = (name, operation) => {
    setOptions((prev) => {
      if (operation === "increment") {
        return { ...prev, [name]: prev[name] + 1 };
      } else {
        return { ...prev, [name]: prev[name] - 1 };
      }
    });
  };

  return (
    <div className="md:relative bg-white py-8 px-10 rounded-md shadow-2xl ring-1 ring-slate-200/80 shadow-gray-300 mr-0 lg:mr-32 md:-mt-20 lg:mb-40">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row  items-center justify-between">
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <h3 className="font-semibold text-xl pl-1">Location</h3>
          <div>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter your location"
              className="input input-bordered input-primary w-full max-w-xl"
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Date For Rent</h3>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Guests</h3>
          <div
            id="GestOptions"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          >
            How many guests?
          </div>
          {isOpen && (
            <div>
              <SingleGuestCard
                setIsOpen={setIsOpen}
                handleGestOptions={handleGestOptions}
                options={options}
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-auto">
          <button className="btn btn-block btn-primary inline-flex gap-4 text-white  hover:ring-2 hover:ring-offset-2 hover:ring-blue-700">
            Search <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;

//Guest Card
