import { expect } from 'chai'
import { shallow } from 'enzyme'
import APP from '../../components/APP'
import { spy } from 'sinon'

describe("<APP /> UI Component", () => {

    let wrapper,
        MockAddColor = () => (
            <div></div>
        ),
        MockColors = () => (
            <div></div>
        ),
        MockMenu = () => (
            <div></div>
        );

    before(() => {
        APP.__Rewire__('AddColor', MockAddColor);
        APP.__Rewire__('Colors', MockColors);
        APP.__Rewire__('Menu', MockMenu);
    });

    describe("Rendering Containers", () => {

        before(() => wrapper = shallow(<APP />));

        it("renders <Menu />", () => expect(wrapper.find(MockMenu)).to.have.length(1));

        it("renders <AddColor />", () => expect(wrapper.find(MockAddColor)).to.have.length(1));

        it("renders <Colors />", () => expect(wrapper.find(MockColors)).to.have.length(1));

    });

});
