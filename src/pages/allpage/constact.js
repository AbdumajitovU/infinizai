function ContactPage() {
  return (
    <div className="flex flex-col items-center md:h-[40rem]">
      <div>
        <div className="flex flex-col items-center ">
          <h1 className="text-gray-900 text-4xl md:text-5xl font-semibold mt-32">
            Join the largest{" "}
          </h1>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-semibold ">
            gaming community
          </h1>
          <div className="ml-48 mt-2 md:inline-block hidden">
            <svg
              width="300"
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
      </div>
      <div className="mt-14">
        <p className="font-thin text-base text-center">
          donec in morbi pulvinar. Enim non pulvinar neque.{" "}
        </p>
        <p className="font-thin text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec{" "}
        </p>
        <p className="font-thin text-base text-center">
          donec in morbi pulvinar. Enim non pulvinar neque.{" "}
        </p>
      </div>
      <div className="mt-11 flex flex-col md:flex-row md:gap-0 items-center gap-2 py-4">
        <input className="w-96 h-20 p-6" placeholder="Your email address" />
        <button className="w-96 md:w-40 h-20 bg-sky-400 text-white">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
