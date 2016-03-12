import React from 'react'
import { render } from 'react-dom'
import { APP } from './components'

window.React = React;

render(<APP />, document.getElementById('react-container'));