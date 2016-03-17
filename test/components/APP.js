import React from 'react'
import { findDOMNode } from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'
import { APP, Menu, ColorList, AddForm } from '../../components'
import { expect } from 'chai'
import { wrap } from 'react-stateless-wrapper'

describe('APP Component', () => {

    let root;

    before(() => {
        let SUT = wrap(APP);
        root = findDOMNode(renderIntoDocument(<SUT />));
    });

    it('renders 3 children', () => expect(root.children.length).to.equal(3));

});