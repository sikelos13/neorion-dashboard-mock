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
            ticket: {}
        });
    }
    componentDidMount() {
        // const {foo} = this.props.location.state;
        // console.log(this.props.location.state.ticket);
        // const ticket = this.props.location.state.ticket;
        // console.log(ticket);
        this,this.setState({ticket: this.props.location.state.ticket })
    }


    render() {
        const pageTitle = `Ticket ${this.state.ticket.project}`;
        return (
            <div className="container custom-margin">
                <PageTitle title={pageTitle}/>

            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Tickets</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Ticket 1</option>
                        <option>Ticket 2</option>
                        <option>Ticket 3</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Author</Label>
                    <Input type="text" placeholder={this.state.ticket.author} id="exampleSelect" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Description Text</Label>
                    <Input type="textarea" name="text" value={this.state.ticket.description} />
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
