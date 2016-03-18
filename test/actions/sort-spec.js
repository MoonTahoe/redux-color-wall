import C from '../../constants'
import storeFactory from '../../store'
import { sortColors } from '../../actions'
import { expect } from 'chai'

describe("Action Creators - sorting", () => {

    let store;

    before(() => {
        store = storeFactory(false);
    });

    it("can dispatch sort colors", () => {
        store.dispatch(sortColors(C.SORTED_BY_RATING));
        expect(store.getState().sort).to.equal(C.SORTED_BY_RATING);
    });

    it("can sort by title", () => {
        store.dispatch(sortColors(C.SORTED_BY_TITLE));
        expect(store.getState().sort).to.equal(C.SORTED_BY_TITLE);
    });

    it("(default) sorts colors by date", () => {
        store.dispatch(sortColors());
        expect(store.getState().sort).to.equal(C.SORTED_BY_DATE);
    });

});