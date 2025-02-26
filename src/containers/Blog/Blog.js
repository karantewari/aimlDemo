import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';
// import post from '../../components/Post/Post';

class Blog extends Component {

    state = {
        posts : [],
        postSelectedId : null,
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(p => {
                return{
                    ...p,
                    author : "Karan"
                }
            })
            this.setState({posts : updatedPosts });
        })
    }

    postHandler = (index) => {
        this.setState({postSelectedId : index})
    }

    render () {

        const posts = this.state.posts.map(myPost => {
            return <Post 
                key={myPost.id} 
                title={myPost.title}
                author={myPost.author} 
                clicked={()=> this.postHandler(myPost.id)}
            />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.postSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;