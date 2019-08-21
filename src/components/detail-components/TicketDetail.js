import React, {Component} from 'react';
// import './styles/App.scss';
// import './styles/Gentelella.scss';
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import {projectsArray} from "../reducers/projects";
import PageTitle from "../PageTitle";
import {bindActionCreators} from 'redux'

class Tickets extends Component {

    constructor(props) {
        super(props);
        this.state=({
            author: "",
            description: "",
            status: "",
            project: "",
            priority: ""
        });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
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
        })
    }


    render() {
        const pageTitle = `Ticket ${this.state.project}`;
        return (
            <div className="container custom-margin">
                <PageTitle title={pageTitle}/>

            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Priority</Label>
                    <Input type="text" value={this.state.priority}  onChange={(value) => this.onChange(value)} id="exampleSelect" />
                    </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Status</Label>
                    <Input type="text" value={this.state.status}  onChange={(value) => this.onChange(value)}  id="exampleSelect" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Author</Label>
                    <Input type="text" value={this.state.author} onChange={(value) => this.onChange(value)} id="exampleSelect" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Description Text</Label>
                    <Input value={this.state.description} onChange={(value) => this.onChange(value)} id="exampleSelect" />
                </FormGroup>
                <Button>Submit</Button>
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
