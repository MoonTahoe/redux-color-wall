import React from 'react'
import { render } from 'react-dom'
import { APP } from './components'
import setupStore from './store'

window.React = React;
window.store = setupStore(true);

render(<APP />, document.getElementById('react-container'));