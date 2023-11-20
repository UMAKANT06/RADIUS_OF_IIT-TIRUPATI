import React from "react";
import "./SearchScreen.css";
function Search() {
  return (
    <div className="mainscreen">
      <div className="mainblock">
        <form>
          <div>
            <div>
              <label> Student Name </label>
              <input type="text" id="name"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Search;
