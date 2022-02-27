import { Component, Fragment } from "react";

interface BoundaryState {
  catch: boolean;
}

class ErrorBoundary extends Component<{}, BoundaryState> {
  state = {
    catch: false,
  };

  componentDidCatch() {
    this.setState({
      catch: true,
    });
  }

  render() {
    const error = this.state.catch;
    if (error) {
      return (
        <Fragment>
          <h2>Oops, something went wrong..</h2>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
