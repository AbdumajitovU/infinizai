import { fire } from "../../utils/icons";

function NewsPage() {
  return (
    <div className=" h-full pt-32 px-16 bg-black">
      <div>
        <div className="flex justify-start items-center gap-2">
          {fire}
          <h1 className="text-base text-cyan-500 border-2 border-cyan-500">
            FUTURE OF ESPORTS
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="mt-6">
            <h1 className="text-white text-5xl">Latest News &</h1>
            <h1 className="text-white text-5xl">Articles</h1>
          </div>
          <button className="text-white bg-cyan-500 px-8 py-4 mt-14 hover:bg-cyan-600">
            Read More
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        <div>
          <div className="mainC md:inline-block hidden"></div>
          <p className="text-base mt-14 text-cyan-500">April 2, 2021</p>
          <h3 className="mt-7 text-white text-3xl">
            Esports Group Teams Up With
          </h3>
          <h3 className="text-white text-3xl">The Indianapolis Colts</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="new1"></div>
            <p className="text-sm mt-6 text-cyan-500">April 2, 2021</p>
            <h3 className="mt-6 text-white text-md">
              Esports Group Teams Up With
            </h3>
            <h3 className="text-white text-md">The Indianapolis Colts</h3>
          </div>
          <div>
            <div className="new2"></div>
            <p className="text-sm mt-6 text-cyan-500">April 2, 2021</p>
            <h3 className="mt-6 text-white text-md">
              Esports Group Teams Up With
            </h3>
            <h3 className="text-white text-md">The Indianapolis Colts</h3>
          </div>
          <div>
            <div className="new3"></div>
            <p className="text-sm mt-6 text-cyan-500">April 2, 2021</p>
            <h3 className="mt-6 text-white text-md">
              Esports Group Teams Up With
            </h3>
            <h3 className="text-white text-md">The Indianapolis Colts</h3>
          </div>
          <div>
            <div className="new4"></div>
            <p className="text-sm mt-6 text-cyan-500">April 2, 2021</p>
            <h3 className="mt-6 text-white text-md">
              Esports Group Teams Up With
            </h3>
            <h3 className="text-white text-md">The Indianapolis Colts</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
