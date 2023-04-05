import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin,faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import Logo from "../images/logo_1.png"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 align-items-center">
          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-footer" width="" height="" />
            </Link>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="GhostWhite"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </Button>
            </InputGroup>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">

            <h4>Stay Connected</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Join our newsletter and stay up-to-date with all the latest news and updates in the world of healthcare. 
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr /> */}

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div className="col-lg-4 col-md-6 col-xs-12 mb-3">
          <h4 className= "mb-4">QUICK NAVIGATION</h4>
            <ul className="nav flex-column">
            <Link className="nav-item mb-2" to="/">
                HOME
              </Link>
            
              <Link className="nav-item mb-2" to="/clinics">
                CLINICS
                </Link>
              <Link className="nav-item mb-2" to="/clinics/new">
                ADD CLINIC
                </Link>
              <li className="nav-item mb-2">
                DOCTORS
              </li>
              <li className="nav-item mb-2">
                ADD DOCTOR
              </li>

              <li className="nav-item mb-2">
               HEALTH NEWS
              </li>
              </ul>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3 ">

            <h4 className= "mb-4">ClinicLib</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">

              With Cliniclib, you can easily book appointments and live consultations with your preferred doctors and clinics. Whether you need a routine checkup, a specialist consultation, or urgent medical attention, Cliniclib's user-friendly interface makes it easy to find and book the care you need, when you need it.
              </li>
              <Link className="nav-item mb-2" to="/about">
                ABOUT US
              </Link>
              <Link className="nav-item mb-2" to="/contact">

                CONTACT US
              </Link>


            </ul>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">

            <h4 className= "mb-4">SOCIAL MEDIA</h4>


            <ul className="list-unstyled d-flex">

            
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>

              <li className="ms-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>

              <li className="ms-3">
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank">
                  <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
                </a>
              </li>

            </ul>

          </div>
        </div>
      </div>

      <div className="container-fluid gigi-footer2">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
            <div className="col-md-6 d-flex align-items-center">
              <span className="mb-3 mb-md-0">
                &copy; 2023 Yasser / Kevin / Zakaria / Cristian
              </span>
            </div>
            <p className="nav justify-content-end ">
            The Dream Team 
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer