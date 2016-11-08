import React, { PropTypes, Component } from 'react'


class AutoFillList extends Component {
	constructor (props) {
		super(props)
	}
	render(){
		if(this.props.songs.length > 0){
			let list = this.props.songs.map((song) => {
				
				if(typeof(song) != "undefined"){
				return(<a href={song.link}>
  					<li >{song.title}</li>
  					</a>)	
				}
				
			})
			return(<div>{list}</div>)
		}
		else{
			return(<div></div>)
		}
		
		
	}
	
}
	

AutoFillList.propTypes = {
	onClick: PropTypes.func.isRequired
  	// songs: PropTypes.array.isRequired
}

export default AutoFillList