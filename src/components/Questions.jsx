const Questions = () => {
  return (
    <div className="bg-white">
      <div className="w-full  flex md:justify-center justify-center items-center question-bg">
        <div className="flex w-full flex-col justify-center items-center 2xl:px-20 h-3/5">
          <div className="flex flex-col items-center md:p-12 py-12 px-4">
            <h3 className="text-[#FC840C] text-3xl  text-center my-2 uppercase">
              Did you not find what
            </h3>
            <h2 className="text-black text-4xl text-center uppercase">
              you were looking for
            </h2>
            <p>Ut reiciendis deleniti eum possimus eveniet qui iste </p>
          </div>
          <div className="flex mf:flex-row flex-col justify-center items-center ">
            <div className="flex  bg-[#4B16C7] shadow-lg px-16 my-3 py-6 mx-6 flex-col justify-around items-center ">
              <div>
                <p className="text-xl text-white">
                  terms and
                </p>
              </div>
            </div>
            <div className="flex  bg-[#FC840C] shadow-lg px-16 my-3 py-6 mx-6 flex-col justify-around items-center ">
              <div>
                <p className="text-xl text-white">
                  terms and
                </p>
              </div>
            </div>
            <div className="flex  bg-[#4B16C7] shadow-lg px-16 py-6 my-3 mx-6 flex-col justify-around items-center ">
              <div>
                <p className="text-xl text-white">
                  terms and
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
