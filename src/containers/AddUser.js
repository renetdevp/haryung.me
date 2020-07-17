import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { fields, field, pullRight } from '../styles/AddPost.css';
import { ADD_USER_REQUEST } from '../reducers/usersReducer';

const AddUser = () => {
    const dispatch = useDispatch();
    const [idText, setIdText] = useState('');
    const [pwText, setPwText] = useState('');
    const [nickText, setNickText] = useState('');

    const onValueChange = useCallback((e) => {
        e.preventDefault();

        switch (e.target.id){
            case 'id':
                setIdText(e.target.value);
                break;
            case 'pw':
                setPwText(e.target.value);
                break;
            case 'nick':
                setNickText(e.target.value);
                break;
            default:
                return;
        };
    });

    const addUser = useCallback((e) => {
        e.preventDefault();

        dispatch({
            type: ADD_USER_REQUEST,
            data: {
                id: idText,
                pw: pwText,
                nick: nickText
            }
        });
    });

    return (
        <Form onSubmit={addUser}>
            <Form.Group className={fields}>
                <Form.Input label="Id" placeholder="Is this id?" className={field} id="id" onChange={onValueChange} />
                <Form.Input type="password" label="Pw" placeholder="Is this pw?" className={field} id="pw" onChange={onValueChange} />
                <Form.Input label="Nick" placeholder="Is this nick?" className={field} id="nick" onChange={onValueChange} />
                <Button type="submit" className={pullRight}>Add Post</Button>
            </Form.Group>
        </Form>
    );
};

export default AddUser;