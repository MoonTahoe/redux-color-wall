import { expect } from 'chai'
import { mount } from 'enzyme'
import { AddColor } from '../../../components/containers'
import { spy, stub } from 'sinon'
import { Provider } from 'react-redux'

describe("<AddColor /> Container", () => {

    let result,
        _addColor = stub().returns('success'),
        _dispatch = spy(),
        mapDispatchToProps;

    before(() => {
        AddColor.__Rewire__('addColor', _addColor);
        mapDispatchToProps = AddColor.__get__('mapDispatchToProps')
    });

    describe("mapping dispatch to props", () => {

        before(() => {
            result = mapDispatchToProps(_dispatch);
            result.onAddColor('#FFFFFF', 'bright-white');
        });

        it("invokes dispatch", () => expect(_dispatch.calledOnce).to.equal(true));

        it("invokes addColor", () => expect(_addColor.calledOnce).to.equal(true));

        it("invokes addColor with correct data", () => expect(_dispatch.args[0].join()).to.equal('success'));

        it("invokes dispatch with correct data", () => expect(_addColor.args.join()).to.equal("#FFFFFF,bright-white"));

    });

});
