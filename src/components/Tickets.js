import React, {Component} from 'react';
import '../styles/App.scss';
import '../styles/Gentelella.scss';
import { fetchTickets, onRowClick } from "../actionCreators/tickets";
import { fetchProjects } from "../actionCreators/projects";
import {connect} from "react-redux";
// import {projectsArray} from "../reducers/projects";
import {bindActionCreators} from 'redux'
// Import React Table
import TicketDetail from "./detail-components/TicketDetail"
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Link, Router} from "@reach/router";
import PrivateRoute from "../App";
import {history} from "../store";
import {Redirect} from "@reach/router";


class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state={tickets: [], projects: [], selected: ""};
    }

    componentDidMount() {
        this.props.actions.fetchTickets();
        this.props.actions.fetchProjects();
    }

    render() {
        return(
            <div className="container custom-margin">
                <h1>Tickets</h1>
                <Link to={'/new-ticket'} className="btn btn-secondary" color="secondary">Add New Ticket</Link>
                <div>
                    <ReactTable data={this.props.ticketsArray}
                                columns={[
                                    {
                                        Header: "Project Name",
                                        columns: [
                                            {
                                                Header: "Name",
                                                id: "prjectName",
                                                accessor: d => (<Link to={`/ticket/${d.id}/edit`} state={{ticket: d}}>{d.project}</Link>)
                                            }
                                        ]
                                    },
                                    {
                                        Header: "Author Name",
                                        columns: [
                                            {
                                                Header: "Name",
                                                id: "authorName",
                                                accessor: d => d.author
                                            }
                                        ]
                                    },
                                    {
                                        Header: "Info",
                                        columns: [
                                            {
                                                Header: "Status",
                                                id: "status",
                                                accessor: d => d.status
                                            },
                                            {
                                                Header: "Priority",
                                                id: "projectPhase",
                                                accessor: d => d.priority
                                            },
                                            {
                                                Header: "Description",
                                                id: "description",
                                                accessor: d => d.description
                                            }
                                        ]
                                    }
                                ]}
                                defaultPageSize={10}
                                getTrProps={(state, rowInfo) => {
                                    if (rowInfo && rowInfo.row) {
                                        return {
                                            onClick: (e) => {


                                                // handleClick(rowInfo);
                                                this.setState({
                                                    selected: rowInfo.index
                                                });

                                                // this.props.history.push({
                                                //     pathname: `/ticket/${rowInfo.original.id}/edit`,
                                                //     state: { tickets: this.props.ticketsArray }
                                                // });
                                                // console.log(this.props.ticketsArray);
                                            },
                                            style: {
                                                background: rowInfo.index === this.state.selected ? '#8FBC8F' : '',
                                                cursor: rowInfo.index === this.state.selected ? 'pointer' : 'pointer',
                                                color: rowInfo.index === this.state.selected ? 'white' : 'black'
                                            }
                                        }
                                    }else{
                                        return {}
                                    }
                                }}
                                className="-striped -highlight" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ticketsArray: state.tickets.tickets,
        projectsArray: state.projects.projects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({fetchTickets,fetchProjects,onRowClick}, dispatch),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Tickets);
