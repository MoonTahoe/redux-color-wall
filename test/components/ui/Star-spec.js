import { expect } from 'chai';
import { shallow } from 'enzyme'
import { Star } from '../../../components/ui'
import { spy } from 'sinon'

describe("<Star /> UI Component", () => {

    let wrapper;

    it("renders default star", () => {
        wrapper = shallow(<Star />);
        expect(wrapper.find('div.star')).to.have.length(1);
    });

    it("renders selected stars", () => {
        wrapper = shallow(<Star selected={true} />);
        expect(wrapper.find('div.selected.star')).to.have.length(1);
    });

    it("click does not cause error", () => {
        wrapper = shallow(<Star selected={true} />);
        wrapper.find('div').simulate('click');
    });

    describe("clicking a star", () => {

        let _click;

        before(() => {
            _click = spy();
            wrapper = shallow(<Star onClick={_click} />);
            wrapper.find('.star').simulate('click');
        });

        it("invokes onClick", () => expect(_click.calledOnce).to.equal(true));

    });

});
