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
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Family Annual Income
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                {/* 0-(10000,250000), 1-(250000, 600000), 2-(>600000) */}
                <option>0 - (0 to 2,50,000)</option>
                <option>1 - (2,50,000 to 6,00,000)</option>
                <option>2 - (greater than 6,00,000)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Debt</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1 - yes</option>
                <option>0 - no</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">BPL benefitiary</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1 - yes</option>
                <option>0 - no</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
