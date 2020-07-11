import React from 'react'
import {useDispatch, useStore} from 'react-redux'

import {addState} from '../../redux/actions/action'

export default function MainPage(){
    const dispatch = useDispatch()

    function addHandler(){
        dispatch(addState('oi'))
    }

    return(
        <button onClick={addHandler}>MainPage</button>
    )
}