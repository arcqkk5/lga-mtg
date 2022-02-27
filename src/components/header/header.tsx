import { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions";
import { StoreState } from "../../redux/reducers/redusers";

interface HeaderProps {
  fetchUser(): any;
}

class _Header extends Component<HeaderProps> {
  onDropdownClick = (): void => {
    this.props.fetchUser();
  };

  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header__inner">
            <NavLink
              className="btn"
              end
              style={({ isActive }) => ({
                color: isActive ? "rgba(69, 53, 255, 1)" : "inherit",
              })}
              to="/"
            >
              Modal window
            </NavLink>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "rgba(69, 53, 255, 1)" : "inherit",
              })}
              to="/dropdown"
              onClick={this.onDropdownClick}
              className="btn"
            >
              Dropdowns
            </NavLink>
          </div>
        </header>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: StoreState): {} => {
  return {};
};

const Header = connect(mapStateToProps, { fetchUser })(_Header);

export default Header;
