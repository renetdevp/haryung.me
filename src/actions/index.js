import axios from 'axios';

//  action type names
export const GET_POSTS_LIST = 'GET_POSTS_LIST';

//  action creator funcs
export const getPostsData = (data) => {
    return {
        type: GET_POSTS_LIST,
        data
    };
};

//  action funcs
export const getPostsList = () => {
    //  async/await를 사용하려면 babel-polyfill import 필요
    // try {
    //     const res = await axios.get('https://ko.reactjs.org/docs/hooks-effect.html');
    //     dispatch(getPostsData(res.data));
    // } catch (err){
    //     throw err;
    // }
    
    return (dispatch) => {
        return axios.get('https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Accept')
            .then((res => {
                dispatch(getPostsData(res.data));
            }))
            .catch((err) => {
                throw(err);
            });
    }
};