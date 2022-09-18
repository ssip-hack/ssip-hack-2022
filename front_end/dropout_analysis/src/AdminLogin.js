import { Component } from "react";

export default class AdminLogin extends Component {
  render() {
    return (
      <div
        class="text-center admin-login-body row"
        data-new-gr-c-s-check-loaded="14.1080.0"
        data-gr-ext-installed=""
      >
        <div className="col-3"></div>
        <div className="col-6 bg-light">
          <main class="form-signin w-100 m-auto">
            <form>
              <h1 class="h3 mb-3 fw-normal" id="admin_login">
                Sign in as an Admin
              </h1>

              <div class="form-floating">
                <input
                  type=""
                  class="form-control"
                  id="floatingInput"
                  placeholder="school code"
                />
                <br />
                <label for="floatingInput">User Code</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <br />
                <label for="floatingPassword">Password</label>
              </div>

              <button
                class="w-100 btn btn-lg btn-primary submit-button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </main>
        </div>
      </div>
    );
  }
}
