import { expect } from 'chai'
import { mount } from 'enzyme'
import { Menu } from '../../../components/containers'
import { spy, stub } from 'sinon'

describe("<Menu /> Container", () => {

    let result,
        _sortColors = stub().returns('success'),
        _dispatch = spy(),
        mapStateToProps,
        mapDispatchToProps;

    before(() => {
        Menu.__Rewire__('sortColors', _sortColors);
        mapStateToProps = Menu.__get__('mapStateToProps');
        mapDispatchToProps = Menu.__get__('mapDispatchToProps');
    });

    describe("mapping state to props", () => {

        before(() => {
            result = mapStateToProps({sort: 'title'});
        });

        it("maps the correct sort", () => expect(result.sort).to.equal('title'));

    });

    describe("mapping dispatch to props", () => {

        before(() => {
            result = mapDispatchToProps(_dispatch);
            result.onSelect('title');
        });

        it("invokes dispatch", () => expect(_dispatch.calledOnce).to.equal(true));

        it("invokes sortColors", () => expect(_sortColors.calledOnce).to.equal(true));

        it("invokes dispatch with correct data", () => expect(_dispatch.args[0].join()).to.equal('success'));

        it("invokes sortColors with correct data", () => expect(_sortColors.args.join()).to.equal("title"));

    });

});
