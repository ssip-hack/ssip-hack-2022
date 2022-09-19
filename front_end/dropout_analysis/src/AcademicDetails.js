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

              <label for="exampleFormControlSelect1">
                Admission Number
              </label>
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


            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Academic Stream: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <select class="custom-select mr-sm-2 col-5" id="inlineFormCustomSelect">
                <option>0 - Art</option>
                <option>1 - Science</option>
                <option>2 - Commerce</option>
                <option>3 - Vocational</option>
                <option>4 - Other streams</option>
              </select>
            </div>

            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Status in previous year: &nbsp;</label>
              <select class="custom-select mr-sm-2 col-5" id="inlineFormCustomSelect">
                <option>0 - Studied at Current/Same School</option>
                <option>1 - Studied at Other School</option>
                <option>3 - Anganwadi/ ECCE Centre</option>
                <option>4 - Not studied</option>
              </select>
            </div>

            <div class="row my-1">
              <label class="mr-sm-2 col-auto sr-only" for="inlineFormCustomSelect">Grade in previous year: &nbsp;</label>
              <input
                type="text"
                class="form-control col-auto"
                placeholder="Previous year Grades"
              />
            </div>

            <label>
              Out of the school child:&nbsp;&nbsp;
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
            <br />
            <label>
              Appeared in previous year examination:&nbsp;&nbsp;
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


            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Result in previous year type: &nbsp;</label>
              <select class="custom-select mr-sm-2 col-5" id="inlineFormCustomSelect">

                <option>1-Promoted/Passed</option>
                <option>2-Promoted/Passed with grace</option>
                <option>3-Detained/Repeater/Not Passed</option>
                <option>4-Promoted/Passed without Examination</option>
              </select>
            </div>

            <label>
              Scholarship Holder:&nbsp;&nbsp;
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

            <div className="col-auto">
              <label>Suspension Days</label>
              <input
                type="text"
                class="form-control"
                placeholder="Suspension Days"
              />
            </div>

            <label>
              Student is dropped or continued?:&nbsp;&nbsp;
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
          </form>
        </div >
      </div >
    );
  }
}
