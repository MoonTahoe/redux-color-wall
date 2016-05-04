import jsdom from 'jsdom'
import React from 'react'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.localStorage = {
    "redux-store": false
};
global.React = React;
global.window.devToolsExtension = f => f;
global.navigator = {userAgent: 'node.js'};