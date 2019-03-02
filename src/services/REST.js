import axios from 'axios'

// var url = 'http://localhost:8000/formulario_mostrar/' prueba_de_llegada
var url2='http://www.omdbapi.com/?i=';
export  const getAudioFilm = (e) => {

   var promise = axios({
        method: 'get',
        baseURL: url2+e.id_film+'&apikey=a543eeb3',
        
        timeout: 3000,
        responseType: 'json'

    }).then(response => {
        
      return (response.data);
        
    })
    .catch(error => {
        console.log("Error", error);
    }); 
    
    
    return promise;

    
}



var url='http://www.omdbapi.com/?s=';

export  const postAudio = (e,Type_search) => {

   var promise = axios({
        method: 'get',
        baseURL: url+e.name_movie+'&type='+Type_search+'&apikey=a543eeb3',
        
        timeout: 3000,
        responseType: 'json'

    }).then(response => {
        
      return (response.data);
        
    })
    .catch(error => {
        console.log("Error", error);
    }); 
    
    
    return promise;

    
}
