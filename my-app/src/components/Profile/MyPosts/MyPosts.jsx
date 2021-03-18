import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let state = props.store.getState().profilePage;

    let postsElement = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostText = state.newPostText

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              placeholder='Enter the text'
                              value={newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>)
}
export default MyPosts