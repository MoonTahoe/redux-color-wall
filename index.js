import React from 'react'
import { Provider } from 'react-redux'
import storeFactory from './store'
import { render } from 'react-dom'
import { APP } from './components'

window.React = React;

render(
    <Provider store={storeFactory(true)}>
        <APP />
    </Provider>,
    document.getElementById('react-container'));