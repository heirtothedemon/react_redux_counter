import React from 'react';
import { connect } from 'react-redux';

const SivaComp = ({ count }) => {
    return (
        <div>
            {count}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { count: state.counter }
}

export const Siva = connect(
    mapStateToProps,
    null
)(SivaComp)
