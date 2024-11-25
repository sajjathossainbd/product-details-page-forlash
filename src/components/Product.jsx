import React, { useState } from "react";
import ProductImg from "./../assets/product.webp";
import ProductImg2 from "./../assets/product2.webp";
import ProductImg3 from "./../assets/product3.webp";
import ProductImg4 from "./../assets/product4.webp";
import ProductImg5 from "./../assets/product5.webp";
import ProductImg6 from "./../assets/product6.webp";
import Date from "./../assets/icon/date.svg";
import Eye from "./../assets/icon/eye.svg";
import Hair from "./../assets/icon/hair.png";
import Price from "./../assets/icon/price.png";
import PaymentMethods from "./../assets/icon/payment.svg";
import { FaArrowRight, FaStar } from "react-icons/fa";

const productImages = [
  ProductImg,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
];

const bottlesData = [
  {
    id: 1,
    bottleNumber: 4,
    price: 17.5,
    offers: ["Digital Book", "Free Shipping", "Lash Curler", "Mascara"],
  },
  {
    id: 2,
    bottleNumber: 3,
    price: 19.6,
    offers: ["Digital Book", "Free Shipping", "Lash Curler"],
  },
  {
    id: 3,
    bottleNumber: 2,
    price: 21.5,
    offers: ["Digital Book", "Free Shipping"],
  },
  { id: 4, bottleNumber: 1, price: 24, offers: ["Digital Book"] },
];

const faqData = [
  { question: "Description", answer: "Here is the description content." },
  { question: "How to apply", answer: "How to apply the product." },
  {
    question: "Ingredients",
    answer: "These are the ingredients of the product.",
  },
  {
    question: "Does it really work?",
    answer:
      "Yes, it works! It usually takes 8-12 weeks to see full results. Ensure consistent use for best outcomes.",
  },
  {
    question: "What is the 100% results guarantee?",
    answer: "Details about the 100% results guarantee.",
  },
];

const Product = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(productImages[0].src);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  const selectedBottle = bottlesData.find((bottle) => bottle.id === activeCard);

  const BottleCard = ({ bottle }) => (
    <div
      onClick={() => handleCardClick(bottle.id)}
      className={`border flex gap-2 items-center rounded-lg py-3 px-2 cursor-pointer transition-all ${
        activeCard === bottle.id ? "border-primary" : "border-gray-500"
      }`}
    >
      <div
        className={`flex w-6 h-6 rounded-full me-6 border ${
          activeCard === bottle.id
            ? "border-[8px] border-primary p-1 bg-white w-0 h-0"
            : "border-gray-500"
        }`}
      ></div>
      <div>
        <h4>{bottle.bottleNumber} Bottles</h4>
        <p>${bottle.price}/each</p>
      </div>
    </div>
  );

  return (
    <div className="container py-10 lg:flex gap-y-6 lg:gap-x-6">
      {/* Product Image */}
      <div className="lg:w-6/12 h-full mx-auto">
        {/* Main Product Image */}
        <img
          className="rounded-lg w-full h-auto object-cover"
          src={selectedImage}
          alt="Product"
        />

        {/* Thumbnail Images */}
        <div className="flex gap-4 mt-4 overflow-x-auto">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer border-2 rounded-lg ${
                selectedImage === image
                  ? "border-primaryLight p-1"
                  : "border-gray-100 p-1"
              }`}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-6 lg:mt-0 lg:w-6/12">
        {/* Reviews Numbers */}
        <div className="mb-2">
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <p>Excellent 4.9</p>
            <p>(1703 reviews)</p>
          </div>
        </div>

        {/* Title & Description */}
        <h2>Save Up To 56% Today + 4 FREE Gifts</h2>
        <h5 className="mt-4">Get fuller and healthier eyelashes in 30 days</h5>

        {/* Additional Details */}
        <div className="mt-4">
          <p className="flex gap-3">
            <img src={Date} alt="Date" className="text-sm" /> Results in 2 weeks
          </p>
          <p className="flex gap-3 mt-3">
            <img src={Price} alt="Price" className="h-7" /> Affordable treatment
          </p>
          <p className="flex gap-3 mt-2">
            <img src={Eye} alt="Eye" className="text-sm" /> Long-lasting result
          </p>
          <p className="flex gap-3 mt-2">
            <img src={Hair} alt="Hair" className="h-7" /> Revitalize hair
            follicle
          </p>
        </div>

        {/* Free Gifts */}
        <p className="outline-dashed outline-2 outline-primary outline-offset-2 bg-primaryLight py-3 text-center font-bold rounded-lg mt-6 flex items-center justify-center">
          <span className="flex w-3 h-3 me-3 bg-primary rounded-full"></span>
          Order by Nov. 27th for guaranteed FREE Gifts
        </p>

        {/* Bottles Card */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {bottlesData.map((bottle) => (
            <BottleCard key={bottle.id} bottle={bottle} />
          ))}
        </div>

        {/* Offer */}
        <div className="flex items-center justify-center gap-1 mt-5 text-sm">
          <span className="font-semibold">EXCLUSIVE SALE!</span>
          <span>FREE Gifts With Your First Order</span>
        </div>

        {/* Bottles Quantity Offer Show */}
        <div className="mt-4 flex gap-2">
          {selectedBottle?.offers.map((offer, index) => (
            <div
              key={index}
              className="bg-primary px-4 py-2 rounded-md text-white text-sm font-semibold"
            >
              {offer}
            </div>
          ))}
        </div>

        {/* Stock Availability */}
        <p className="text-green-500 flex items-center gap-[2px] my-4 font-semibold">
          <span className="flex w-3 h-3 me-3 bg-green-600 rounded-full"></span>
          In stock - Limited units available
        </p>

        {/* Add to Cart Button */}
        <button className="uppercase bg-black py-6 text-2xl rounded-md text-white w-full flex items-center justify-center relative">
          <span className="font-bold">Add To Cart</span>
          <FaArrowRight className="absolute right-6 font-normal" />
        </button>

        {/* Payment Methods */}
        <img className="py-4" src={PaymentMethods} alt="Payment Methods" />

        {/* FAQ Section */}
        <div className="faq-container mx-auto my-8 border border-gray-300 rounded-md shadow-sm">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item border-b last:border-b-0">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                {faq.question}
                <span>
                  {activeIndex === index ? (
                    <svg
                      className="w-5 h-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 12h12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 12h12M12 6v12"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-gray-50 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
