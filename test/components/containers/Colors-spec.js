import { expect } from 'chai'
import { mount } from 'enzyme'
import { Colors } from '../../../components/containers'
import { spy, stub } from 'sinon'

describe("<Colors /> Container", () => {

    let result,
        _removeColor = stub().returns('success'),
        _rateColor = stub().returns('success'),
        _dispatch = spy(),
        mapStateToProps,
        mapDispatchToProps,
        testColors = [
            {
                id: 1,
                title: "lawn",
                color: "#44ef37",
                timestamp: "Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)",
                rating: 4
            },
            {
                id: 3,
                title: "tomato",
                color: "#ff4b47",
                timestamp: "Mon Apr 11 2016 12:54:43 GMT-0700 (PDT)",
                rating: 0
            },
            {
                id: 2,
                title: "ocean blue",
                color: "#0061ff",
                timestamp: "Mon Apr 11 2016 12:54:31 GMT-0700 (PDT)",
                rating: 2
            }
        ];

    before(() => {
        Colors.__Rewire__('removeColor', _removeColor);
        Colors.__Rewire__('rateColor', _rateColor);
        mapStateToProps = Colors.__get__('mapStateToProps');
        mapDispatchToProps = Colors.__get__('mapDispatchToProps');
    });

    describe("mapping state to props", () => {

        it("sorts colors by title", () => {
            result = mapStateToProps({colors: testColors, sort: "SORTED_BY_TITLE"});
            expect(result.colors.map(x=>x.title).join(", ")).to.equal("lawn, ocean blue, tomato");
        });

        it("sorts colors by rating", () => {
            result = mapStateToProps({colors: testColors, sort: "SORTED_BY_RATING"});
            expect(result.colors.map(x=>x.rating).join("-")).to.equal("4-2-0");
        });

        it("sorts colors by date", () => {
            result = mapStateToProps({colors: testColors});
            expect(result.colors.map(x=>x.id).join("-")).to.equal("3-2-1");
        });

    });

    describe("mapping dispatch to props", () => {

        before(() => {
            result = mapDispatchToProps(_dispatch);
            result.onRemove(3);
            result.onRate(3, 0);
        });

        it("invokes dispatch", () => expect(_dispatch.calledTwice).to.equal(true));

        it("invokes rateColor", () => expect(_rateColor.calledOnce).to.equal(true));

        it("invokes removeColor", () => expect(_removeColor.calledOnce).to.equal(true));

        it("invokes dispatch with correct data", () => expect(_dispatch.args.join()).to.equal('success,success'));

        it("invokes rateColor with correct data", () => expect(_rateColor.args.join()).to.equal("3,0"));

        it("invokes removeColor with correct data", () => expect(_removeColor.args.join()).to.equal("3"));

    });

});
