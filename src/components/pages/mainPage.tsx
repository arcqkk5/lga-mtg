import { Component } from "react";
import { Helmet } from "react-helmet";
import Modal from "../modal/modal";

class MainPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta name="description" content="Page modals" />
          <title>Modals</title>
        </Helmet>
        <Modal />
      </>
    );
  }
}

export default MainPage;
