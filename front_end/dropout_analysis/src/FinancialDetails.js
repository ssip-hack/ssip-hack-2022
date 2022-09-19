import { Component } from "react";

export default class FinancialDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 id="financial_details">Financial Details</h1>
          <hr />
          <form>
            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                Family Annual Income: &nbsp;
              </label>
              <select
                class="custom-select mr-sm-2 col-5"
                id="inlineFormCustomSelect"
              >
                <option>0 - (0 to 2,50,000)</option>
                <option>1 - (2,50,000 to 6,00,000)</option>
                <option>2 - (greater than 6,00,000)</option>
              </select>
            </div>

            <label>Debt:&nbsp;&nbsp;</label>
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
            <br />

            <label>BPL beneficiary:&nbsp;&nbsp;</label>
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
          </form>
        </div>
      </div>
    );
  }
}
