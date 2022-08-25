import React from 'react'
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Desseminar() {
  return (
      <div>
          <h1 className="text-center font-weight-bold mt-5">Deskripsi Seminar</h1>

<div className=" container mt-5 ">
  <Row xs="auto text-center">
    <Col className="">
      <Image src="Assets/1.jpg" roundedCircle />
      <h5>hendrawan supcipto</h5>
      <p>Narasumber</p>
      <p>Lorem ipsum dolor sit.</p>
    </Col>
    <Col className="">
      <Image src="Assets/1.jpg" roundedCircle />
      <h5>hendrawan supcipto</h5>
      <p>Narasumber</p>
      <p>Lorem ipsum dolor sit.</p>
    </Col>
  </Row>
</div>
<div className="container">
  <h3 className="mt-5">HTM & FASILITAS</h3>
  <div className="m-sm-4">
    <p>Umum : Rp 50.000,-</p>
    <p>Mahasiswa : Rp 30.000,-</p>
    <p>Pembayaran Via Transfer :</p>
    <p>No Rekening 6072-01-015533-53-2</p>
    <p>sumarti harjo (BRI)</p>
    <p>Konfirmasi Pembayaran :</p>
    <p>Wa : 0857-3743-932</p>
    <p>Email : inov@gmail.com</p>
    <p>Fasilitas : Ilmu & Snack </p>
  </div>
  <h3 className='mt-5'>Contact Person </h3>
  <div className="m-sm-4">
    <p>Putri Alvina: 0898 6300 090</p>
    <p>Putri Alvina: 0898 6300 090</p>
  </div>
</div>
    </div>
  )
}
