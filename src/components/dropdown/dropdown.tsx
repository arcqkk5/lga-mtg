import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { User, UserData, fetchUser, fetchUserData } from "../../redux/actions";
import { StoreState } from "../../redux/reducers/redusers";
import { v4 as uuidv4 } from "uuid";

interface DropdownProps {
  users: User[];
  activeUser: UserData[];
  fetchUserData(id: number): any;
}

class _Dropdown extends Component<DropdownProps> {
  renderUsers = (): JSX.Element[] => {
    return this.props.users.map((user: User) => {
      return (
        <option key={user.id} className="option option-user" value={user.id}>
          {user.name}
        </option>
      );
    });
  };

  renderUserData = (): JSX.Element[] => {
    return this.props.activeUser.map((item) => {
      return (
        <option key={uuidv4()} className="option option-data-user">
          {item}
        </option>
      );
    });
  };

  onFetchUserData = (id: number): void => {
    this.props.fetchUserData(id);
  };

  render() {
    return (
      <Fragment>
        <div className="dropdown">
          <div className="dropdown__inner">
            <div className="dropdown-group">
              <div className="dropdown-item">
                <label className="dropdown-item-label" htmlFor="user">
                  Select a user:
                </label>
                <select
                  className="dropdown-item-select"
                  name="user"
                  id="user"
                  onChange={(e) => this.onFetchUserData(+e.target.value)}
                >
                  <option className="option option-user">-- Users --</option>
                  {this.renderUsers()}
                </select>
              </div>
              <div className="dropdown-item">
                <label className="dropdown-item-label" htmlFor="data">
                  User data:
                </label>
                <select className="dropdown-item-select" name="data" id="data">
                  <option className="option option-data-user" value="data-0">
                    --User info--
                  </option>
                  {this.renderUserData()}
                </select>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (
  state: StoreState
): { users: User[]; activeUser: UserData[] } => {
  return {
    users: state.stateUsers.users,
    activeUser: state.stateUsers.activeUser,
  };
};

const Dropdown = connect(mapStateToProps, { fetchUser, fetchUserData })(
  _Dropdown
);

export default Dropdown;
