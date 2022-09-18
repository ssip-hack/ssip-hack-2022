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
            <div class="form-group">
              <label for="exampleFormControlSelect1">Father's Occupation</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1 - working</option>
                <option>0 - non-working</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Mother's Occupation</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1 - working</option>
                <option>0 - non-working</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Father's Qualification
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>0 - primary</option>
                <option>1 - secondary</option>
                <option>2 - higher secondary</option>
                <option>3 - bachelor's degree</option>
                <option>4 - master's degree</option>
                <option>5 - Doctorate degree</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Mother's Qualification
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
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
