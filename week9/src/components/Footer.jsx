import React from 'react';
import './Footer.css';

function Footer() {
      return (
  
        <footer className="text-center bgFooter text-secondary">
          <div className="container">
            <div className="row">
              {/*Social media*/}
              <div className="col">
                <section className="d-flex pt-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="#" className="me-4 link-secondary fs-2">
                      <ion-icon name="logo-facebook" />
                    </a>
                    <a href="#" className="me-4 link-secondary fs-2">
                      <ion-icon name="logo-instagram" />
                    </a>
                    <a href="#" className="me-4 link-secondary fs-2">
                      <ion-icon name="logo-twitter" />
                    </a>
                    <a href="#" className="me-4 link-secondary fs-2">
                      <ion-icon name="logo-youtube" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
          {/*Links  */}
          <section className="text-start">
            <div className="container mt-2">
              <div className="row mt-1 justify-content-center">
                <div className="col-2 mx-1 mb-4">
                  <p>
                    <a href="#!" className="text-reset">Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Media Center</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Privacy</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Contact us</a>
                  </p>
                </div>
                <div className="col-2 mx-1 mb-4">
                  <p>
                    <a href="#!" className="text-reset">Audio Description</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Investor Relations</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Legal Notices</a>
                  </p>
                </div>
                <div className="col-2 mx-1 mb-4">
                  <p>
                    <a href="#!" className="text-reset">Help Center</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Jobs</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Cookie Preferences</a>
                  </p>
                </div>
                <div className="col-2 mx-1 mb-4">
                  <p>
                    <a href="#!" className="text-reset">Gift Cards</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Terms of Use</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Corporate Informations</a>
                  </p>
                </div>
              </div>
              <div className="row mt-1 justify-content-center">
                <div className="border-secondary rounded-0 mb-4">Service code</div>
              </div>
              <div className="row mt-1 justify-content-center">
                <div className="background-blackp-4">
                  © 1997-2019 Netflix Inc. Copyright:
                  <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Massolini Inc.</a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      );
    }

export default Footer;