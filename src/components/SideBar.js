import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/App.scss';
import '../styles/Sidebar.scss';
// import '../styles/Gentelella.scss';
import logoName from '../images/neorion-name.png';
import { Router, Link } from '@reach/router';
// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';



class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <nav>
          <div className="sidebar-brand container">
            <div className="row">
              <div className="img-col col-lg-10">
                  <img src={logoName} className="img-logo" alt="neorion-logo" />
              </div>
              {/*<div className="toggle-col d-flex align-items-center col-lg-2">*/}
                {/*<FontAwesomeIcon*/}
                    {/*className="toggleButton"*/}
                    {/*icon="bars"*/}
                    {/*size="2x"*/}
                    {/*onClick={() => (this.setState({isActive: !this.state.isActive }))}/>*/}
              {/*</div>*/}
            </div>



          </div>
          <ul className="list-unstyled components">

            <li>
              <Link to={'/dashboard'} className="custom-link">
                <FontAwesomeIcon icon="home" style={{ fontSize: '1.75em' }} />
                  <span className="menu-desc">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link className="custom-link" to={'/projects'}>
                <FontAwesomeIcon icon="project-diagram" style={{ fontSize: '1.75em' }} />
                  <span className="menu-desc">Projects</span>
              </Link>
            </li>

            <li>
              <Link className="custom-link" to={'/tickets'}>
                <FontAwesomeIcon icon="ticket-alt" style={{ fontSize: '1.75em' }} />
                <span className="menu-desc">Tickets</span>
              </Link>
            </li>

            <li>
              <Link to={'/users'} className="custom-link">
                <FontAwesomeIcon icon="user" style={{ fontSize: '1.75em' }} />
                <span className="menu-desc">Users</span>
              </Link>
            </li>
          </ul>
        </nav>

    );
  }
}


export default SideBar;
