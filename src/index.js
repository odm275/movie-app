import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const MOUNT = document.getElementById('root');
const renderApp = Comp => ReactDOM.render(Comp,MOUNT);

if(module.hot){
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        renderApp(<NextApp/>)
    })
}

renderApp(<App/>);