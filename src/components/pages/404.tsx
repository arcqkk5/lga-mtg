import { Component } from "react";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div>
        <p
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}
        >
          Not found (404)
        </p>
        <Link
          style={{
            display: "block",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "34px",
          }}
          to="/"
        >
          Back to modal page
        </Link>
      </div>
    );
  }
}

export default Page404;
