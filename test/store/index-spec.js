import C from '../../constants'
import rewire from 'rewire'
import { spy, assert } from 'sinon'

let setupStore = rewire('../../store');

describe("Store", () => {

    let store, console, initialState;

    before(() => {
        console = {
            group: spy(),
            log: spy(),
            groupEnd: spy()
        };
        initialState = {
            colors: [
                {
                    id: 0,
                    title: "Rad Red",
                    color: "#FF0000",
                    rating: 3,
                    timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                }
            ]
        };
        setupStore.__set__("console", console);
        setupStore.__set__("initialState", initialState);
    });

    afterEach(() => {
        store = null;
        console.log.reset();
        console.group.reset();
        console.groupEnd.reset();
    });

    describe("Logging", () => {

        beforeEach(() => {
            store = setupStore(true);
            store.dispatch({type: C.REMOVE_COLOR, id: 0});
        });

        it("starts a console group", () => assert.calledOnce(console.group));
        it("logs three console items", () => assert.calledThrice(console.log));
        it("ends the console group", () => assert.calledOnce(console.groupEnd));

    });

    describe("Does not log", () => {

        beforeEach(() => {
            store = setupStore();
            store.dispatch({type: C.REMOVE_COLOR, id: 0});
        });

        it("starts a console group", () => assert.callCount(console.group, 0));
        it("logs three console items", () => assert.callCount(console.log, 0));
        it("ends the console group", () => assert.callCount(console.groupEnd, 0));

    });

});