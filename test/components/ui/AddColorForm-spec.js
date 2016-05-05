import { expect } from 'chai'
import { mount } from 'enzyme'
import { AddColorForm } from '../../../components/ui'
import { spy } from 'sinon'
import { findDOMNode } from 'react-dom'

describe("<AddColorForm /> UI Component", () => {

    let wrapper;

    describe("Rendering the UI", () => {

        before(() => wrapper = mount(<AddColorForm />));

        it("renders an input for the color title", () => expect(wrapper.ref('title')).to.have.length(1));

        it("renders a color input for the color hex", () => expect(wrapper.ref('color').props().type).to.equal('color'));

        it("renders an add button", () => expect(wrapper.find('button').text()).to.equal("ADD"));

    });

    describe("Adding New Colors", () => {

        let _addColor = spy();

        before(() => {
            wrapper = mount(<AddColorForm onAddColor={_addColor}/>);
            wrapper.ref('title').get(0).value = 'test-color';
            wrapper.ref('color').get(0).value = '#000099';
            wrapper.find('form').simulate('submit');
        });

        it("adds colors correctly", () => expect(_addColor.calledWith('#000099', 'test-color')).to.equal(true));

        it("resets the title value", () => expect(wrapper.ref('title').get(0).value).to.equal(""));

        it("resets the color value", () => expect(wrapper.ref('color').get(0).value).to.equal("#000000"));

    });

});
