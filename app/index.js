import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore , combineReducers } from 'redux'
import routes from './config/routes'
import search from './reducers'


render( routes, document.getElementById('app'));