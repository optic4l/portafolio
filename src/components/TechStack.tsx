import htmlLogo from "../assets/frontstack/html-1.svg";
import jsLogo from "../assets/frontstack/logo-javascript.svg";
import reactlogo from "../assets/frontstack/react.svg";
import tailwind from "../assets/frontstack/tailwind-css-2.svg";

import djangoLogo from "../assets/backstack/django.svg";
import nodeLogo from "../assets/backstack/nodejs-3.svg";
import pythonLogo from "../assets/backstack/python-4.svg";

import mysqlLogo from "../assets/bddstack/mysql-6.svg";
import postgreLogo from "../assets/bddstack/postgresql.svg";

import gitLogo from "../assets/toolstack/git.svg";
import postmanLogo from "../assets/toolstack/postman.svg";
import vscLogo from "../assets/toolstack/visual-studio-code-1.svg";

import arduinoLogo from "../assets/others/arduino.svg";
import awsLogo from "../assets/others/aws-2.svg";
import azureLogo from "../assets/others/azure-2.svg";
import ubuntuLogo from "../assets/others/ubuntu-4.svg";

import CardTech from "./ui/CardTech/CardTech";
import { ItemL, ItemR } from "./ui/CardTech/ItemL";

const TechStack = () => {
  return (
    <div className="d-flex container  mt-[120px] h-[400px] flex-col content-center items-center ">
      <h2 className=" mb-6 border-b border-jaguar-400 text-3xl">Tech Stack</h2>
      <div className="d-flex h-100 w-100 justify-between gap-3 pt-4">
        <CardTech bgimage="/src/assets/frontstack/frontBG.svg">
          <ItemL logo={reactlogo} text="React Js" />
          <ItemR logo={tailwind} text="Tailwind CSS" />
          <ItemL logo={jsLogo} text="Javascript" />
          <ItemR logo={htmlLogo} text="HTML" />
        </CardTech>

        <CardTech bgimage="/src/assets/backstack/server.svg">
          <ItemL logo={djangoLogo} text="Django - DRF" />
          <ItemR logo={pythonLogo} text="Python" />
          <ItemL logo={nodeLogo} text="Node JS" />
        </CardTech>

        <CardTech bgimage="/src/assets/bddstack/bddBG.svg">
          <ItemL logo={mysqlLogo} text="MySQL" />
          <ItemR logo={postgreLogo} text="PostgreSQL" />
        </CardTech>

        <CardTech bgimage="/src/assets/toolstack/toolsBG.svg">
          <ItemL logo={gitLogo} text="Git" />
          <ItemR logo={postmanLogo} text="Postman" />
          <ItemL logo={vscLogo} text="Visual Studio Code" />
        </CardTech>

        <CardTech bgimage="/src/assets/others/otherBG.svg">
          <ItemL logo={ubuntuLogo} text="S.O. Linux" />
          <ItemR logo={azureLogo} text="Azure" />
          <ItemL logo={awsLogo} text="AWS" />
          <ItemR logo={arduinoLogo} text="Arduino" />
        </CardTech>
      </div>
    </div>
  );
};

export default TechStack;
