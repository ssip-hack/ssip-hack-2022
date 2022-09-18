import { Component } from "react";

export default class StudentDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 bg-light">
          <h1 id="student_details">Student Details</h1>
          <hr />
          <form>
            <div class="row">
              {/* name input */}
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            {/* gender input */}
            <label>
              <b>Gender:&nbsp;&nbsp;</b>
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            {/* date of birth */}
            <div class="form-check form-check-inline">
              <label class="form-check-label" for="inlineRadio1">
                <b>Date Of Birth: &nbsp;</b>
              </label>
              <input type="date" />
            </div>
            <br />

            {/* orphan */}
            <label>
              <b>orphan:&nbsp;&nbsp;</b>
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                no
              </label>
            </div>
            <br />
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Aadhar No.
              </label>
              <div class="col-sm-6">
                <input type="number" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Contact No.
              </label>
              <div class="col-sm-6">
                <input type="number" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Contact Mail Id.
              </label>
              <div class="col-sm-6">
                <input type="email" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Mother Tongue
              </label>
              <div class="col-sm-6">
                <input type="number" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Contact No.
              </label>
              <div class="col-sm-6">
                <input type="number" class="form-control" />
              </div>
            </div>

            {/* CWSN */}
            <label>
              <b>CWSN:&nbsp;&nbsp;</b>
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                no
              </label>
            </div>

            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Nationality
              </label>
              <div class="col-sm-6">
                <input type="number" class="form-control" />
              </div>
            </div>

            <label>
              <b>No. Of Siblings:&nbsp;&nbsp;</b>
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                2
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                3
              </label>
            </div>

            <br />

            <label>
              <b>drug addiction:&nbsp;&nbsp;</b>
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                no
              </label>
            </div>

            <hr />
          </form>
        </div>

        <div className="col-3"></div>
      </div>
    );
  }
}