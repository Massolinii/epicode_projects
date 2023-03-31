import React from 'react';
import './Footer.css';

function Footer() {
      return (
        // Renderizza un footer con allineamento centrale
        <footer className="text-center bgFooter text-secondary">
          {/*Links  */}
          <section className="text-start">
            <div className="container mt-2">
              {/*ROW PER COLONNE CON LINK*/}
              <div className="row mt-1 justify-content-center">
                {/*PRIMA COL*/}
                <div className="col-5 col-md-2 mx-1 bRight">
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
                {/*SECONDA COL*/}
                <div className="col-5 col-md-2 mx-1 bRight">
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
                {/*TERZA COL*/}
                <div className="col-5 col-md-2 mx-1 bRight">
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
                {/*QUARTA COL*/}
                <div className="col-5 col-md-2 mx-1 bRightToRemove">
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
              {/*ROW PER SERVICE CODE*/}
              <div className="row mt-1 justify-content-center">
                <div className='mb-2 serv'>
                    Service code
                </div>
              </div>
              {/*ROW PER COPYRIGHT*/}
              <div className="row mt-1 justify-content-center">
                <div className="background-blackp-4 serv">
                  © 1997-2023 Netflix Inc. Copyright:
                  <a className="text-reset fw-bold ps-2" href="https://github.com/Massolinii">Massolini Inc.</a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      );
    }

export default Footer;