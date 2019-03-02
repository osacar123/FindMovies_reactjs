import React, { Component } from 'react';
import '../CSS/body.css';
import {getAudioFilm} from '../services/REST'
import {no_encuentra} from '../images/search.jpg'

class Body extends Component {
	async buildInfoComplete(info,name){
		var cont=document.getElementsByClassName('container_'+name)[0];
		var data=await getAudioFilm({id_film:info.imdbID});
			

		this.props.callBackinflist(data);

		var cont_modal=document.getElementsByClassName('overlay')[0];
		cont_modal.className='overlay overlay_active'

		var cont_modal_poster=document.getElementsByClassName('modal_poster')[0];
		
		cont_modal_poster.className='modal_poster animation_in'
		 

		
	}

	
	 Item = (props) => {
        //const {name} =  props;

        return(
            <div className={'container_poster'}>
            	<div className={'container_poster_info '+'container_'+props.name} id={"container_"+props.name} onClick={this.buildInfoComplete.bind(this,props.info,props.name)} >
            		<figure clasName="figure_image">
            		<img className="poster" src={props.info.Poster}  alt="Poster not found" />
            		</figure>
            		<h6>{props.info.Title}</h6><br />
            		<h6>{props.info.Year}</h6>

            	</div>

            </div>
        )
    }
	Posters = () => {
            return(

                this.props.FILMLIST.map((i,n) =>{

                	
                return (
                		//<div></div>
                       <this.Item name={n} info={i} />
		                )
				    }
    			)
            )
    }

	render(){

		return(	

				
				<div className='container_posters'>
						
					{
                        this.Posters()

                    }

				</div>
				
			)
	}


}

export default Body;