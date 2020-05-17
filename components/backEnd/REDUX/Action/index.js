import axios from 'axios';

import {
    FETCH_ERROR,
    FETCH_LOADING,
    FETCH_SUCCESS,
} from "../Types";


//Get the Token
const tokenAPI = "cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0" || "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9" || "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";

//get data when is loaded
export const albumAction = () => dispatch => {
    dispatch({
        type: FETCH_LOADING,
    })
    axios.get("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
        .then(res => dispatch({
            type: FETCH_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCH_ERROR,
            payload: err.messages
        }))
}

