import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { fields, field, pullRight } from '../styles/AddPost.css';
import { LOG_IN_REQUEST } from '../reducers/usersReducer';

const Login = () => {
    const dispatch = useDispatch();
    const [idText, setIdText] = useState('');
    const [pwText, setPwText] = useState('');

    const { user, loginErrmsg } = useSelector((state) => state.user);

    const onValueChange = useCallback((e) => {
        e.preventDefault();

        switch (e.target.id){
            case 'id':
                setIdText(e.target.value);
                break;
            case 'pw':
                setPwText(e.target.value);
                break;
            default:
                return;
        };
    });

    const login = useCallback((e) => {
        e.preventDefault();

        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                id: idText,
                pw: pwText,
            }
        });

        setIdText('');
        setPwText('');
        e.target.reset();
    });

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    useEffect(() => {
        if (!!loginErrmsg) alert(loginErrmsg);
    }, [loginErrmsg]);

    return (
        <Form onSubmit={login}>
            <Form.Group className={fields}>
                <Form.Input label="Id" placeholder="Is this id?" className={field} id="id" onChange={onValueChange} />
                <Form.Input type="password" label="Pw" placeholder="Is this pw?" className={field} id="pw" onChange={onValueChange} />
                <Button type="submit" className={pullRight}>Add Post</Button>
            </Form.Group>
        </Form>
    );
};

export default Login;
