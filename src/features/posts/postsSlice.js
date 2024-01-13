import { createSlice, nanoid, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
//crud
//create, read, update,delete
//create,read,delete,
export const getPosts = createAsyncThunk('posts/get', async () => {
    try {
        const res = await axios.get('http://localhost:4000/posts')
        const data = await res.data
        return data;
    }
    catch (error) {
        console.log(error)
    }
});
export const postPosts = createAsyncThunk('posts/create', async (post) => {
    try {
        const res = await axios.post('http://localhost:4000/posts', {
            id: nanoid(),
            title: post.title,
            content: post.content,
            createdAt: new Date().toISOString(),
            author: post.author,
            reactions: {
                thubmsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            }
        })
        const data = await res.data
        return data
    }
    catch (error) {
        console.log(error.message)
    }
}
);
export const deletePost = createAsyncThunk('posts/delete', async (id) => {
    try {
        const res = await axios.delete(`http://localhost:4000/posts/${id}`)
        if(res.status===200) return id;
        return `${res.status}:${res.statusText}`;
    }
    catch (error) {
        console.log(error)
    }
});
export const updatePost = createAsyncThunk('post/update', async (initialPost) => {
    const { id } = initialPost
    try {
        const res = await axios.put(`http://localhost:4000/posts/${id}`, initialPost)
        const data = await res.data
        return data
    }
    catch (err) {
        console.log(err.message)
    }
});
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        authors: [
            { id: nanoid(), name: 'hossein pirasbaghi' },
            { id: nanoid(), name: 'rasol pirasbaghi' },
            { id: nanoid(), name: 'zahra pirasbaghi' },
            { id: nanoid(), name: 'reza pirasbaghi' },
        ],
        posts: [],
        loading: false
    },
    reducers: {
        postAdded: {
            reducer: (state, actions) => {
                state.posts.push(actions.payload);
            },
            //if we want to add more features and information to our actions we use prepare callback
            prepare: (title, content, author) => ({
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    createdAt: new Date().toISOString(),
                    author,
                    reactions: {
                        thubmsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    }
                }
            })
        },
        postUpdate: {
            reducer: (state, actions) => {
                const { id, title, content } = actions.payload;
                const existingBlog = state.posts.find(el => el.id === id)
                existingBlog.title = title;
                existingBlog.content = content;
            },
        },
        postDelete: {
            reducer: (state, actions) => {
                const findPost = state.posts.find(el => el.id === actions.payload.id)
                state.posts.pop(findPost)
            }
        },
        postReactions: {
            reducer: (state, actions) => {
                const { postId, reaction } = actions.payload
                const existingPost = state.posts.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }
            },
            // prepare:(title,content,author)=>({payload:{}})
        },
        clearAllPosts: {
            reducer: (state, actions) => {
                state.posts.splice(0, state.posts.length)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getPosts.fulfilled, (state, { payload }) => {
                state.posts=[];
                state.posts.push(...payload)
                state.loading = false
            })
            .addCase(postPosts.fulfilled, (state, actions) => {
                state.posts.push(actions.payload)
            })
            .addCase(updatePost.fulfilled, (state, actions) => {
                const existingBlog = state.posts.findIndex(el => el.id == actions.payload.id)
                actions.payload.createdAt = new Date().toISOString();
                state.posts[existingBlog] = actions.payload
            })
            .addCase(deletePost.fulfilled, (state, actions) => {
                console.log(actions)
                state.posts = state.posts.filter(el => el.id !== actions.payload)
            })
    }
});
export const selectPostById = (state, postId) => state.posts.posts.find(el => el.id === postId);
export const { postAdded, postUpdate, postDelete, postReactions, clearAllPosts } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const selectAllUsers = state => state.posts.authors;
export default postsSlice.reducer;