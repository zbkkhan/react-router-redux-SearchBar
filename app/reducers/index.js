import { combineReducers } from 'redux'
import {SEARCH_TYPING , SEARCH_SUBMIT} from '../actions/index'
import{ routerReducer } from 'react-router-redux'

function search(state = {} , action) {
console.log("In reducers")
  switch (action.type) {
    case SEARCH_TYPING:
        var yo = Object.assign({}, state, {
            autofillResult: action.autofillResults
        })
        console.log(yo)
      return yo
    default:
      return state
  }
}

const rootReducer = combineReducers({search, routing: routerReducer })

export default rootReducer
