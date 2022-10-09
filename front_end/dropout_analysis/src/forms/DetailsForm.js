import { Component } from "react";
import AcademicDetails from "./AcademicDetails";
import CasteCategoryDetails from "./CasteCategoryDetails";
import FamilyDetails from "./FamilyDetails";
import FinancialDetails from "./FinancialDetails";
import StudentDetails from "./StudentDetails";

export default class DetailsForm extends Component {
  render() {
    return (
      <div className="bg-light">
        <div>
          <div className="row">
            <br />
            <hr />
            <div className="col-3"></div>
            <div className="col">
              &nbsp;&nbsp;
              <a href="#student_details">Student Details</a>&nbsp;&nbsp;
              |&nbsp;&nbsp;
              <a href="#family_details">Family Details</a>&nbsp;&nbsp;
              |&nbsp;&nbsp;
              <a href="#financial_details">Financial Details</a>&nbsp;&nbsp;
              |&nbsp;&nbsp;
              <a href="#caste_details">Caste Details</a>&nbsp;&nbsp;
              |&nbsp;&nbsp;
              <a href="#academic_details">Academic Details</a>&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <hr />
        <StudentDetails />
        <FamilyDetails />
        <FinancialDetails />
        <CasteCategoryDetails />
        <AcademicDetails />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <br />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
