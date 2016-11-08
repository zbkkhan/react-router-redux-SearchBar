import React from 'react'
import { connect } from 'react-redux'
import {autofillSearch, resultsSearch } from '../actions/index'
import { Provider } from 'react-redux'

let SearchBar = ({ dispatch }) => {
  let input
  return (
    <div>
      <input ref={node => {
        input = node
      }} onChange={() => {dispatch(autofillSearch(input.value))}} />
      <button onClick={() => {
        dispatch(autofillSearch(input.value))
        input.value = ''
      }}>
       Search
      </button>
    </div>
  )
}
SearchBar = connect()(SearchBar)

export default SearchBar