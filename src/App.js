import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Body from './components/body.js';
import Modal from './components/modal.js';
import { CSSTransitionGroup } from 'react-transition-group'
//import {postAudio} from './services/REST'

class App extends Component {
state={
        FilmList:[],
        InfoList:{Title:"",Year:"",Genre:"",Actors:"",Plot:""},



    }
getFilmList(fimslist){
  if(fimslist.Response==="False"){
    
    this.setState({FilmList:[],});
    document.getElementsByClassName('find_t')[0].className='find_t not_find_active';


  }
  else{
    
    this.setState({FilmList:fimslist.Search,});
    document.getElementsByClassName('find_t')[0].className='find_t';
  }
    
  

}
geInfoFilm(infolist){
  
    this.setState({InfoList:infolist,});
    console.log(infolist)
  
    
  

}





  render() {
    return (
      <div>
        <Modal INFO={this.state.InfoList} />
        <Header callBackfilmlist={this.getFilmList.bind(this)} />
        <Body FILMLIST={this.state.FilmList} callBackinflist={this.geInfoFilm.bind(this)} />

      </div>
      
    );
  }
}

export default App;
