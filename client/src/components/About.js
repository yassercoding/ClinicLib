import React from "react";
import { Container } from "react-bootstrap";
function About() {
  return (
    <Container>

      <header class="masthead">
        <p class="masthead-intro"></p>
        <h1 class="masthead-heading">
          <em>Clinclib</em>
        </h1>
      </header>

      <section class="introduction-section">
        <h1>About us</h1>
        <p>
        At Clinclib, we  are passionate about  improving the health and well-being of people around us and around the world.
         As a leading medical company, we specialize in[medical devices/ pharmaceuticals/ healthcare IT/ healthcare services] and work tirelessly to develop innovative solutions that meet the needs of patients,
         healthcare providers, and payers.

        </p>
      </section>

      <section class="location-section">
        <h1><strong>Our Team</strong></h1>
        <p>
          Our team is made up of passionate people that are eager to change the world and give a hand to people in need
        </p>
        <p>
          we carefully get you in contact with your possible doctor and clinic of your dreams
        </p>
      </section>

      <section class="questions-section">
        <h1>
          <strong>Christian and Kevin</strong>
        </h1>

        <p>
          Dr . Christian and Dr. Kevin are highly skilled and experienced physicians who are dedicated to providing the highest quality of care to their patients.
          As physicians,<br/>Dr.Christian and Dr. Kevin are known  for their compassion, expertise, and commitment to improving the health and well-being of their patients.<br/>
          Dr. Christian and Dr. Kevin bring a wealth of knowledge and experience to their practice, and are respected members of the medical community.<br/>
        </p>

        <h1>
          <strong>Yasser and Zakaria</strong>
        </h1>
        <p>
          Our great <strong>head of medical Yasser</strong> is a very experienced doctor with over 20 years of experience under his belt,
          Him and  our <strong>board director</strong> and <strong>CEO Zakaria</strong>  founded this company from the ground up with with years of hard work and dedication to make this company the very best
        </p>
      </section>
    </Container>
  );
}

export default About;
