import React, {Fragment} from "react";

export default function Pruebaboos() {
    return (

        <Fragment>

<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01"  required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
  
</form>
            
        </Fragment>

    )
}