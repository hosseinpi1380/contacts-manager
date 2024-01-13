import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import yupValidation from '../../schema/FormikSchema'
import { useDispatch, useSelector } from "react-redux";
import { postPosts } from "./postsSlice";
import { Button } from '@mui/material';
const AddPostForm = () => {
    const dispatch = useDispatch();
    const authorsSelector = useSelector(state => state.posts.authors)
    const { values, touched, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            title: '', content: '', author: '',
        },
        validationSchema: yupValidation,
        onSubmit: (values, actions) => {
            const { title, content, author } = values;
            dispatch(postPosts({ title, content, author }));
            actions.resetForm();
        }
    });

    const canSave = Boolean(values.title) && Boolean(values.content) && Boolean(values.author);
    return (
        <section className="border-stone-600 mt-3 border-2 border-solid rounded-md p-4">
            <h2 className="uppercase">add a new post</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-2">
                    <label>post title</label>
                    <input type="text" name="title" id="postTitle"
                        className="w-full"
                        onChange={handleChange} value={values.title} />
                    {errors.title && touched.title && <p className="text-red-600">{errors.title}</p>}
                </div>
                <div>
                    <label>author</label>
                    <select onChange={handleChange} value={values.author} name="author" id="author">
                        <option value=''>...</option>
                        {authorsSelector.map(el => (
                            <option key={el.id} value={el.name} >{el.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>post content</label>
                    <textarea style={{ width: '100%', height: '200px' }} type="text" name="content" id="postContent" value={values.content}
                        onChange={handleChange} />
                    {errors.content && touched.content && <p className="text-red-600">{errors.content}</p>}
                </div>
                <Button variant='contained' fullWidth onClick={handleSubmit} color='warning' disabled={!canSave}>save post</Button>
            </form>
        </section>
    )
}

export default AddPostForm
