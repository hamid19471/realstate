import { StarIcon } from "@heroicons/react/24/solid";

const TestimonialCard = ({ title, name, image, position, rate, comment }) => {
  return (
    <div className="p-5 bg-white rounded-xl shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <img src={image} alt="" />
          <div className="flex flex-col">
            <h3 className="font-medium text-[20px] text-black">{name}</h3>
            <p className="text-[14px]">{position}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 font-medium text-[16px]">
          <span>
            <StarIcon className="w-5 h-5" />
          </span>
          {rate}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-medium text-[20px] mb-4">{title}</h3>
        <p className="text-[16px] text-justify leading-5">{comment}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
