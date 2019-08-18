import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faIgloo,
  faHome,
  faTicketAlt,
  faUser,
  faProjectDiagram,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import './styles/App.scss';
import { bindActionCreators } from 'redux';
// import './styles/Gentelella.scss';
import SideBar from './components/SideBar';
import { Router } from '@reach/router'
import Dashboard from './components/Dashboard';
import Tickets from './components/Tickets';
import Users from './components/Users';
import Projects from './components/Projects';
import { connect } from 'react-redux';
import PrivateRoute from './containers/PrivateRoute';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { usersReducer } from "./reducers/user";
import { fetchUsers } from './actionCreators/user';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import TicketDetail from "./components/detail-components/TicketDetail";

library.add(faIgloo, faHome, faTicketAlt, faUser, faProjectDiagram,faBars);

class App extends Component {
    constructor(props) {
        super(props);
        this.state={isActive: false, username: "nonUser", dropdownOpen: false};
        this.handleSideBarToggle = this.handleSideBarToggle.bind(this);
        this.toggle = this.toggle.bind(this);
        // this.handlesLogOut = this.handlesLogOut.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentDidMount() {
        this.props.actions.fetchUsers();
    }
    // this.props.store.dispatch(fetchUsers(message))

    handleSideBarToggle(){
      this.setState(state => ({
        isActive: !state.isActive,
      }));
    }

    render() {
      // const { username } = this.props;
    return (
      <div className="wrapper">
        <div id="sidebar" className={(this.state.isActive) ? "active" : ""}>
          <SideBar />
        </div>
        <div className="content">
          <nav className="navbar navbar-fixed-top bg-custom bg-faded">
            <div className="toggle-col d-flex align-items-center col-lg-2">
              <FontAwesomeIcon
                className="toggleButton"
                icon="bars"
                size="2x"
                onClick={this.handleSideBarToggle}/>
            </div>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="m" className="logout-button">

              <DropdownToggle caret tag="a" className="nav-link">
                {this.props.usernameAsProps}
            </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem >Log Out</DropdownItem>
              </DropdownMenu>
              </Dropdown>
          </nav>
          <Router>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/projects" component={Projects} />
            <PrivateRoute path="/tickets" component={Tickets} />
            <PrivateRoute path="/users" component={Users} />
              <PrivateRoute exact path="/new-ticket" component={TicketDetail} />
              <PrivateRoute exact path="/tickets/:id/edit" component={TicketDetail} />

          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        usernameAsProps: state.user.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({fetchUsers}, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
