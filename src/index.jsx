import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import App from './app';

ReactDOM.render(
    <AppContainer>
        <Routes />
    </AppContainer>,
    document.getElementById('App')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('App')
        );
    });
}
