import { Component } from "react";

export default class GeographicDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1>Geographic Details</h1>
          <hr />
          <form>
            <div class="form-group">
              <label for="inputAddress">Current Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Address of the school"
              />
            </div>

            <div class="form-group">
              <label for="inputAddress">Permanent Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Address of the school"
              />
            </div>
            <div className="row">
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              <div class="form-group col-md-6">
                <label for="inputCity">Disctrict</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>

              <div class="form-group col-md-2">
                <label for="inputZip">PinCode</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>

            <div class="form-group col-md-2">
              <label for="inputZip">Country</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
