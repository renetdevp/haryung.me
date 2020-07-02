import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { fields, field } from '../styles/AddPost.css';

const AddPost = () => {
    const dispatch = useDispatch();
    const { addPostErrmsg } = useSelector((state) => state.post, []);

    const addPost = useCallback((e) => {
        e.preventDefault();
    });

    return (
        <Form>
            <Form.Group className={fields}>
                <Form.Input label="Title" placeholder="hos go?" className={field} />
                <Form.TextArea label="Content" placeholder="hos gogo" className={field} />
            </Form.Group>
        </Form>
    );
};

export default AddPost;