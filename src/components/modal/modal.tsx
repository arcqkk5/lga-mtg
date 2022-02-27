import { Component, Fragment } from "react";
import Dialog from "../dialog/dialog";
import { connect } from "react-redux";
import { showModalWindow, hideModalWindow } from "../../redux/actions";
import { StoreState } from "../../redux/reducers/redusers";

interface ModalProps {
  isShow: boolean;
  showModalWindow(): void;
  hideModalWindow(): void;
}

class _Modal extends Component<ModalProps> {
  onShowWindow = (): void => {
    this.props.showModalWindow();
  };

  onRender = (): void => {
    this.props.hideModalWindow();
    this.forceUpdate();
  };

  render() {
    console.log("render");
    const isDialog = this.props.isShow ? <Dialog /> : null;

    return (
      <Fragment>
        <div className="modal">
          <div className="modal__inner">
            <div className="modal-nav">
              <button onClick={this.onShowWindow} className="btn">
                Click Me
              </button>
              <button onClick={this.onShowWindow} className="btn">
                Click Me
              </button>
              <button onClick={this.onRender} className="btn">
                ReRender
              </button>
            </div>
            {isDialog}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: StoreState): { isShow: boolean } => {
  return {
    isShow: state.stateModal.isShow,
  };
};

const Modal = connect(mapStateToProps, { showModalWindow, hideModalWindow })(
  _Modal
);

export default Modal;
