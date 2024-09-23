const Testimonials = ({ desc, image, name, job }) => {
  return (
    <div className="bg-[rgba(66,66,66,0.05)] p-6 gap-6 flex flex-col items-start justify-between rounded-2xl min-[1024px]:w-[35vw] min-[1024px]:h-[50vw] min-[1440px]:w-[35vw] min-[1440px]:h-[15.5vw] min-[1440px]:p-[1.1vw] min-[1440px]:rounded-[.8vw]">
      <p className="f-roman text-[1.2rem] text-[#232323] italic min-[1024px]:text-[1.75rem] min-[1440px]:text-[1.45vw]">
        {desc}
      </p>
      <div className="flex items-center justify-center gap-3 min-[1440px]:gap-[.5vw]">
        <img src={image} alt={image} className="min-[1440px]:w-[3vw]" />
        <div>
          <h3 className="f-medium text-[1rem] text-[black] leading-4 min-[1440px]:text-[.9vw] min-[1440px]:leading-[.9vw]">
            {name}
          </h3>
          <h4 className="f-light text-[1rem] text-[#949494] leading-4 min-[1440px]:text-[.9vw] min-[1440px]:leading-[.9vw]">
            {job}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
