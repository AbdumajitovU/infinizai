import { diamond, fire } from "../../utils/icons";

function ShopPage() {
  return (
    <div className="flex flex-col items-center py-32 w-full h-full">
      <div className="flex justify-start items-center gap-2">
        {fire}
        <h1 className="text-base text-cyan-500 border-2 border-cyan-500">
          FUTURE OF ESPORTS
        </h1>
      </div>

      <div className="text-white text-center text-3xl md:text-6xl mt-6">
        <h1>Your One Stop Shop </h1>
        <h1>Gaming Needs!</h1>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm md:text-lg text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </p>
        <p className="text-lg text-white">
          accusantium doloremque laudantium, totam rem aperiam
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-10">
        <div className="rounded-3xl md:py-10 md:px-16 p-8 space-y-4 bg-opacity-40 text-white bg-gray-400">
          <div className="diamond flex">
            {diamond}
            <h1 className="text-3xl ml-2">All New Gameplay</h1>
          </div>
          <div>
            <p>Vivamus magna justo, lacinia eget coecetur</p>
            <p>sed, convallis at tellus. Curabitur non nulla sit</p>
            <p>Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
        <div className="rounded-3xl md:py-10 md:px-16 p-8 space-y-4 bg-opacity-40 text-white bg-gray-400">
          <div className="flex">
            {diamond}
            <h1 className="text-3xl ml-2">Generation Graphics</h1>
          </div>
          <div>
            <p>Vivamus magna justo, lacinia eget coecetur</p>
            <p>sed, convallis at tellus. Curabitur non nulla sit</p>
            <p>Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
        <div className="rounded-3xl md:py-10 md:px-16 p-8 space-y-4 bg-opacity-40 text-white bg-gray-400">
          <div className="flex">
            {diamond}
            <h1 className="text-3xl ml-2">Lastest Game Engine</h1>
          </div>
          <div>
            <p>Vivamus magna justo, lacinia eget coecetur</p>
            <p>sed, convallis at tellus. Curabitur non nulla sit</p>
            <p>Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
        <div className="rounded-3xl md:py-10 md:px-16 p-8 space-y-4 bg-opacity-40 text-white bg-gray-400">
          <div className="flex">
            {diamond}
            <h1 className="text-3xl ml-2">Multiplayer on the go</h1>
          </div>
          <div>
            <p>Vivamus magna justo, lacinia eget coecetur</p>
            <p>sed, convallis at tellus. Curabitur non nulla sit</p>
            <p>Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
