const initialState = {
    title: 'Taco Time!',
    taco: {},
    loading: false
}

export const tacoReducer = (state=initialState, action) => {

    switch(action.type){
        case 'LOADING':
            return {...state,loading: true};
        case 'NEW_TACO':
            
            return {...state,taco: action.payload}

        default: 
            return state;
    }

}