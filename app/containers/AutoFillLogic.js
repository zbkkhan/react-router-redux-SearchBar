import React from 'react'
import { connect } from 'react-redux'
import AutoFillList from '../components/AutoFillList'

const mapStateToProps = (state) => {
	console.log(state)
	if (state.search.autofillResult== undefined) return {songs: []}
	else return {
		songs: state.search.autofillResult
	}

}

const mapDispatchToProps = (dispatch) => {
	return{
		onClick: () => {return}
	}
}

const AutoFillLogic= connect(mapStateToProps, mapDispatchToProps)(AutoFillList)
export default AutoFillLogic