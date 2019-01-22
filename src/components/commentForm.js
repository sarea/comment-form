import React from 'react'

class CommentForm extends React.Component {

    state = {
        userName: '',
        comment: ''
    }

    // this function will be called when someThing changed in the event `onChange`
    onValueChange = (e) => {
        // get the name attribute from input element that get changed
        const name = e.target.name;
        // add the value of that element to the state 
        this.setState({ [name]: e.target.value});
    }
    
    // this function will be called once the form get submitted
    onFormSubmit = (e) => {
        // send the state to the parent component
        // App component in this case
        this.props.onCommentSubmitted(this.state);
        // reset the state => clear the input fields after submitting
        this.setState({userName: '', comment: ''})
        // prevent the default behavior of the form to not refresh the page
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <br />===========================
                <br />======= Add Comment =======
                <br />===========================
                <br /><br />

                <form onSubmit={this.onFormSubmit}>
                    <label>
                        Name:
                        <input name="userName" type="text" value={this.state.userName} onChange={this.onValueChange}/> 
                    </label>
                    <br /><br />
                    <label>
                        Comment:
                        <input name="comment" type="text" value={this.state.comment} onChange={this.onValueChange}/> 
                    </label>
                    <br /><br />
                    <input type="submit" value="Add Comment" />
                </form>
            </div>
        )
    }
}

export default CommentForm;