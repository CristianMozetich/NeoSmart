import LogoIcon from "../icons/LogoIcon";
import LinkedinIcon from "../icons/LinkedIn";
import IgIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-tertiarySlate to-secondarySlate p-6 text-white">
      <div>
        <div className="flex items-center gap-2">
          <LogoIcon />
          <h1 className="text-white">NeoPrompts</h1>
        </div>
        <div className="grid grid-cols-4 items-center m-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1>EUROPE</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, iure.
              </span>
            </div>
            <div className="flex flex-col">
              <h1>USA</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, iure.
              </span>
            </div>
          </div>
          <div>
            <ul className="flex flex-col">
              <li>Neoprompts</li>
              <li>Neoprompts Blog</li>
              <li>Neoprompts Academy</li>
              <li>Neoprompts Resources</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul>
              <li>Legal Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of service</li>
            </ul>
            <div className="flex gap-4 items-center">
              <LinkedinIcon />
              <IgIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Enter your email to get update</h1>
            <form className="flex flex-col gap-4">
              <p>Email address</p>
              <input
                type="text"
                placeholder="Email"
                className="w-72 h-8 rounded-md"
              />
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
                  I would like to receive commercial information from Neoprompts
                </p>
              </div>
              <div className="flex justify-start">
              <button className="bg-neoBrandTertiary rounded-sm text-white h-9 text-center  p-2">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-8 p-4">
        <p>support@neopropmts.ia</p>
        <p className="ml-4">Neopromts is a product of <strong>Neosmart</strong>, all rights reserved.</p>
      </div>
    </footer>
  );
}
