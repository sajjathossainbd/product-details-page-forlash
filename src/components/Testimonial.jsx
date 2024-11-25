import React from "react";
import { FaStar } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";

const testimonialData = [
  {
    id: 1,
    name: "Emma S.",
    title: "Sceptical at first, but",
    content:
      "I was skeptical at first, but the difference is undeniable! It’s only been a month and my lashes are noticeably thicker and longer. I feel so much more confident without mascara!",
  },
  {
    id: 2,
    name: "Sophia L.",
    title: "Lives up top its promises",
    content:
      "Finally, a serum that lives up to its promises! My lashes were always brittle and short, but after using ForLash for just a few weeks, they’ve transformed. They’re not only longer, but stronger and healthier looking.",
  },
  {
    id: 3,
    name: "Ava J.",
    title: "Visible improvements",
    content:
      "I’ve tried every lash enhancer out there, but this one is a game changer. I saw visible improvements in just under three weeks, and I love how my lashes now frame my eyes. Big thanks to ForLash!",
  },
];

function Testimonial() {
  const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="bg-white rounded-lg p-6 text-center w-full max-w-sm mx-auto pb-16">
        {/* Star Rating */}
        <div className="flex justify-center gap-1 text-xl mb-4">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <FaStar className="text-yellow-400" />
            ))}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2">{testimonial.title}</h3>

        <p className="text-gray-600 mb-4">“{testimonial.content}”</p>

        <p className="font-bold text-sm mb-2">{testimonial.name}</p>

        <div className="flex justify-center items-center gap-2">
          <VscVerifiedFilled className="text-2xl text-primary" />
          <span className="text-sm text-gray-500">Verified Buyer</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="container flex items-center justify-between flex-wrap">
        {testimonialData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
