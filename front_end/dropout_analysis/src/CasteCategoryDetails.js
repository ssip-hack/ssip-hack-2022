import { Component } from "react";

export default class CasteCategoryDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 id="caste_details">Caste & Category Details</h1>
          <hr />
          <div class="form-group">
            <label for="exampleFormControlSelect1">Social Category</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>0 - SC</option>
              <option>1 - ST</option>
              <option>2 - OBC</option>
              <option>3 - General</option>
              <option>4 - EWS</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Minority Group</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1 - yes</option>
              <option>0 - no</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
