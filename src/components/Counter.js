import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/actions.js';
import './counter.css';

const CounterComp = ({ count, incrementHandler, decrementHandler, resetHandler }) => {
    return (
        <>
            <p className="heading">Counter</p>
            <div className="display">
                <button
                    className="changeButton"
                    onClick={decrementHandler}
                >
                    -
                </button>
                <p className="count">{count}</p>
                <button
                    className="changeButton"
                    onClick={incrementHandler}
                >
                    +
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    className="changeButton reset"
                    onClick={resetHandler}
                >
                    RESET
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { count: state.counter };
}
const mapDispatchToProps = {
    incrementHandler: increment,
    decrementHandler: decrement,
    resetHandler: reset,
}

export const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComp);
