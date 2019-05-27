// import {Provider } from 'react-redux'
// import {createStore} from 'redux'

const Provider = require('react-redux')
const redux = require('redux')


//create a initial state
const initialState = { counter: 0 }


//create reducer - gets prev state and return new one
function rootReducer(state,action){
    console.log("lax", action.type)
    if(action.type =="add"){
        state =  initialState.counter + 1
        return state
    }
    return action
}

//create store and pass reducer
const createStore = redux.createStore(rootReducer)



//create action creater
function add(){
    return{
        type: 'add'
    }
}

//dispatch calls reducer on action
createStore.dispatch(add())
//createStore.dispatch(add({type:'add'}))

console.log('myStore',createStore.getState())