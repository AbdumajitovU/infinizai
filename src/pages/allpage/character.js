import { fire } from "../../utils/icons";

function CharacterPage() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:py-0 py-10 px-16 h-full">
      <div className="char-img md:inline-block hidden"></div>
      <div>
        <div className="flex justify-start items-center mt-24 gap-2">
          {fire}
          <h1 className="text-base text-cyan-500 border-2 border-cyan-500">
            FUTURE OF ESPORTS
          </h1>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-5xl">Customize Your </h1>
          <h1 className="text-white text-5xl">Own Character</h1>
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

        <div className="gap-8 mt-16 md:flex hidden">
          <div className="char-game1"></div>
          <div className="char-game2"></div>
          <div className="char-game3"></div>
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
