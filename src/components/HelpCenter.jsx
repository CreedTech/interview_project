/* eslint-disable react/prop-types */

import meetingImage from '../assets/undraw_in_the_office_re_jtgc.svg';

const HelpCenter = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 pb-24 px-12">
        <div className="flex flex-1 justify-start flex-col mf:mr-10 mt-40">
          <h1 className="text-2xl sm:text-3xl text-white  uppercase">
            Help Center
          </h1>
          <p className="text-left mt-3 text-white font-normal md:w-9/12 w-11/12 text-[1rem] tracking-wider">
            Home &gt; Page &gt; Help center &gt;
          </p>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="md:flex-[0.2] flex-initial justify-center items-center">
            <img
              src={meetingImage}
              alt={meetingImage}
              className="w-[1000px] cursor-pointer"
            />
          </div>
          {/* <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
