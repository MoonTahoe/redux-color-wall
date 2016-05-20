import React from 'react'
import { Provider } from 'react-redux'
import storeFactory from './store'
import { render } from 'react-dom'
import APP from './components/APP'
import '!style!css!sass!postcss-loader!./stylesheets/APP.scss'
import '!style!css!sass!postcss-loader!./stylesheets/Color.scss'
import '!style!css!sass!postcss-loader!./stylesheets/ColorList.scss'
import '!style!css!sass!postcss-loader!./stylesheets/Star.scss'
import '!style!css!sass!postcss-loader!./stylesheets/AddColorForm.scss'
import '!style!css!sass!postcss-loader!./stylesheets/Menu.scss'

window.React = React;

const initialState = window.__INITIAL_STATE__;

render(
    <Provider store={storeFactory(true, initialState)}>
        <APP />
    </Provider>,
    document.getElementById('react-container'));