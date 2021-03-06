import C from '../../../constants'
import { sort } from '../../../store/reducers'
import deepFreeze from 'deep-freeze'
import { expect } from 'chai'

describe("sort Reducer", () => {

    it("SORT_COLORS success", () => {
        const state = {};
        const action = {
            type: C.SORT_COLORS,
            sortBy: C.SORTED_BY_RATING
        };
        deepFreeze(state);
        deepFreeze(action);
        expect(sort(state, action)).to.equal(C.SORTED_BY_RATING);
    });

    it("defaults to SORTED_BY_DATE", () => expect(sort()).to.equal(C.SORTED_BY_DATE));

});
