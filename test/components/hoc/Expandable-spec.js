import { expect } from 'chai'
import { mount } from 'enzyme'
import { Expandable } from '../../../components/hoc'
import { spy } from 'sinon'

describe("Expandable Higher Order Component", () => {

    let wrapper, ComposedComponent, Component = () => (
        <div></div>
    );

    before(() => {
    });

    describe("Rendering UI", () => {

        let props;

        before(() => {
            ComposedComponent = Expandable(Component);
            wrapper = mount(<ComposedComponent foo="foo" gnar="gnar" />);
            props = wrapper.find(ComposedComponent).props();
        });

        it("Starts off Collapsed", () => expect(props.collapsed).to.be.ok);

        it("Passes the expandCollapse function to composed component", () => expect(typeof props.expandCollapse).to.equal('function'));

        it("passes additional foo prop to composed component", () => expect(props.foo).to.equal("foo"));

        it("passes additional gnar prop to composed component", () => expect(props.gnar).to.equal("gnar"));

    });

    describe("Expand Collapse Functionality", () => {

        before(() => {

        });

        it("starts off expanded");

        it("toggles collapse");

        it("toggles expanded");

    });

});
