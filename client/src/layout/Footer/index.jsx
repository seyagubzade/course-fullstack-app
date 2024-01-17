import React from "react";
import LOGO from "../../assets/images/logo.png"
import "./styles.scss"
const Footer = () => {
  return (
    <div className="bg-dark">
      <div class="container ">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src={LOGO} alt="" /> {" "}<h2>Course</h2>
            </a>
            <p >© 2022</p>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iusto odio quo quaerat consectetur aut voluptatum molestias laudantium saepe sunt.</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>

          
        </footer>
      </div>
    </div>
  );
};

export default Footer;
