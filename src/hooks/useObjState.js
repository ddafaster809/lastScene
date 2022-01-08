import {useState} from 'react'

export const useObjState = initialState => {
    const [state, setState] = useState(initialState);
    const updateState = propsToModify => {
        setState(state=>({...state, ...propsToModify}))
    }
    return [state, updateState];
}

