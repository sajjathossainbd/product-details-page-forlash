import Logo from "./../assets/logo.webp";
const Footer = () => {
  return (
    <footer className="bg-[#232322] text-white py-16">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Get 10% Off Your First Order
          </h2>
          <p className="text-white mb-4">
            Let's keep it simple. Only the news & updates you need, and 10% off
            your first order.
          </p>
          <form className="flex justify-center items-center gap-4  mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-lg w-full md:w-2/3 text-black max-w-lg"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg"
            >
              GET YOUR COUPON
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
          <div className="md:col-span-1 text-center md:text-left">
            <img src={Logo} alt="" />
            <p className="text-white mt-2">
              ForChics is committed to creating thoughtful, modern haircare
              treatments that serve to empower and embrace natural beauty.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Shop Concerns</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-white">
                  Eyelash Enhancing Serum
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Eyebrow Enhancing Serum
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Better Than Falsies Mascara
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Bundles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Check us out!</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Content Creator Program
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Need a hand?</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-white">
                  Growth Guarantee
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="font-bold mb-4">Social ForChics</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="text-white hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-white">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-white hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white hover:text-white">
                <i className="fab fa-snapchat"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
