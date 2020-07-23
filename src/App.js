import React, { useState } from 'react';

import MovieList from './components/MovieList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';

function App() {
  const [Movie,setMovie]=useState([{titre:"Annihilation",rate:4,image:"https://images.squarespace-cdn.com/content/v1/5ae7f97a9772ae4ce53566b2/1554356845910-EI2ZVHJRKOSPJAHCUAI1/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/ANNIHILATION+poster_smaller.jpg"},{titre:"Starwars",rate:3,image:"https://starwarsblog.starwars.com/wp-content/uploads/2015/04/star-wars-the-digital-movie-collection.jpg"},{titre:"Avengers",rate:5,image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"}])
  const AjoutMovie=(a,b,c)=>{
    setMovie([...Movie,{titre:a,rate:b,image:c}])
  }
  return (
    <div style={{backgroundColor:'black'}}>
     <MovieList movie={Movie}/>
     <AddMovie AjoutMovie={AjoutMovie}/>
    </div>
  );
}

export default App;
