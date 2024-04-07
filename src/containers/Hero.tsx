import coding from "../assets/Handcoding-bro.svg";
import gitLogo from "../assets/github-icon-2.svg";
import linkedin from "../assets/linkedin-icon-2.svg";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState } from "react";
import cv from "../assets/Doc/CV-DroguettLucas-2.pdf";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      id="home"
      className="container mt-20 flex h-[60vh] w-full items-center justify-between text-jaguar-50"
    >
      <div>
        <p className="text-lg">Hola! Mi nombre es</p>
        <p className="text-5xl font-bold">
          Lucas <span className="text-jaguar-400">Droguett Garate</span>,
        </p>
        <p className="text-xl">
          Soy{" "}
          <strong className="font-bold text-jaguar-100">
            desarrollador de software
          </strong>
        </p>
        <div className="flex justify-between pt-4">
          <a href={cv} target="_blank">
            <button className=" h-12 w-24 self-center rounded-xl border-2 border-jaguar-50  text-jaguar-50 hover:border-jaguar-400 hover:text-jaguar-400">
              Ver CV
            </button>
          </a>
          <div className="flex justify-start gap-3 py-3">
            <a
              className=" h-10 w-10 rounded-sm  transition delay-150  duration-300 ease-in-out hover:scale-110"
              href="https://github.com/optic4l"
              target="_blank"
            >
              <img src={gitLogo} />
            </a>
            <a
              className="h-10 w-10 rounded-sm transition delay-150 duration-300 ease-in-out hover:scale-110"
              href="https://www.linkedin.com/in/lucas-droguett/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
            <CopyToClipboard onCopy={handleCopy} text="droguett.lcs@gmail.com">
              <span className="group h-10 w-10 rounded-sm transition delay-150 duration-300 ease-in-out hover:scale-110 hover:cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="fill-jaguar-50 stroke-jaguar-50 text-jaguar-50"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>{" "}
                <span className="bg-gray-50 text-gray-600 ring-gray-500/10 hidden  items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset group-hover:inline-flex">
                  {copied ? "¡Copiado!" : "droguett.lcs@gmail.com"}
                </span>
              </span>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <div className="w-50">
        <img className="" src={coding} />
      </div>
    </div>
  );
};

export default Hero;
