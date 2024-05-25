import LogoIcon from "../icons/LogoIcon";
import LinkedinIcon from "../icons/LinkedIn";
import IgIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";
import LogoFooter from "../icons/LogoFooter";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r dark:from-tertiarySlate dark:to-secondarySlate text-fillicon p-6 dark:text-white bg-slate-100">
      <div>
        <div className="flex items-center gap-2">
          <LogoIcon />
          <LogoFooter/>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 items-center m-6">
          <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-col md:items-start items-center m-2">
              <h1 className="font-bold">EUROPE</h1>
              <p>Vía de las dos castillas, 33</p>
              <p>Edificio Ática 7, Planta 3</p>
              <p>28224 Pozuelo de Alarcón</p>
              <p>Madrid, Spain</p>
            </div>
            <div className="flex flex-col md:items-start items-center m-2">
              <h1 className="font-bold">USA</h1>
              <p>1101 Brickell Ave Suite</p>
              <p>N1400 33131, Miami FL</p>
              <p>United States</p>
            </div>
          </div>
          <div className="m-2">
            <ul className="flex flex-col items-center md:items-start">
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">Neoprompts</li>
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">Neoprompts Blog</li>
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">Neoprompts Academy</li>
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">Neoprompts Resources</li>
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">FAQs</li>
            </ul>
          </div>
          <div className="gap-4 m-2">
            <ul className="flex flex-col items-center md:items-start">
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">Legal Policy</li>
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">Privacy Policy</li>
              <li className="hover:text-neoBrandTertiary cursor-pointer transition-all">Terms of service</li>
            </ul>
            <div className="flex gap-4 items-center mt-5">
              <LinkedinIcon />
              <IgIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className="flex flex-col gap-6 m-2">
            <h1 className="font-bold">Enter your email to get update</h1>
            <form className="flex flex-col">
              <p className="text-sm">Email address</p>
              <input
                type="text"
                placeholder="Email"
                className="max-w-72 h-8 bg-transparent px-2 rounded-md dark:bg-white border-black border text-secondarySlate dark:border-none"
              />
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p>
                    I have read and accept the Terms and Conditions and the
                    Privacy Policy
                  </p>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p>
                    I would like to receive commercial information from
                    Neoprompts
                  </p>
                </div>
                <div className="flex justify-start">
                  <button className="bg-neoBrandTertiary flex items-center rounded-md text-white h-9 text-center px-4 py-4">
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-8 p-4">
        <p>support@neopropmts.ia</p>
        <p className="ml-4">
          Neopromts is a product of <strong>Neosmart</strong>, all rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
