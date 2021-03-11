import React from "react";
import logoUrl from "../images/logo.png";

const Logo: React.FunctionComponent = () => {

  return (
    <img src={logoUrl} alt={"logo"} width={300}/>
  );

};

export { Logo };