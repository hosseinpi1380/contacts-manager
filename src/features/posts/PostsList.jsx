import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getPosts } from './postsSlice';
import AddPostForm from './AddPostForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import TimeAgo from './TimeAge';
import ReactionButton from './ReactionButton';
const PostsList = () => {
    const { loading, posts } = useSelector(state => state.posts)
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const renderPosts = posts.length > 0 ? posts.map(post => (
        <div key={post.id
        } className='border-2 text-right border-black flex w-[300px] p-2 flex-col my-1 rounded-md shadow-md mr-2'>
            <h1 className='text-black'>post title: {post?.title}</h1>
            <p className='text-gray-500 text-sm'>post content: {post.content?.substring(0, 100)}</p>
            <TimeAgo timeStamp={post?.createdAt} />
            <h5>{post.author ? post?.author : 'unknown author'}</h5>
            <ReactionButton post={post ? post : null} />
            <Button size='small' variant='contained'
                onClick={() => navigate(`/edit/${post?.id}`)}>edit post</Button>
            <Button size='small' variant='contained' color='error'
                onClick={() => dispatch(deletePost(post?.id))}>
                delete post
            </Button>
        </div >
    )) : <div className='w-full text-center'>
        no posts were found! 😢
    </div>
    return (
        <>
            <AddPostForm />
            <h1 className='uppercase p-2 text-center bg-cyan-800
                    text-white mt-1 rounded-md'>posts</h1>
            <div className='flex flex-wrap
                    '>
                {loading === true ? 'loading' : renderPosts}
            </div>
        </>
    )

}

export default PostsList;
