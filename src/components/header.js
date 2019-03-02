import React, { Component } from 'react';

import {postAudio} from '../services/REST'


import '../CSS/header.css';


class Header extends Component {

	state={
		Type:'movie'


	}

	async buildMovie(text_search){
		var search={
			name_movie:text_search,

		}
		var data=await postAudio(search,this.state.Type);
		
		this.props.callBackfilmlist(data);
		



	}
	selectMovie=()=>{

		this.setState({Type:'movie'})
		
	}

	selectSerie=()=>{

		this.setState({Type:'series'})
		


	}
	handleChange=()=>{
		
		var text_search=document.getElementsByClassName('input_texts')[0];
		var contenedor=document.getElementsByClassName('container_header')[0];
		

		
		if(text_search.textLength>=3){
			contenedor.className='container_header move_header'
			this.buildMovie(text_search.value);

			
		}
		if(text_search.textLength==0){
			contenedor.className='container_header'
			this.props.callBackfilmlist({Response:"False"});
			document.getElementsByClassName('find_t')[0].className='find_t';





		}

	}


	

	render(){
		return(
			<div>

			

			<div className="container_header">
				
				<h1>Movies and series</h1>
				<div className="container_search">
				<p className="find_t" >no hay resultados <br /> 
				a esta busqueda</p>
				<form className="search_movie" >
					<input className='input_texts' type="text" placeholder="¿Que desea buscar?" onChange={this.handleChange} /><br />
					
					<div className="form-check form-check-inline RadioMovie">
					  <input className="form-check-input " onClick={this.selectMovie}type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultChecked="True"/>
					  <label className="form-check-label" htmlFor="inlineRadio1">Movie</label>
					</div>
					<div className="form-check form-check-inline">
					  <input className="form-check-input RadioSerie" onClick={this.selectSerie}  type="radio" name="inlineRadioOptions" id="inlineRadio2"  />
					  <label className="form-check-label" htmlFor="inlineRadio2">Serie</label>
					</div>


					

				</form>
				</div>
			</div>
			</div>



			)


	}


}





export default Header;
