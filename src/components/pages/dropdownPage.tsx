import { Component } from "react";
import { Helmet } from "react-helmet";
import Dropdown from "../dropdown/dropdown";

class DropdownsPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta name="description" content="Page dropdowns" />
          <title>Dropdowns</title>
        </Helmet>
        <Dropdown />
      </>
    );
  }
}

export default DropdownsPage;
