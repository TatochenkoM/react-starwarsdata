import React from 'react';
import Header from '../header/header';
import ItemList from '../item-list/item-list';
import RandomPlanet from '../random-planet/random-planet';
import PersonDetails from '../person-details/person-details';
import SwapiService from '../../service/swapi-service';

export default class App extends React.Component{
  
    render(){
      return(
        <div>
          <Header/>
          <RandomPlanet/>
        </div>
      )
    }
  
  }