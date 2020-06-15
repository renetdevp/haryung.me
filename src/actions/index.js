import axios from 'axios';

//  action type names
export const GET_POSTS_LIST = 'GET_POSTS_LIST';

//  action creator funcs
export const postsCreator = (data) => ({ type: GET_POSTS_LIST, data });

//  action funcs
export const postsAction = () => {
    //  async/await를 사용하려면 babel-polyfill import 필요
    
    return (dispatch) => {
        return axios.get('http://haryung.me:1234/posts')
            .then(({ data }) => {
                dispatch(postsCreator(data.posts));
            })
            .catch((err) => {
                throw(err);
            });
    }
};