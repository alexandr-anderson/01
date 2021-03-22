import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (state) => {

    let postsElement = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostText = state.newPostText

    let onAddPost = () => {
        state.addPost()
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        state.updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>)
}
export default MyPosts