import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { fields, field, pullRight } from '../styles/AddPost.css';
import { ADD_POST_REQUEST } from '../reducers/postsReducer';

const AddPost = () => {
    const dispatch = useDispatch();
    // const { addPostErrmsg } = useSelector((state) => state.post, []);
    const [titleText, setTitleText] = useState('');
    const [contentText, setContentText] = useState('');

    const onValueChange = useCallback((e) => {
        e.preventDefault();

        switch (e.target.id){
            case 'title':
                setTitleText(e.target.value);
                break;
            case 'content':
                setContentText(e.target.value);
                break;
            default:
                return;
        };
    });

    const addPost = useCallback((e) => {
        e.preventDefault();

        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                title: titleText,
                content: contentText
            }
        });
    });

    return (
        <Form onSubmit={addPost}>
            <Form.Group className={fields}>
                <Form.Input label="Title" placeholder="hos go?" className={field} id="title" onChange={onValueChange} />
                <Form.TextArea label="Content" placeholder="hos gogo" className={field} id="content" onChange={onValueChange} />
                <Button type="submit" className={pullRight}>Add Post</Button>
            </Form.Group>
        </Form>
    );
};

export default AddPost;