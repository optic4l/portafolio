import htmlLogo from "../../public/assets/languages/frontstack/html-1.svg";
import jsLogo from "../../public/assets/languages/frontstack/logo-javascript.svg";
import reactlogo from "../../public/assets/languages/frontstack/react.svg";
import tailwind from "../../public/assets/languages/frontstack/tailwind-css-2.svg";

import djangoLogo from "../../public/assets/languages/backstack/django.svg";
import nodeLogo from "../../public/assets/languages/backstack/nodejs-3.svg";
import pythonLogo from "../../public/assets/languages/backstack/python-4.svg";

import mysqlLogo from "../../public/assets/languages/bddstack/mysql-6.svg";
import postgreLogo from "../../public/assets/languages/bddstack/postgresql.svg";

import gitLogo from "../../public/assets/toolstack/git.svg";
import postmanLogo from "../../public/assets/toolstack/postman.svg";
import vscLogo from "../../public/assets/toolstack/visual-studio-code-1.svg";

import arduinoLogo from "../../public/assets/others/arduino.svg";
import azureLogo from "../../public/assets/others/azure-2.svg";
import ubuntuLogo from "../../public/assets/others/ubuntu-4.svg";

import CardTech from "./ui/CardTech/CardTech";
import { ItemL, ItemR } from "./ui/CardTech/ItemL";

const TechStack = () => {
  return (
    <div className="d-flex container  mt-[120px] h-[400px] flex-col content-center items-center ">
      <h2 className=" mb-6 border-b border-jaguar-400 text-3xl">Tech Stack</h2>
      <div className="d-flex h-100 w-100 justify-between gap-3 pt-4">
        <CardTech type="front">
          <ItemL logo={reactlogo} text="React Js" />
          <ItemR logo={tailwind} text="Tailwind CSS" />
          <ItemL logo={jsLogo} text="Javascript" />
          <ItemR logo={htmlLogo} text="HTML" />
        </CardTech>

        <CardTech type="back">
          <ItemL logo={djangoLogo} text="Django - DRF" />
          <ItemR logo={pythonLogo} text="Python" />
          <ItemL logo={nodeLogo} text="Node JS" />
        </CardTech>

        <CardTech type="bdd">
          <ItemL logo={mysqlLogo} text="MySQL" />
          <ItemR logo={postgreLogo} text="PostgreSQL" />
        </CardTech>

        <CardTech type="tools">
          <ItemL logo={gitLogo} text="Git" />
          <ItemR logo={postmanLogo} text="Postman" />
          <ItemL logo={vscLogo} text="Visual Studio Code" />
        </CardTech>

        <CardTech type="others">
          <ItemL logo={ubuntuLogo} text="S.O. Linux" />
          <ItemR logo={azureLogo} text="Azure" />
          <ItemR logo={arduinoLogo} text="Arduino" />
        </CardTech>
      </div>
    </div>
  );
};

export default TechStack;
