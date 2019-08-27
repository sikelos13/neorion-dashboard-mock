import React, {Component} from 'react';
import '../styles/App.scss';
import '../styles/Gentelella.scss';
import { fetchProjects } from "../actionCreators/projects";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={projects: []};
    }

    componentDidMount() {
        this.props.actions.fetchProjects();
    }

    render() {
        return(
            <div className="container custom-margin">
                <h1>Projects</h1>
                <div>
                    <ReactTable data={this.props.projectsArray}
                                columns={[
                                    {
                                        Header: "Project Name",
                                        columns: [
                                            {
                                                Header: "Name",
                                                id: "prjectName",
                                                accessor: d => d.name
                                            }
                                        ]
                                    },
                                    {
                                        Header: "Info",
                                        columns: [
                                            {
                                                Header: "Project Type",
                                                id: "projectType",
                                                accessor: d => d.project_type
                                            },
                                            {
                                                Header: "Project Phase",
                                                id: "projectPhase",
                                                accessor: d => d.project_phase
                                            }
                                        ]
                                    }
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projectsArray: state.projects.projects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({fetchProjects}, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Projects);
