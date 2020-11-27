import React from 'react'
import classes from './Myposts.module.css'
import PostMessage from "./PostMessage/PostMessage";


const MyPosts = (props) => {
    let postsElements = props.postData.map(p => <PostMessage message={p.post} id={p.id} likesCount={p.likesCount}/>)
    //Post add
    let newPost = React.createRef()
    let addPost = () => {
     props.dispatch({type: 'ADD-POST'})
    }
    const onPostChange = () => {
        let text = newPost.current.value
        props.dispatch({type: 'CHANGE-NEW-POST', newText: text})
    }
    const onKeyDown = e => {
        if (e.code === "Enter") {
            addPost()
        }
    }
    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.post_block}>
                <div><textarea onChange={onPostChange} ref={newPost} onKeyDown={onKeyDown} name="posts" id="txtarea" cols="20" rows="5"
                               value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts