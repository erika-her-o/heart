import React from "react";
import corazonFull from "./images/corazon-full.svg";
import corazonRoto from "./images/corazon-roto.svg";

export default function Corazon({ roto, click }) {
  return (
    <div className="corazon-container">
      {roto === false ? (
        <img
          height="40px"
          onClick={click}
          src={corazonRoto}
          alt="Imagen corazón roto"
        />
      ) : (
        <img
          height="40px"
          onClick={click}
          src={corazonFull}
          alt="Imagen corazón lleno"
        />
      )}
    </div>
  );
}
