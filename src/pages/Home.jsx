import {
  Navbar,
  Footer,
  Questions,
  Categories,
  Services,
  HelpCenter,
} from '../components';
import { BsSearch } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <HelpCenter />
        <div className="w-75 flex flex-row justify-between relative top-10 pt-5 pb-4 mf:px-10 px-8 search-hero mf:mx-48 shadow-lg">
          <div className="w-[80%] mt-2">
            <input
              type="text"
              id="input-group-1"
              className=" border-b-2 mx-1  text-xl  w-full mf:w-10/12  bg-transparent placeholder-slate-400 "
              placeholder="Search Our Help Center"
            />
          </div>
          <div>
            <button className="bg-[#5218C7] mf:py-4 py-2 mf:mr-4 px-8 text-white rounded-[50px] uppercase">
              {' '}
              <BsSearch className="cursor-pointer text-white mf:inline hidden mf:mr-4" />{' '}
              Search
            </button>
          </div>
        </div>
      </div>
      <Services />
      <div className="my-80"></div>
      <Categories />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
