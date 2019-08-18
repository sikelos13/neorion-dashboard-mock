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
        this.state={tickets: [], projects: [], ticket: {}};
    }

    render() {
        const pageTitle = 'Ticket-Detail';
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
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Author 1</option>
                        <option>Author 2</option>
                        <option>Author 3</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Comment Text</Label>
                    <Input type="textarea" name="text" />
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
