import React from 'react'

class ShowComments extends React.Component {

    showComments = () => {
        return this.props.commentsList.map((comment, index) => (
            <div key={index}>
                Name: {comment.userName}, Comment: {comment.comment}
                <br />===========================<br />
            </div>
        ))
    }

    render () {
        return (
            <div>
                <br />===========================
                <br />====== Show Comments ======
                <br />===========================
                <br /><br />
                {(this.props.commentsList.length > 0) && this.showComments()}
            </div>
        )
    }
}

export default ShowComments;