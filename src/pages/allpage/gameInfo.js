import "../../utils/css/home.css";
import { compas, controller, crosshair } from "../../utils/icons";

function GameInfo() {
  return (
    <div className="md:flex grid grid-cols-1 md:h-[50rem] ">
      <div className="w-full game1 h-full">
        <div className="flex flex-col justify-center items-center md:h-full w-full h-96 ">
          {crosshair}
          <h1 className="text-white text-5xl ">Smooth FPS</h1>
        </div>
      </div>
      <div className="w-full game2 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center md:h-full w-full h-96  ">
          {controller}
          <h1 className="text-white text-5xl">Multiplayer</h1>
        </div>
      </div>
      <div className="w-full game3 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center md:h-full w-full h-96  ">
          {compas}
          <h1 className="text-white text-5xl">Open World</h1>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
