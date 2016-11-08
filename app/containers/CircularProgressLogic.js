import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '../components/CircularProgress'

const mapStateToProps = (state) => {
	
	return{
		percentage: state.progress
	}
}



const CircularProgressLogic= connect(mapStateToProps)(CircularProgress)
export default CircularProgress