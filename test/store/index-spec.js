import C from '../../constants'
import rewire from 'rewire'
import { spy, assert } from 'sinon'

let storeFactory = rewire('../../store');

describe("Store Factory", () => {

    let store, console;

    before(() => {
        console = {
            group: spy(),
            log: spy(),
            groupEnd: spy()
        };
        storeFactory.__set__("console", console);
    });

    afterEach(() => {
        store = null;
        console.log.reset();
        console.group.reset();
        console.groupEnd.reset();
    });

    describe("Logging", () => {

        beforeEach(() => {
            store = storeFactory(true, {
                colors: [
                    {
                        id: 0,
                        title: "Rad Red",
                        color: "#FF0000",
                        rating: 3,
                        timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                    }
                ]
            });
            store.dispatch({type: C.REMOVE_COLOR, id: 0});
        });

        it("starts a console group", () => assert.calledOnce(console.group));
        it("logs three console items", () => assert.calledThrice(console.log));
        it("ends the console group", () => assert.calledOnce(console.groupEnd));

    });

    describe("Does not log", () => {

        beforeEach(() => {
            store = storeFactory();
            store.dispatch({type: C.REMOVE_COLOR, id: 0});
        });

        it("starts a console group", () => assert.callCount(console.group, 0));
        it("logs three console items", () => assert.callCount(console.log, 0));
        it("ends the console group", () => assert.callCount(console.groupEnd, 0));

    });

});