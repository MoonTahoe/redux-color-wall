import React from 'react'
import { findDOMNode } from 'react-dom'
import { renderIntoDocument, findRenderedDOMComponentWithTag } from 'react-addons-test-utils'
import { APP } from '../../components'
import { expect } from 'chai'
import { wrap } from 'react-stateless-wrapper'

describe('APP Component', () => {

    let h1;

    before(() => {
        let SUT = wrap(APP);
        h1 = findDOMNode(renderIntoDocument(<SUT />));
    });

    it('displays title', () => expect(h1.innerHTML).to.equal("Color Picker APP"));

});