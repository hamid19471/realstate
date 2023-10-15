import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

const SearchCard = ({ item }) => {
  return (
    <div className="flex my-4 bg-sky-100 p-3 rounded-lg gap-3">
      <div>
        <img
          src={item.thumbnail_url || item.picture_url.url}
          alt={item.name}
          className="w-56 h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full">
        <h1 className="font-semibold">{item.name}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 font-bold">
            <MapPinIcon className="w-4 h-4 text-red-600" />
            {item.market}, {item.country_code}
          </div>
          <div className="flex items-center justify-start gap-1 font-semibold text-sm">
            Top Rate: {item.number_of_reviews}
            <StarIcon className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="bg-violet-200  p-2 rounded-lg font-bold text-md">
            Price: {item.price}$
          </p>
        </div>
      </div>
    </div>
  );
};
export default SearchCard;
