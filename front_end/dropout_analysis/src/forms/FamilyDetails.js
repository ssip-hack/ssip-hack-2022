import { Component } from "react";

export default class FamilyDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 id="family_details">Parent Details</h1>
          <hr />
          <form>
            <div class="row">
              {/* name input */}
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Father's name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Mother's name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Guardian's name"
                />
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
                Aadhar No.
              </label>
              <div class="col-sm-6">
                <input type="number" class="form-control" />
              </div>
            </div>


            <label>
              Father's Occupation:&nbsp;&nbsp;
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="a1"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                1 - working
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="a1"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                0 - non-working
              </label>
            </div>
            <br />

            <label>
              Mother's Occupation:&nbsp;&nbsp;
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="b1"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                1 - working
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="b1"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                0 - non-working
              </label>
            </div>

            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Father's Qualification: &nbsp;&nbsp;&nbsp;</label>
              <select class="custom-select mr-sm-2 col-5" id="inlineFormCustomSelect">
                <option>0 - primary</option>
                <option>1 - secondary</option>
                <option>2 - higher secondary</option>
                <option>3 - bachelor's degree</option>
                <option>4 - master's degree</option>
                <option>5 - Doctorate degree</option>
              </select>
            </div>

            
            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Mother's Qualification: &nbsp;</label>
              <select class="custom-select mr-sm-2 col-5" id="inlineFormCustomSelect">
                <option>0 - primary</option>
                <option>1 - secondary</option>
                <option>2 - higher secondary</option>
                <option>3 - bachelor's degree</option>
                <option>4 - master's degree</option>
                <option>5 - Doctorate degree</option>
              </select>
            </div>

          </form>

          <hr />
        </div>
      </div>
    );
  }
}
