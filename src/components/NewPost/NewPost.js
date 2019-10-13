import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Karan',
        showNewPost : false
    }

    toggleAddPostHandler = () => {
        let currentStatus = this.state.showNewPost;
        this.setState({showNewPost : !currentStatus});
    }

    postData = () => {
        const newPost = {
            title : this.state.title,
            body : this.state.content,
            author : this.state.author
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(response => {
            console.log("Post request sent", response);
        })
    }

    render () {

        let newPostBlock = null;

        if(this.state.showNewPost){
            newPostBlock = (
                <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <input value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                <button onClick={this.postData}>Add Post</button>
            </div>
            )
        }

        return (
            <React.Fragment>
                <div className="addPostTogglerButton">
                    <button onClick = {this.toggleAddPostHandler}>Toggle New Post Add</button>
                </div>
                {newPostBlock}
            </React.Fragment>
        );
    }
}

export default NewPost;