import { expect } from 'chai'
import { shallow } from 'enzyme'
import { SortMenu } from '../../../components/ui'
import { spy } from 'sinon'

describe("<SortMenu /> UI Component", () => {

    let wrapper;

    describe("Rendering UI", () => {

        before(() => wrapper = shallow(<SortMenu />));

        it("renders a nav element", () => expect(wrapper.find("nav")).to.have.length(1));

        it("renders 3 links", () => expect(wrapper.find("a")).to.have.length(3));

        it("sorted by date is selected", () => expect(wrapper.find('a.selected').text()).to.equal('date'));

        it("selecting a menu item does not cause error", () => wrapper.find('a').first().simulate('click', { preventDefault: f=>f }));

    });

    describe("selecting a different sort", () => {

        let _select = spy();
        afterEach(() => _select.reset());

        it("invokes onSelect with the correct title", () => {
            wrapper = shallow(<SortMenu sort="SORTED_BY_DATE" onSelect={_select}/>);
            wrapper.find("nav").childAt(2).simulate('click', { preventDefault: f=>f });
            expect(_select.args.join()).to.equal("SORTED_BY_TITLE");
        });

        it("invokes onSelect with the correct date", () => {
            wrapper = shallow(<SortMenu sort="SORTED_BY_RATING" onSelect={_select}/>);
            wrapper.find("nav").childAt(1).simulate('click', { preventDefault: f=>f });
            expect(_select.args.join()).to.equal("SORTED_BY_DATE");
        });

        it("invokes onSelect with the correct rating", () => {
            wrapper = shallow(<SortMenu sort="SORTED_BY_TITLE" onSelect={_select}/>);
            wrapper.find("nav").childAt(3).simulate('click', { preventDefault: f=>f });
            expect(_select.args.join()).to.equal("SORTED_BY_RATING");
        });

    });

});
