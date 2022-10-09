import { Component } from "react";

export default class CasteCategoryDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 id="caste_details">Caste & Category Details</h1>
          <hr />

          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Social Category: &nbsp;</label>
            <select class="custom-select mr-sm-2 col-5" id="inlineFormCustomSelect">
              <option>0 - SC</option>
              <option>1 - ST</option>
              <option>2 - OBC</option>
              <option>3 - General</option>
              <option>4 - EWS</option>
            </select>
          </div>

          <label>
            Minority:&nbsp;&nbsp;
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
              1 - yes
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
              0 - no
            </label>
          </div>

          <hr />
        </div>
      </div>
    );
  }
}
