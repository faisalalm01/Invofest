import React from "react";
import "../LandingPage/index.css";
import Animate from "react-smooth/lib/Animate";
// import Banner from '../../components/Banner'
import Navbars from "../../components/Navbars";
import { Row, Container, Col } from "react-bootstrap";
import Particle from "../../components/LandingComponents/Particle";
import CardBaner from "../../components/LandingComponents/CardsBanner";
import SocialIconst from "../../components/LandingComponents/SocialIconst";
import Peta from "../../components/LandingComponents/Peta";
import CardAcara from "../../components/LandingComponents/CardAcara";
import JadwalAcara from "../../components/Timeline/JadwalAcara";

export default function LandingPage() {
  return (
    <div>
      {/* header */}
      <Animate to="1" from="0" attributeName="opacity">
        <Particle />
        <Navbars />
        <Container className="App-header" fluid={true}>
          <Row className="App-main">
            <Col xl={12} className="App-center mt-5">
              <CardBaner />
            </Col>
            <SocialIconst />
          </Row>
        </Container>
        <div className="bg-dark p-5 shadow-lg">
          <CardAcara/>
        </div>
      {/* end header */}

      <main className="pt-5 bg-gold">
        <CardAcara />
      </main>
        <JadwalAcara />
        <Container className="text-center mt-5">
          <h3>Lokasi</h3>
          <Row className="my-5">
            <Col xl={6} className="text mt-4">
              <h3>Politeknik Harapan Bersama</h3>
              Jl. Mataram No.9, Kel. pesurungan lor, Kel. Pesurungan Lor,
              Pesurungan Lor, Margadana, Kota Tegal, Jawa Tengah 52147
            </Col>
            <Col xl={6}>
              <Peta />
            </Col>
          </Row>
        </Container>
      </Animate>
    </div>
  );
}
