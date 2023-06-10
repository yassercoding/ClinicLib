import React from "react";
import L from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
function Contact() {
  const position = [52.45795447690074, 13.539913779520898];
  const markerIcon = new L.Icon({
    iconUrl:
      "https://www.ockert-cnc.de/wp-content/uploads/2016/12/map-marker-icon.png",
    iconSize: [45, 45],
  });

  return (
    <>
      <section id="contact" className="contact">
        <div className="container mt-4">
          <div className="section-title">
            <h2>
              <em>Contact</em>
            </h2>
          </div>

          <div className="row mt-5" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4><strong>Location:</strong></h4>
                  <p><strong>Weiskopffstraße 16, 12459 Berlin</strong></p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4><strong>Email:</strong></h4>
                  <p><strong>Clinclib@drugs.com</strong></p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p><strong>+49 177 don't call me 000</strong></p>
                </div>
                <MapContainer
                  center={position}
                  zoom={16}
                  scrollWheelZoom={true}
                >
                  <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=LjeASTEOm5W62yk97NZq" />
                  <Marker position={position} icon={markerIcon}>
                    <Popup>
                    Weiskopffstraße 16, 12459 Berlin
                    <br /> <strong>WBS Coding School.</strong>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    <strong>Your message has been sent. Thank you!</strong>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
