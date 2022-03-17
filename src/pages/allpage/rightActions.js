import { fire, yellowLine } from "../../utils/icons";
import { hero_1 } from "../../utils/icons";
import "../../utils/css/home.css";

function RightActions() {
  return (
    <div className="max-w-7xl mx-auto gap-10 grid md:grid-cols-2 grid-cols-1">
      <div className="flex ">
        <div className="text-white text-xs flex -ml-14 mt-48">
          <button className="-rotate-90 w-20 font-thin">
            <span className="mr-10">FACEBOOK</span>
            <span className="mx-10">INSTAGRAM</span>
            <span className="mx-10">TWITCH</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-60 w-full">
          <div className="flex justify-start items-center gap-2">
            {fire}
            <h1 className="text-base text-cyan-500 border-2 border-cyan-500">
              FUTURE OF ESPORTS
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-white text-2xl md:text-6xl">Unleash The</h1>
            <h1 className="text-white text-2xl md:text-6xl">Next Generation</h1>
            <div className="hidden md:block">{yellowLine}</div>
            <h1 className="text-white text-2xl md:text-6xl">Of Gaming</h1>
            <p className="text-white   text-lg mt-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-white text-lg">
              Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
            </p>
          </div>

          <div className="mt-14 flex gap-10 mb-44">
            <button className="text-white bg-cyan-500 px-8 py-4 hover:bg-cyan-600">
              Explore More
            </button>
            <button className="text-white hover:text-yellow-500">
              View our team
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden md:flex y mt-48"></div>
      </div>
    </div>
  );
}

export default RightActions;
