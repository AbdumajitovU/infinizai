import {
  facebook,
  instagram,
  mainLogo,
  telegram,
  twitter,
} from "../../utils/icons";

function Footer() {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 pt-32 px-6 md:px-14 md:space-x-10 space-x-0 space-y-10 md:space-y-0 md:h-[32rem]">
        <div>
          <div className="flex w-full items-center">
            {mainLogo}
            <h1 className="text-xl text-white">
              Infinizai<span className="text-blue-400">.</span>
            </h1>
          </div>
          <div className="text-base mt-12 text-white">
            <p>Lorem ipsum dolor amet,</p>
            <p>consectetur adipiscing elit. Eget</p>
            <p>nisl nunc quam ac sed turpis</p>
            <p>volutpat. Cursus sed massa non</p>
          </div>
        </div>

        <div className="ml-16">
          <ul>
            <li className="text-lg text-white">Menu items</li>
            <li className="text-gray-400 text-sm mt-6">About</li>
            <li className="text-gray-400 text-sm mt-4">Blog</li>
            <li className="text-gray-400 text-sm mt-4">Shop</li>
            <li className="text-gray-400 text-sm mt-4">Contact us</li>
          </ul>
        </div>

        <div className="ml-10">
          <ul>
            <li className="text-lg text-white">Other Pages</li>
            <li className="text-gray-400 text-sm mt-6">Styleguide</li>
            <li className="text-gray-400 text-sm mt-4">Blog</li>
            <li className="text-gray-400 text-sm mt-4">Licenses</li>
            <li className="text-gray-400 text-sm mt-4">Team</li>
          </ul>
        </div>

        <div className="text-lg text-white">
          <h1>Social Icons</h1>
          <div className="flex gap-4 mt-6">
            <div>{telegram}</div>
            <div>{facebook}</div>
            <div>{twitter}</div>
            <div>{instagram}</div>
          </div>
        </div>
      </div>

      <hr className="mx-14 my-6" />

      <p className="text-gray-400 mt-12 text-center">
        Copyright by 2022 Abdumajitov
      </p>
    </div>
  );
}

export default Footer;
