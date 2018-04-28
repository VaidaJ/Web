import React from 'react';
import App from '../../backend/script.js';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form>
            <div><h1>TV-series</h1></div>
            <div class="list-group">
            </div>
            <App />
            </form>
        );
    }
}
