const Coworker = ({ image, name, desc }) => {
  return (
    <div className="ml-[.5rem] min-[425px]:ml-[2.2rem] min-[1440px]:mx-[5vw] ">
      <div className="bg-[rgba(66,66,66,0.05)] w-[362px] h-[592px] flex flex-col items-start justify-start rounded-2xl">
        <img src={image} alt="" />
        <div className="flex flex-col text-center items-center justify-center w-[100%] my-3">
          <h2 className="f-medium text-[30px] text-[#424242]">{name}</h2>
          <p className="f-roman mx-4 text-[18px] text-[#828282] leading-4">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coworker;
