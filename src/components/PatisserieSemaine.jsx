import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function PatisserieSemaine() {
  return (
    <div className="patSemaine">
      <div className="imagePatSemaineDiv"></div>

      <div className="PatSemaineDiv">
        <div className="cadrePat">
          <h2 className="titrePatSemaine"></h2>
          <p className="titrePatSemaine"></p>
        </div>
        <p className="titreFilm"></p>
        <p className="realFilm"></p>
        <p className="dateFilm"></p>
      </div>

      <div className="videoExtrait"></div>
    </div>
  );
}

export default PatisserieSemaine;
