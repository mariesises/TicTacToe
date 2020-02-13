import React, {Component } from "react";

class Player extends Component{
    handleForm(e){
        e.preventDefault(); //preventdefault sirve para que al hacer click en el boton Start no haga nada si no esta seleccionado el jugador
        this.props.player(e.target.player.value)
        //Coge el valor del input radio del formulario y selecciona el jugador dependiendo de su valor //X//O//
    }
    
    //Forumlario para escoger que jugador comienza la partida
    render(){
        return (
            <form onSubmit={(e) => this.handleForm(e)} className="formulario">
                <label>
                    Player X
                    <input type="radio" name="player" value ="X"/> 
                </label>
                <label>
                    Player O
                    <input type="radio" name="player" value ="O"/> 
                </label>
                <p></p>
                <input type="submit" value="START" className="button"/>
            </form>
            
        )
    }
}

export default Player;