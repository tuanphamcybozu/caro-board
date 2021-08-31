import React from 'react';
import {PLAYER_1} from "./Board";

const PLAYER_1_SYMBOL = 'X';
const PLAYER_2_SYMBOL = 'O';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
        this.verifyWin = this.props.verifyWin;
    }

    handleClick = () => {
        if (this.state.value !== null) {
            return;
        }

        this.fillSquare();
        this.verifyWin(this.props.id);
    }

    fillSquare = () => {
        const SYMBOL = this.props.currentPlayer === PLAYER_1 ? PLAYER_1_SYMBOL : PLAYER_2_SYMBOL;
        this.setState({value: SYMBOL});
    }

    render() {
        return (
            <>
                <button id={this.props.id} className='square_btn' value={this.state.value} onClick={() => this.handleClick()}>
                    {this.state.value}
                </button>
            </>
        )
    }
}