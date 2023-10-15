import { Link } from "react-router-dom";
import Button from "../../../components/UiComponents/Button";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
const PropertySingleCard = ({ hotel }) => {
  return (
    <div key={hotel.id} className="bg-slate-200 p-3 rounded-lg mb-10">
      <img
        src={hotel.picture_url.url}
        alt=""
        className="w-full h-64 object-cover object-center rounded-lg shadow-xl mb-6 -mt-12"
      />
      <div className="mt-4 truncate">
        <h1 className="font-bold text-lg">{hotel.name}</h1>
        <div>
          <p className="truncate font-light text-sm">{hotel.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between font-bold">
        <div className="flex items-center justify-start gap-2">
          <MapPinIcon className="w-4 h-4 text-red-600" />
          {hotel.market}, {hotel.country_code}
        </div>
        <div className="flex items-center justify-center gap-2 my-4 font-semibold">
          Rating:
          <StarIcon className="w-5 h-5 text-yellow-400" />
          {hotel.number_of_reviews}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="bg-violet-200  p-2 rounded-lg font-bold text-lg">
          Price: {hotel.price}$
        </p>
        <Link to={`/hotel/${hotel.id}`}>
          <Button style={`px-8 capitalize text-white md:w-auto`}>
            Deatails
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default PropertySingleCard;
