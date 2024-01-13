import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost, selectPostById } from './postsSlice';
const EditPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const post = useSelector(state => selectPostById(state, id))
    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.content)
    const contentChange = e => setContent(e.target.value)
    const titleChange = e => setTitle(e.target.value)
    const submitHandler = e => {
        e.preventDefault();
        dispatch(updatePost({ id: post.id, title, content, reactions: post.reactions, author: post.author }));
        navigate('/')
    }
    return (
        <section className="border-stone-600 border-2 border-solid rounded-md p-4 mx-4">
            <h2 className="uppercase">edit post</h2>
            <form onSubmit={submitHandler} className="flex flex-col">
                <div className="mb-2">
                    <label>post title</label>
                    <input type="text" name="title" id="postTitle" className="ml-2 w-full"
                        onChange={titleChange} value={title} />
                </div>
                <div>
                    <label>post content</label>
                    <textarea
                        style={{ width: '100%', height: '200px' }}
                        type="text"
                        name="content" id="postContent" value={content}
                        className="ml-2"
                        onChange={contentChange} />
                </div>
                <button 
                className='bg-blue-500 rounded-md shadow-md flex w-max text-white p-1'
                type="submit">submit edit post</button>
            </form>
        </section>
    )
}

export default EditPostForm
