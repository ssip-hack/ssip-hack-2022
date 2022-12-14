import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header class="p-3 text-bg-light">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            ></a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 text-secondary">
                  Dropout Analysis
                </a>
              </li>
            </ul>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                <a href="#student_login">Student Login</a>
              </button>
              <button type="button" class="btn btn-outline-light me-2">
                <a href="#admin_login">Admin Login</a>
              </button>
              <button type="button" class="btn btn-outline-light me-2">
                <a href="#school_login">School Login</a>
              </button>
              <button type="button" class="btn btn-warning">
                Register School
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
