const ADD = 'ACTION'

export function addState(data){
    return {type: ADD, payload: data}
}