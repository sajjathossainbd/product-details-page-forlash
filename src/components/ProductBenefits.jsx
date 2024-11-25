import video from "./../assets/video/video.mp4";
function ProductBenefits() {
  return (
    <div className="bg-primaryLight my-16 py-16">
      <div className="container">
        {/* section title */}
        <div className="text-center">
          <h1>Scientifically Proven,</h1>
          <h1 className="mt-4">Dermatologically Tested & Safe</h1>
          <p className="mt-8">
            Formulated by dermatologists, this Eyelash Enhancing Serum is a
            powerful serum that targets <br /> brittle, short, and sparse lashes
            through its proprietary blend of vitamins, extracts, and peptides{" "}
            <br />
            with just one daily swipe.
          </p>
        </div>
        {/* section details */}
        <div className="lg:flex lg:gap-x-10 mt-10 items-center">
          {/* video player */}
          <div className="lg:w-6/12 h-auto relative">
            <video
              className="w-full h-auto object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          {/* Product Benefits Details */}
          <div className="lg:w-6/12 pt-6 lg:pt-0">
            <div className="mb-4">
              <h4>Rosmarinus Officinalis Leaf Extract</h4>
              <p className="text-lg">
                Cleanses your lash line, removing impurities to unlock the
                potential of your lashes.
              </p>
            </div>
            <div className="mb-4">
              <h4>Panax Ginseng</h4>
              <p className="text-lg">
                Enhances circulation, nourishing your lashes for a fuller, more
                vibrant appearance.
              </p>
            </div>
            <div className="mb-4">
              <h4>Magnolia Officinalis Bark Extract</h4>
              <p className="text-lg">
                Provide essential nutrients, transitioning lashes from dormancy
                to active growth for noticeably longer, fuller results.
              </p>
            </div>
            <div className="">
              <h4>Biotin</h4>
              <p className="text-lg">
                Strengthens lash fibers, preventing breakage while accelerating
                growth. This vital nutrient ensures your lashes not only look
                longer but also remain robust and healthy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBenefits;
