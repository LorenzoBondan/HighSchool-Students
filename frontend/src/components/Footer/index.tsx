import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./styles.css";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-container">
        <MDBContainer className="text-center text-md-start mt-2">
          <MDBRow className="mt-2">

            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-1">
              <h6 className="text-uppercase fw-bold mb-4 mt-1">
                Developed By
              </h6>
              <h5>Lorenzo Bondan</h5>
              <p>Software Engineer</p>
              

            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-1">
              <h6 className="text-uppercase fw-bold mb-4 mt-1">
                Backend used Languages
              </h6>
              <p>Java</p>
              <p>Spring</p>
              <p>SQL</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-1">
              <h6 className="text-uppercase fw-bold mb-4 mt-1">
                Frontend used Languages
              </h6>
              <p>React</p>
              <p>CSS</p>
              <p>Typescript</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-md-0 mb-1">
              <h6 className="text-uppercase fw-bold mb-4 mt-1">Contact</h6>
              <p>
                <MDBIcon icon="home" className="" />
                Bento Gonçalves, BR
              </p>
              <p>
                <MDBIcon icon="envelope" className="" />
                Lbbondan@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="" /> +55 54 99657-0555
              </p>
              <p className="github-logo">
                Github
                <a href="https://github.com/LorenzoBondan"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright: All rigths reserved
      </div>
    </MDBFooter>
  );
}

export default Footer;
