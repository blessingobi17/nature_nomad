import reviews from "/data/review.json";
import { format } from "date-fns";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const date = new Date();
  const formattedDate = format(date, "MMM d, yyyy");

  return (
    <section className="pt-16">
      <div>
        <h1 className="font-ptSerif font-medium text-3xl border-b border-b-gray-200 pb-2">
          Reviews
        </h1>
        {reviews.map((review) => (
          <article className="border-b border-b-gray-200 pb-4" key={review.id}>
            <h2 className="pt-4 font-medium pb-1">{review.name}</h2>
            <div className="flex gap-1">
              <FaStar className="h-2 w-2" />
              <FaStar className="h-2 w-2" />
              <FaStar className="h-2 w-2" />
              <FaStar className="h-2 w-2" />
              <FaStar className="h-2 w-2" />
            </div>
            <span className="text-xs text-gray-500 font-ptSerif">
              {formattedDate}
            </span>
            <p className="text-sm font-ptSerifv pt-2">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
