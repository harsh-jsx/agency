import React from "react";
import { WrapButton } from "./WrapButton";
import { Globe } from "lucide-react";
import DecryptedText from "./DecryptedText";

const Navbar = () => {
  return (
    <nav className="flex p-5 font-[font1] justify-between border-2 border-gr">
      <div className="brand">
        {" "}
        <h1 className="text-6xl font-[font2]">MyApp</h1>
      </div>
      <div className="nav-links ">
        <ul className="flex flex-row gap-5 p-5 text-2xl">
          <li>
            <a href="#home">
              <DecryptedText
                text="Home"
                speed={80}
                maxIterations={10}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </a>
          </li>
          <li>
            <a href="#about">
              {" "}
              <DecryptedText
                text="About"
                speed={80}
                maxIterations={10}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </a>
          </li>
          <li>
            <a href="#services">
              <DecryptedText
                text="Services"
                speed={80}
                maxIterations={10}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </a>
          </li>
          <li>
            <a href="#contact">
              <DecryptedText
                text="Contact"
                speed={80}
                maxIterations={10}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="cta text-white  ">
        <WrapButton className="mt-10" href="/contact">
          <Globe className="animate-spin " />
          Get started
        </WrapButton>
      </div>
    </nav>
  );
};

export default Navbar;
