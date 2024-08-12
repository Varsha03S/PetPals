import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const services = [
  { title: "Vaccinations", text: "Our veterinarians provide core and non-core vaccinations to protect your pet from diseases.", img: "/petVaccination.png", link: "vaccinations" },
  { title: "Surgery", text: "Our state-of-the-art surgical suite is equipped to perform a range of procedures, from spay/neuter to orthopedic surgery.", img: "/surgery.png", link: "surgery" },
  { title: "Dental Care", text: "Our dental team provides routine cleanings, extractions, and other dental services to keep your pet's teeth healthy.", img: "/dentalcare.png", link: "dental-care" },
  { title: "Diagnostic Testing", text: "Our in-house laboratory and diagnostic equipment allow us to quickly and accurately diagnose a range of health issues.", img: "/diagnosis.png", link: "diagnostic-testing" },
  { title: "Microchip Identification", text: "We offer microchip identification to help ensure your pet's safe return if they ever become lost.", img: "/microchip.png", link: "microchip-identification" },
  { title: "Wellness Exams", text: "Regular wellness exams help us detect health issues early, and provide an opportunity for you to ask questions and receive advice on caring for your pet.", img: "/wellness.png", link: "wellness-exams" }
];

const ClinicalServices = () => {
  return (
    <div className="clinical-services-page" style={{ padding: '20px', backgroundColor: '#e6f7ff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Row>
        <Col md={12}>
          <h1 className="page-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginTop: '100px', color: '#333' }}>Clinical Services</h1>
          <p className="page-subtitle" style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '30px', color: '#666' }}>
            Our team of experienced veterinarians and technicians provide a range of clinical services to ensure the health and well-being of our furry friends.
          </p>
        </Col>
      </Row>

      <Row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        {services.map((serviceItem, index) => (
          <Col md={4} key={index} className="d-flex align-items-stretch">
            <Link
              to={`/DoctorSelection/${serviceItem.link}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card
                style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', width: '300px', height: '400px', display: 'flex', flexDirection: 'column' }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {serviceItem.img && <img src={serviceItem.img} alt={serviceItem.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                <CardBody style={{ padding: '20px', flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CardTitle tag="h5" style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>{serviceItem.title}</CardTitle>
                  <CardText style={{ fontSize: '1rem', color: '#666', margin: '0' }}>{serviceItem.text}</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClinicalServices;
