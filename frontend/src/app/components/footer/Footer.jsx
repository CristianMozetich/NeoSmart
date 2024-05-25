import React from "react";
import LogoIcon from "../icons/LogoIcon";
import LinkedinIcon from "../icons/LinkedIn";
import IgIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";
import LogoFooter from "../icons/LogoFooter";
import AddressComponent from "../addressComponent/AddressComponent";
import LinkListComponent from "../linkList/LinkList";
import SubscriptionForm from "../subscripcion/Subscripcion";

//Footer
const Footer = () => {
  const europeAddress = [
    "Vía de las dos castillas, 33",
    "Edificio Ática 7, Planta 3",
    "28224 Pozuelo de Alarcón",
    "Madrid, Spain",
  ];

  const usaAddress = [
    "1101 Brickell Ave Suite",
    "N1400 33131, Miami FL",
    "United States",
  ];

  const neoPromptsLinks = [
    "Neoprompts",
    "Neoprompts Blog",
    "Neoprompts Academy",
    "Neoprompts Resources",
    "FAQs",
  ];

  const policyLinks = ["Legal Policy", "Privacy Policy", "Terms of service"];

  return (
    <footer className="bg-gradient-to-r dark:from-tertiarySlate dark:to-secondarySlate text-fillicon p-6 dark:text-white bg-slate-100">
      <div>
        <div className="flex items-center gap-2">
          <LogoIcon />
          <LogoFooter />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 items-center m-6">
          <div className="flex flex-col p-4 gap-4">
            <AddressComponent title="EUROPE" addressLines={europeAddress} />
            <AddressComponent title="USA" addressLines={usaAddress} />
          </div>
          <div className="m-2">
            <LinkListComponent links={neoPromptsLinks} />
          </div>
          <div className="gap-4 m-2">
            <LinkListComponent links={policyLinks} />
            <div className="flex gap-4 items-center mt-5">
              <LinkedinIcon />
              <IgIcon />
              <TwitterIcon />
            </div>
          </div>
          <SubscriptionForm />
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
};

export default Footer;
