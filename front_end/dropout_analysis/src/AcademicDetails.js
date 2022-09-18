import { Component } from "react";

export default class AcademicDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 id="academic_details">Academic Details</h1>
          <hr />
          <form>
            <div className="row">
              {/* name input */}
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Admission Number"
                />
              </div>
            </div>
            <div className="col-6">
              <label>Admission Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Admission Number"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Academic Stream</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>0 - Art</option>
                <option>1 - Science</option>
                <option>2 - Commerce</option>
                <option>3 - Vocational</option>
                <option>4 - Other streams</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Status in previous year
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>0 - Studied at Current/Same School</option>
                <option>1 - Studied at Other School</option>
                <option>3 - Anganwadi/ ECCE Centre</option>
                <option>4 - Not studied</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Grade in previous year
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Previous year Grades"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Out of the school child
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>0 - no</option>
                <option>1 - yes</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Appeared in previous eyar examination
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>0 - no</option>
                <option>1 - yes</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Result in previous year type
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1-Promoted/Passed</option>
                <option>2-Promoted/Passed with grace</option>
                <option>3-Detained/Repeater/Not Passed</option>
                <option>4-Promoted/Passed without Examination</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Scholarship Holder</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>0 - no</option>
                <option>1 - yes</option>
              </select>
            </div>

            <div className="col-6">
              <label>Suspension Days</label>
              <input
                type="text"
                class="form-control"
                placeholder="Suspension Days"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
