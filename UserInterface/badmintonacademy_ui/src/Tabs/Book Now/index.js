import React from "react";
import styles from "./index.css";
import booknowImage from "./images/book-now.gif";

class BookNow extends React.Component {
  render() {
    return (
      <section id="BOOKSECTION_1">
        <div id="BOOKDIV_2">
          <div id="BOOKDIV_3">
            <hr id="BOOKHR_4" />
            <h2 id="BOOKH2_5">Rules and regulations:</h2>
            <p id="BOOKP_6">
              1. Keep on time for the selected timing hours.
              <br id="BOOKBR_7" /> 2. Please take care of your belonging at your
              own risk as management is not responsible.
              <br id="BOOKBR_8" /> 3. No food / Beverages allowed in side court
              floor area.
              <br id="BOOKBR_9" /> 4. Only non marking shoes are allowed.
              <br id="BOOKBR_10" /> 5. Players cannot play barefoot.
              <br id="BOOKBR_11" />
            </p>
            <span id="BOOKSPAN_13">
              {" "}
              <a
                href="https://booknplay.in/venues/splendor-sports-academy"
                target="_blank"
                id="BOOKA_14"
              >
                <img src={booknowImage} id="BOOKIMG_15" alt="" />
              </a>
            </span>
            <br id="BOOKBR_16" />
          </div>
        </div>
      </section>
    );
  }
}

export default BookNow;
