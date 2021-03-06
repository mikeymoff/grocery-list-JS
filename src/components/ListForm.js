import React, { Component } from 'react';
import shortid from 'shortid';
import { Button } from 'semantic-ui-react';



class ListForm extends Component {

    state = {
        text: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false
    });
    this.setState({
        text: ""
    });

    };

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <input
        name="text"
        style={{ textSize: 19}}
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="Add Item..." />
        < span>    </span> <span> </span>
        <Button size='small' color='blue' onClick={this.handleSubmit}>Add Item</Button>
        </form>
        );
    };
}


export default ListForm;
