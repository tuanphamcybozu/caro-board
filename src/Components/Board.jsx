import React from 'react';
import Square from './Square';

export const PLAYER_1 = 1;
export const PLAYER_2 = 2;

const WIN_ITEM_LIST = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export default class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 1,
            currentPlayer: 1,
            listOfPlayer_1: [],
            listOfPlayer_2: [],
            isWin: false,
            winner: 0
        }
    }

    changeCurrentPlayer = () => {
        const nextPlayer = this.state.currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
        this.setState({currentPlayer: nextPlayer})
    }

    isPlayer_1 = () => {
        return this.state.currentPlayer === PLAYER_1;
    }

    verifyWin = (key) => {
        if (this.isPlayer_1()) {
            this.setState({
                listOfPlayer_1: [...this.state.listOfPlayer_1, key]
            }, function () {
                this.isWin(this.state.listOfPlayer_1);
                this.changeCurrentPlayer();
            });
        } else {
            this.setState({
                listOfPlayer_2: [...this.state.listOfPlayer_2, key]
            }, function () {
                this.isWin(this.state.listOfPlayer_2);
                this.changeCurrentPlayer();
            });
        }
    }

    isWin = (list) => {
        let win = false;
        WIN_ITEM_LIST.forEach(item => {
            win = item.every(elem => list.includes(elem));
            if (win) {
                this.setState((state, props) => ({isWin: true, winner: state.currentPlayer}));
                return;
            }
        });

        return win;
    }

    render() {
        return (
            <>
                <div id="board">
                    <br/>
                    <Square key={0} id={0} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/>
                    <Square key={1} id={1} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/>
                    <Square key={2} id={2} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/> <br/>
                    <Square key={3} id={3} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/>
                    <Square key={4} id={4} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/>
                    <Square key={5} id={5} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/> <br/>
                    <Square key={6} id={6} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/>
                    <Square key={7} id={7} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/>
                    <Square key={8} id={8} currentPlayer={this.state.currentPlayer} verifyWin={this.verifyWin}/>
                </div>
                <div>test:{this.state.winner}</div>
                <p>Result: {this.state.isWin ? `WIN is ${this.state.winner}` : 'no body win yet!'}</p>
            </>
        )
    }
}