import React from 'react';
import ReactDOM from 'react-dom';

export default function Exe() {
    return (
        <h1>Hello React!</h1>
    );
}

if (document.getElementById('exe')) {
    ReactDOM.render(<Exe />, document.getElementById('exe'));
}