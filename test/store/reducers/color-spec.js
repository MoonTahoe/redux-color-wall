import C from '../../../constants'
import { color } from '../../../store/reducers'
import deepFreeze from 'deep-freeze'
import { expect } from 'chai'

describe("color Reducer", () => {

    it("ADD_COLOR success", () => {
        const state = {};
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: new Date().toString()
        };
        deepFreeze(state);
        deepFreeze(action);
        expect(color(state, action)).to.deep.equal({
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: action.timestamp,
            rating: undefined
        });
    });

    it("RATE_COLOR success", () => {
        const state = {
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: undefined
        };
        const action = {
            type: C.RATE_COLOR,
            rating: 3
        };
        deepFreeze(state);
        deepFreeze(action);
        expect(color(state, action)).to.deep.equal({
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: 3
        });
    });

    it("Defaults state for incorrect action", () => {
        const state = {};
        const action = { type: "NOT_DEFINED"};
        expect(color(state, action)).to.deep.equal({});
    })

});
