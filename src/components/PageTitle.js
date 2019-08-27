import React, {Component} from 'react';
// import './styles/App.scss';
// import './styles/Gentelella.scss';
import {connect} from "react-redux";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import {projectsArray} from "../reducers/projects";
import {bindActionCreators} from 'redux'



class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state={tickets: [], projects: []};
    }

    render() {
        return (
            <div className="container custom-margin">
                <div>
                    {/*<Breadcrumb>*/}
                    {/*<BreadcrumbItem active>Home</BreadcrumbItem>*/}
                    {/*</Breadcrumb>*/}
                    {/*<Breadcrumb>*/}
                    {/*<BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>*/}
                    {/*<BreadcrumbItem active>Library</BreadcrumbItem>*/}
                    {/*</Breadcrumb>*/}
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/dashboard">Dashboard</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="/tickets">Tickets View</a></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.title}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        // ticketsArray: state.tickets.tickets,
        // projectsArray: state.projects.projects
        // projectsArray: _.find(state, 'id', ownProps.params.id)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({}, dispatch),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Tickets);
