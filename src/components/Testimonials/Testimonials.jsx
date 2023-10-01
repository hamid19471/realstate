import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import axios from "axios";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/testimonials");
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold ">
          Our Testimonials
        </h3>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <p>See all</p>
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials?.map((testimonial) => (
          <TestimonialCard {...testimonial} key={testimonial.id} />
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
