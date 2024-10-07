export default function Heading({ heading, subHeading }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col  my-4 md:mx-2 mx-1">
        <div className="text-[#832729] text-[20px] text-center md:text-[32px] font-[600] font-fraunces">
          {heading}
        </div>
        <div className="text-[#000] text-center  text-[15px] md:text-[20px] font-[300]">
          {subHeading}
        </div>
      </div>
    </>
  );
}
