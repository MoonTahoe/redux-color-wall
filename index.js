import React from 'react'
import { Provider } from 'react-redux'
import storeFactory from './store'
import { render } from 'react-dom'
import APP from './components/APP'
import '!style!css!sass!postcss-loader!./stylesheets/APP.scss'
import '!style!css!sass!postcss-loader!./stylesheets/Color.scss'
import '!style!css!sass!postcss-loader!./stylesheets/ColorList.scss'
import '!style!css!sass!postcss-loader!./stylesheets/Star.scss'

window.React = React;

render(
    <Provider store={storeFactory(true)}>
        <APP />
    </Provider>,
    document.getElementById('react-container'));