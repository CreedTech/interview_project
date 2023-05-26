// RiLuggageDepositFill
import { RiLuggageDepositFill ,RiAccountCircleFill} from 'react-icons/ri';
import { GiBurningBook } from 'react-icons/gi';
import { SlReload } from 'react-icons/sl';
const Categories = () => {
  return (
    <div className="w-full flex md:justify-center justify-center items-center flex-col gradient-bg-welcome mb-80">
      <div className="flex w-full justify-center items-center 2xl:px-20 pt-20">
        <div className="flex flex-col md:p-12 py-12 px-4">
          <h3 className="text-[#FC840C] text-3xl text-center my-2 uppercase">
            Got Any Question
          </h3>
          <h2 className="text-white text-4xl text-center uppercase">
            Browse all categories
          </h2>
          <div className="flex mf:flex-row flex-col justify-center items-center relative top-60 bottom-80">
            <div className="flex w-1/5 h-[30rem] bg-white shadow-lg px-8 py-6 mx-6 flex-col justify-around items-center ">
            <div className="flex flex-col justify-around items-center uppercase">
                <RiLuggageDepositFill size={30} className="cursor-pointer text-black inline mr-4 mb-4" />
                <p className='text-xl'>Deposit</p>
              </div>
              <div>
              <p className='text-xl'>
                  Et iusto consequatur et assumenda voluptas est quia galisum.
                  Quo offica quibusdam rem eveniet necessitatibus
                </p>
              </div>
              <div>
                <p className="uppercase text-xl">Niyia</p>
              </div>
            </div>
            <div className="flex w-1/5 h-[30rem] bg-[#4B16C7] shadow-lg px-8 py-6 mx-6 flex-col justify-around items-center ">
            <div className="flex flex-col justify-around items-center uppercase">
                <GiBurningBook size={30} className="cursor-pointer text-white inline mr-4 mb-4" />
                <p className='text-xl'>Deposit</p>
              </div>
              <div>
                <p className='text-xl text-white'>
                  Et iusto consequatur et assumenda voluptas est quia galisum.
                  Quo offica quibusdam rem eveniet necessitatibus
                </p>
              </div>
              <div>
                <p className="uppercase text-white text-xl">Niyia</p>
              </div>
            </div>
            <div className="flex w-1/5 h-[30rem] bg-white shadow-lg px-8 py-6 mx-6 flex-col justify-around items-center ">
            <div className="flex flex-col justify-around items-center uppercase">
                <SlReload size={30} className="cursor-pointer text-black inline mr-4 mb-4" />
                <p className='text-xl'>Deposit</p>
              </div>
              <div>
              <p className='text-xl'>
                  Et iusto consequatur et assumenda voluptas est quia galisum.
                  Quo offica quibusdam rem eveniet necessitatibus
                </p>
              </div>
              <div>
                <p className="uppercase text-xl">Niyia</p>
              </div>
            </div>
            <div className="flex w-1/5 h-[30rem] bg-white shadow-lg px-8 py-6 mx-6 flex-col justify-around items-center ">
              <div className="flex flex-col justify-around items-center uppercase">
                <RiAccountCircleFill size={30} className="cursor-pointer  text-black inline mr-4 mb-4" />
                <p className='text-xl'>Deposit</p>
              </div>
              <div>
              <p className='text-xl'>
                  Et iusto consequatur et assumenda voluptas est quia galisum.
                  Quo offica quibusdam rem eveniet necessitatibus
                </p>
              </div>
              <div>
                <p className="uppercase text-xl">Niyia</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
