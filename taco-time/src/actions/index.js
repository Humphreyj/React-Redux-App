import axios from 'axios';

export const getTaco = () => {
    return dispatch => {
        dispatch({type: 'LOADING'})
        axios
        .get('http://taco-randomizer.herokuapp.com/random/')
        .then(res => {
            console.log(res)
            dispatch({type: "NEW_TACO", payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

