import React, { Component } from 'react';
import './App.css';
import Status from './components/Status';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tablero: Array(9).fill(null),
            player: null,
            winner: null
        }
    }

    //Chequear el ganador, guardamos en un array todas las posibilidades que hay de ganar en el tres en raya
    checkWinner() {
        let winLines = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"],
        ]
        this.checkMatch(winLines)
    }

    //funcion  para saber quien gana,
    //Las variables iniciadas sirven para compararlas con las posiciones que ya han sido dadas en el tablero anteriormente
    //Si coincide alguna de las combinaciones, saca un alert que indique que has ganado y seguidamente que jugador ha ganado.
    checkMatch(winLines) {
        for (let index = 0; index < winLines.length; index++) {
            const [a, b, c] = winLines[index];
            let tablero = this.state.tablero

            if (tablero[a] && tablero[a] === tablero[b]
                && tablero[a] === tablero[c]) {
                    alert("YOU WIN");
                this.setState({
                    winner: this.state.player
                })
            }
        }
    }

    //Funcion que al hacer click nos muestre la X o la 0 dependiendo del jugador que toque
    hacerClick(index) {
        if (this.state.player && !this.state.winner) {
            let newTablero = this.state.tablero

            if (this.state.tablero[index] === null) {
                newTablero[index] = this.state.player

                this.setState({
                    tablero: newTablero,
                    player: this.state.player === "X" ? "O" : "X" 
                })
                this.checkWinner()
            }

        }

    }
    setPlayer(player) {
        this.setState({ player })
    }

    renderBoxes() {
        return this.state.tablero.map(
            (box, index) =>
                <div className="box" key={index}
                    onClick={() => this.hacerClick(index)}>
                    {box}
                </div>
        )
    }

    reset() {
        this.setState({
            player: null,
            winner: null,
            tablero: Array(9).fill(null)
        })
    }

    render() {
        return (
            <div className="container">
                <h1> Tic Tac Toe </h1>
                <button   onClick={() => this.reset()} className="button">RESET</button>
                <Status
                    player={this.state.player}
                    setPlayer={(e) => { this.setPlayer(e) }}
                    winner={this.state.winner}
                />
                <div className="tablero">
                    {this.renderBoxes()}
                </div>
                
            </div >
            /**disabled={!this.state.winner}  */
        )
    }/**https://tictactoe-proyecto.firebaseapp.com/ */
}

export default App;