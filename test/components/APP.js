import React from 'react'
import { findDOMNode } from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'
import { expect } from 'chai'
import { wrap } from 'react-stateless-wrapper'
import APP from '../../components/APP'

describe('APP Component', () => {

    let root;

    before(() => {
        //let SUT = wrap(APP);
        //root = findDOMNode(renderIntoDocument(<SUT />));
    });

    it('renders a div');

});
