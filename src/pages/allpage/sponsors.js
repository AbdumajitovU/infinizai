import { amara, circle, ideaa, lightAI, muzika } from "../../utils/icons";

function Sponsors() {
  return (
    <div className=" md:h-[32rem] bg-yellow-300 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 py-20 justify-center">
        <div className="flex flex-col items-center h-full ">
          <h1 className="text-gray-900 text-5xl font-semibold ">
            Our Sponsors
          </h1>
          <div className="ml-24 mt-2">
            <svg
              width="240"
              height="12"
              viewBox="0 0 292 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C22.5395 3.96301 108.895 -4.48877 290 10"
                stroke="#57B8FF"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div>
          <p className="font-thin text-base text-center h-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec{" "}
          </p>
          <p className="font-thin text-base text-center">
            donec in morbi pulvinar. Enim non pulvinar neque.{" "}
          </p>
        </div>

        <div className="md:flex grid grid-cols-2 h-full gap-8">
          <div className="bg-orange-200 h-24 w-48 rounded-lg flex justify-center items-center">
            {ideaa}
          </div>
          <div className="bg-orange-200 h-24 w-48 rounded-lg flex justify-center items-center">
            {amara}
          </div>
          <div className="bg-orange-200 h-24 w-48 rounded-lg flex justify-center items-center">
            {lightAI}
          </div>
          <div className="bg-orange-200 h-24 w-48 rounded-lg flex justify-center items-center">
            {circle}
          </div>
          <div className="bg-orange-200 h-24 w-48 rounded-lg flex justify-center items-center">
            {muzika}
          </div>
          <div className="bg-orange-200 h-24 w-48 rounded-lg flex justify-center items-center">
            {lightAI}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
