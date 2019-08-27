import React, {Component} from 'react';
// import './styles/App.scss';
// import './styles/Gentelella.scss';
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import {projectsArray} from "../reducers/projects";
import PageTitle from "../PageTitle";
import {bindActionCreators} from 'redux'
import {Redirect} from "@reach/router";

class Tickets extends Component {

    constructor(props) {
        super(props);
        this.state=({
            author: "",
            description: "",
            status: "",
            project: "",
            priority: "",
            comments: [],
            isSubmited: false
        });
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChangePriority = e => {
        this.setState({priority: e.target.value})
    };
    onChangDescription = e => {
        this.setState({description: e.target.value})
    };
    onChangeStatus = e => {
        this.setState({status: e.target.value})
    };
    onChangeAuthor = e => {
        this.setState({author: e.target.value})
    };
    onChangeProject = e => {
        this.setState({project: e.target.value})
    };
    handleSubmit(event) {
        event.preventDefault();

        const data = this.state;
        const data1 = (data);
        console.log(data);

        const localToken = localStorage.getItem('token');
        fetch(`${process.env.DB_HOST}/tickets/${this.props.location.state.ticket.id}/`, {
            method: 'PATCH',
            headers: new Headers({
                'Authorization': 'Token '+ localToken,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data),
        }).then(() => {
            this.setState({isSubmited: true})
        });
    }


    // handleChangeAuthor(event) {
    //     this.setState({valueAuthor: event.target.valueAuthor});
    // }
    // handleChangeDescription(event) {
    //     this.setState({valueDescription: event.target.valueDescription});
    // }
    // handleChangeStatus(event) {
    //     console.log(event)
    //     this.setState({valueStatus: event.target.valueStatus});
    // }
    componentDidMount() {
        // const {foo} = this.props.location.state;
        // console.log(this.props.location.state.ticket);
        // const ticket = this.props.location.state.ticket;
        // console.log(ticket);
        this,this.setState({
            status: this.props.location.state.ticket.status,
            description: this.props.location.state.ticket.description,
            author: this.props.location.state.ticket.author,
            project: this.props.location.state.ticket.project,
            priority: this.props.location.state.ticket.priority,
            comment: this.props.location.state.ticket.comments
        })
    }


    render() {
        const pageTitle = `Ticket ${this.state.project}`;
        if (this.state.isSubmited) {
            return <Redirect to='/tickets' />;
        }
        return (
            <div className="container custom-margin">
                <PageTitle title={pageTitle}/>

            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="exampleSelect">Project</Label>
                    <Input type="text" value={this.state.project}  onChange={this.onChangeProject} id="exampleSelect" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Priority</Label>
                    <Input type="text" value={this.state.priority}  onChange={this.onChangePriority} id="exampleSelect" />
                    </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Status</Label>
                    <Input type="text" value={this.state.status} onChange={this.onChangeStatus} id="exampleSelect" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Author</Label>
                    <Input type="text" value={this.state.author} onChange={this.onChangeAuthor} id="exampleSelect" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Description Text</Label>
                    <Input value={this.state.description} onChange={this.onChangDescription} id="exampleSelect" />
                </FormGroup>
                <Button onClick={this.saveTicket}>Submit</Button>
                <Button href='/tickets'>Back</Button>
            </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // ticket: this.props.location.state.ticket,
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
