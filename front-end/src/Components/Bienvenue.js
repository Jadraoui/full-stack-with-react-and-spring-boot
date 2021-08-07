import React from 'react';
import  {Jumbotron} from 'react-bootstrap';

class Bienvenue extends React.Component {
    render(){
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Bienvenue dans votre Magasin de Voitures</h1>
                <blockquote className= "blockquote mb-0">
                    <p> Le meilleur de nos voitures est exposé près de chez vous </p>
                    <footer className="blockquote-footer"> Master MIOLA </footer>
                </blockquote>
            </Jumbotron>
        );
    }
}

export default Bienvenue;