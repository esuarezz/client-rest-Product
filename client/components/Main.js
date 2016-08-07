import React from 'react';
import { Link } from 'react-router';

import ApiService from './ApiService';
import ApiApp from './ApiApp';


const Main = React.createClass({
    render() {
        return (
            <div>
                <ApiApp />
                <ApiService />
            </div>
        )
    }
});

export default Main;