import React from "react";
import Banner from "../../../components/Banner";
import CardJuara from "../../../components/com/CardJuara1";
import Deslomba1 from "../../../components/com/Deslomba1";
import Reg1 from "../../../components/com/Reg1";
import Footer from "../../../components/Footer";
import Navbars from "../../../components/Navbars";

export default function Lomba1() {
  return (
    <div>
      <Navbars />
      <Banner />
      <Deslomba1 />
      <CardJuara />
      <Reg1/>
      <Footer/>
    </div>
  );
}
