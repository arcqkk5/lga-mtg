import { Component, Fragment } from "react";
import { hideModalWindow } from "../../redux/actions";
import { connect } from "react-redux";
import "./dialog.scss";

interface DialogProps {
  hideModalWindow(): any;
}

class _Dialog extends Component<DialogProps> {
  onHideWindow = (): void => {
    this.props.hideModalWindow();
  };

  onShowAlert = (): void => {
    alert("Alert is open!");
    this.props.hideModalWindow();
  };

  render() {
    return (
      <div className="dialog">
        <div className="dialog__inner">
          <h1 className="dialog-title">Сall an alert?</h1>
          <div className="dialog-btn-group">
            <button onClick={this.onShowAlert} className="btn">
              Ok
            </button>
            <button onClick={this.onHideWindow} className="btn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const Dialog = connect(mapStateToProps, { hideModalWindow })(_Dialog);

export default Dialog;
