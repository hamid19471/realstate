import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { MagnifyingGlassIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import SingleGuestCard from "./SingleGuestCard/SingleGuestCard";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import useOutsideClick from "../../hooks/useOutsiteClick";
import Button from "../UiComponents/Button";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const ref = useRef();
  useOutsideClick(ref, "DateOptions", () => setDateIsOpen(false));
  const [dateIsOpen, setDateIsOpen] = useState(false);
  const [dateOption, setDateOption] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
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

  const handleSearch = () => {
    const encodeQueryParams = createSearchParams({
      date: JSON.stringify(dateOption),
      options: JSON.stringify(options),
      location,
    });
    navigate({
      pathname: "/search",
      search: encodeQueryParams.toString(),
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
        <div className="relative">
          <h3 className="flex items-center justify-center gap-2 font-semibold text-xl">
            <CalendarIcon className="h-6 w-6" />
            Date For Rent
          </h3>
          <div
            id="DateOptions"
            onClick={() => setDateIsOpen(!dateIsOpen)}
            className="text-sm font-semibold mt-1 text-blue-700 cursor-pointer"
          >
            {`${format(dateOption[0].startDate, "dd/MM/yyyy")} to ${format(
              dateOption[0].endDate,
              "dd/MM/yyyy"
            )}`}
          </div>
          <div ref={ref}>
            {dateIsOpen && (
              <DateRange
                className="absolute rounded-lg left-0 top-16 shadow-lg z-10"
                onChange={(item) => setDateOption([item.selection])}
                ranges={dateOption}
                minDate={new Date()}
                moveRangeOnFirstSelection={true}
              />
            )}
          </div>
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
          <Button onClick={handleSearch}>
            Search <MagnifyingGlassIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;

//Guest Card
