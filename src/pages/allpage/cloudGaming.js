import { fire, play } from "../../utils/icons";
import "../../utils/css/home.css";

function CloudGaming() {
  return (
    <div className="flex justify-between px-16 py-40 bg-black">
      <div>
        <div className="flex justify-start items-center gap-2">
          {fire}
          <h1 className="text-base text-cyan-500 border-2 border-cyan-500">
            FUTURE OF ESPORTS
          </h1>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-5xl">The New Era Of </h1>
          <h1 className="text-white text-5xl">Cloud Gaming Here</h1>
        </div>

        <div className="mt-10">
          <p className="text-white text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
          <p className="text-white text-lg">
            accusantium doloremque laudantium, totam rem aperiam, eaque
          </p>
          <p className="text-white text-lg">
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
          </p>
          <p className="text-white text-lg">
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          </p>
        </div>

        <button className="text-white bg-cyan-500 px-8 py-4 mt-14 hover:bg-cyan-600">
          Explore More
        </button>
      </div>

      <div className="player md:flex hidden justify-center items-center ">
        <span className="bg-gray-600 p-10 rounded-full bg-opacity-50">
          {play}
        </span>
      </div>
    </div>
  );
}

export default CloudGaming;
