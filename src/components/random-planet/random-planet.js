import React from 'react';
import style from './random-planet.module.css';
import swapiService from '../../service/swapi-service.js';

export default class RandomPlanet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            planet:null,
        };
        this.swapiService = new swapiService();
        const id = Math.floor(Math.random()*25)+2;
        
        this.onPlanetLoaded = (planet) =>{
            this.setState(planet)
        }
        
        this.updatePlanet = () => { this.swapiService.getPlanet(id).
        then(this.onPlanetLoaded)};
        this.updatePlanet();
    }

    render(){
        return(
            <div className={style.randomPlanet}>
                <div className={style.planetImg}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${this.state.id}.jpg`}/>
                </div>
                <div className={style.planet}>
                    <div className={style.planetName}>{this.state.name}</div>
                    <div className={style.planetInfo}>
                        <ul>
                            <li>
                                <h3>Population</h3>
                                <span>{this.state.population}</span>
                            </li>
                            <li>
                                <h3>Rotation Period</h3>
                                <span>{this.state.rotationPeriod}</span>
                            </li>
                            <li>
                                <h3>Diameter</h3>
                                <span>{this.state.diameter}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}