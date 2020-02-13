import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component {
    //Se encarga de la funcion del jugador 
    handleSetPlayer(e) {
        this.props.setPlayer(e)
    }


    //funcion para sacar el HTML, si hay ganado sacara la frase de quien ha ganado, si no saca cual es el siguiente jugador
    renderHtml() {
        if (this.props.winner) {
            return (<h2>Winner is {this.props.winner}</h2>)
        } else {
            return this.props.player ?
                <h2>Next player is {this.props.player}</h2> :
                <Player player={(e) => this.handleSetPlayer(e)}/>
        }
    }
    render() {
        return (<span>{this.renderHtml()}</span>)
        //saca en un span la llamada de la funcion renderHtml()
    }
}

export default Status;