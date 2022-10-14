import { Component } from "react";

export default class SchoolRegister extends Component {
  render() {
    return (
      <div className="school-register  text-dark">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 bg-light container">
            <h1>Register the school</h1>
            <hr />
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name_of_the_school">Name of the school</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name_of_the_school"
                    placeholder="Name of the school"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Address of the school"
                />
              </div>
              <div class="form-row row">
                <div class="form-group col-md-5">
                  <label for="inputCity">Disctrict</label>
                  {/* <input type="text" class="form-control" id="inputCity" /> */}
                  <select id="inputCity" class="form-control">
                     <option value="Ahmedabad">Ahmedabad</option>
                      <option value="amreli">amreli</option>
                      <option value="Anand">Anand</option>
                      <option value="Aravalli">Aravalli</option>
                      <option value="Banaskantha (Palanpur)">Banaskantha (Palanpur)</option>
                      <option value="Bharuch">Bharuch</option>
                      <option value="Bhavnagar">Bhavnagar</option>
                      <option value="Cured">Cured</option>
                      <option value="Chhota Udepur">Chhota Udepur</option>
                      <option value="Dahod">Dahod</option>
                      <option value="Dangs (Ahwa)">Dangs (Ahwa)</option>
                      <option value="Devbhoomi Dwarka">Devbhoomi Dwarka</option>
                      <option value="Gandhinagar">Gandhinagar</option>
                      <option value="Gir Somnath">Gir Somnath</option>
                      <option value="Jamnagar">Jamnagar</option>
                      <option value="Junagadh">Junagadh</option>
                      <option value="Kachchh">Kachchh</option>
                      <option value="Kheda (Nadiad)">Kheda (Nadiad)</option>
                      <option value="Mahisagar">Mahisagar</option>
                      <option value="Mehsana">Mehsana</option>
                      <option value="Diseases">Diseases</option>
                      <option value="Narmada (Rajpipla)">Narmada (Rajpipla)</option>
                      <option value="Navsari">Navsari</option>
                      <option value="Panchmahal (Godhra)">Panchmahal (Godhra)</option>
                      <option value="Patan">Patan</option>
                      <option value="Porbandar">Porbandar</option>
                      <option value="Rajkot">Rajkot</option>
                      <option value="Sabarkantha (Himmatnagar)">Sabarkantha (Himmatnagar)</option>
                      <option value="Surat">Surat</option>
                      <option value="Surendranagar">Surendranagar</option>
                      <option value="Tapi (Vyara)">Tapi (Vyara)</option>
                      <option value="Valsad">Valsad</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="inputZip">Pincode</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>

              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Contact No.
                </label>
                <div class="col-sm-4">
                  <input type="mobile" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Contact Email.
                </label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" />
                </div>
              </div>

              <div className="row">
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="col-6">
                  <label for="inputPassword4">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <br />
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
