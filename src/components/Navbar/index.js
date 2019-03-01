import React from "react";

function Navbar() {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="http://lrizal.com">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="http://lrizal.com">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://lrizal.com">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="http://lrizal.com" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
        </div>
        </nav>
 </div>
    );
  }
  
  export default Navbar;
  