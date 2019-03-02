import React, { Component } from 'react';

class modal extends Component {

	changemodal=()=>{
		
		var cont_modal=document.getElementsByClassName('overlay')[0];
		cont_modal.className='overlay'


		var cont_modal_poster=document.getElementsByClassName('modal_poster')[0];
		
		cont_modal_poster.className='modal_poster'
	}
render(){
		return(
			<div className="overlay" onClick={this.changemodal} >
				<div className="modal_poster">
					<img className="image_modal" src={this.props.INFO.Poster} alt="Poster not found"/>
					<h2>{this.props.INFO.Title}</h2>
					<p>{this.props.INFO.Genre}</p>
					<p>{this.props.INFO.Actors}</p>
					<p>{this.props.INFO.Plot}</p>
					

				</div>
				

			</div>

			)
	}
}
 export default modal;

