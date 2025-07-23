import React from 'react';

const TanishqExperience = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap mb-10 justify-center">
        <h2 className="text-center font-[400] fraunces md:text-[40px] text-[25px]">
          Tanishq Experience
        </h2>
        <p className="text-center text-[16px] md:text-[20px]">
          Find a Boutique or Book a Consultation
        </p>
      </div>

      <section className="mx-2 flex justify-center items-center md:mx-10 relative">
        {/* Background Images */}
        <img
          src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/bg/uniqueBorder.png"
          className="rounded-lg lg:block min-h-[400px] hidden w-full"
          alt="Background"
        />
        <img
          src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/bg/uniqueBorderMobile.png"
          className="rounded-lg block lg:hidden max-h-[700px] w-full"
          alt="Mobile Background"
        />

        {/* Left Content */}
        <div className="absolute lg:top-unset top-[10%] lg:left-[5%]">
          <div className="pb-4 lg:block flex justify-center flex-col items-center">
            <img
              src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/tanishq-promises/1.png"
              className="rounded-lg mb-10 lg:w-[150px] lg:mx-0 mx-auto w-[100px]"
              alt="Tanishq Promise"
            />
            <h2 className="fraunces text-[28px] lg:text-[60px] font-[400] text-[#300708]">
              Tanishq Exchange
            </h2>
            <p className="ibm-plex lg:w-[500px] lg:mx-0 mx-10 lg:text-[20px] text-center text-[12px] font-[400] text-[#56544E] lg:text-[#300708]">
              Every hour over 100 Indians join Tanishq's exchange community to upgrade their old gold at a better value!
            </p>
          </div>

          {/* Learn More button - Desktop */}
          <div
            className="button-tw rounded-full hover:!bg-[#832729] mt-10 w-fit cursor-pointer hover:shadow-xl hover:translate-y-[-2%] duration-150 hidden lg:flex items-center justify-between pl-8 pr-3 py-[0.8rem] !text-white"
            style={{
              background: 'linear-gradient(90.18deg, rgba(131, 39, 41, 0.6) 0.17%, rgba(99, 21, 23, 0.6) 99.86%)',
            }}
          >
            <a href="https://www.tanishq.co.in/exchange?lang=en_IN">
              <p className="fraunces font-[300]">Learn More</p>
            </a>
            <div
              className="rounded-full ml-4 font-[600] min-w-[30px] max-w-[30px] bg-[#A76767] flex justify-center text-[15px] items-center min-h-[30px] max-h-[30px] text-white"
              style={{
                boxShadow: '16px 16px 15.9px 4px #6315174F inset',
              }}
            >
              <img
                src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/arrow/Arrow right.png"
                className="max-w-[20px] min-w-[20px]"
                alt="Arrow"
              />
            </div>
          </div>
        </div>

        {/* Right Side GIFs */}
        <div className="absolute lg:bottom-unset bottom-[20%] lg:right-[5%]">
          <div className="flex justify-center items-center relative w-full">
            <img
              src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/exchange/exchange-desktop.gif"
              className="lg:block hidden lg:w-[400px] w-[200px] h-[200px] rounded-2xl lg:h-[400px] object-cover"
              alt="Exchange Desktop"
            />
            <img
              src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/exchange/exchange-mobile.gif"
              className="block lg:hidden lg:w-[400px] w-[200px] h-[200px] rounded-2xl lg:h-[400px] object-cover"
              alt="Exchange Mobile"
            />
          </div>
        </div>

        {/* Learn More button - Mobile */}
        <div
          className="button-tw rounded-full absolute bottom-[5%] lg:right-[5%] lg:hidden hover:!bg-[#832729] mt-10 w-fit cursor-pointer hover:shadow-xl hover:translate-y-[-2%] duration-150 flex items-center justify-between pl-8 pr-3 py-[0.8rem] !text-white"
          style={{
            background: 'linear-gradient(90.18deg, rgba(131, 39, 41, 0.6) 0.17%, rgba(99, 21, 23, 0.6) 99.86%)',
          }}
        >
          <a href="https://www.tanishq.co.in/exchange?lang=en_IN">
            <p className="fraunces font-[300]">Learn More</p>
          </a>
          <div
            className="rounded-full ml-4 font-[600] min-w-[30px] max-w-[30px] bg-[#A76767] flex justify-center text-[15px] items-center min-h-[30px] max-h-[30px] text-white"
            style={{
              boxShadow: '16px 16px 15.9px 4px #6315174F inset',
            }}
          >
            <img
              src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/arrow/Arrow right.png"
              className="max-w-[20px] min-w-[20px]"
              alt="Arrow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TanishqExperience;
