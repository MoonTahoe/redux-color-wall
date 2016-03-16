import C from '../../constants'
import storeFactory from '../../store'
import { addColor, removeColor, rateColor } from '../../actions'
import { expect } from 'chai'

describe("Action Creators - colors", () => {

    let store, testColors;

    describe("Adding Colors", () => {

        before(() => {
            testColors = [
                {
                    id: 1,
                    title: "Rad Red",
                    color: "#FF0000",
                    rating: 3,
                    timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                },
                {
                    id: 5,
                    title: "Crazy Green",
                    color: "#00FF00",
                    rating: 0,
                    timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
                },
                {
                    id: 7,
                    title: "Big BLue",
                    color: "#0000FF",
                    rating: 5,
                    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
                }
            ];
            store = storeFactory(false, {colors: testColors});
            store.dispatch(addColor("#000033", "Dark Blue"));
        });

        it("should add a new color", () => expect(store.getState().colors.length).to.equal(4));

        it("should increment id", () => expect(store.getState().colors[3].id).to.equal(8));

        it("should set the rating to 0", () => expect(store.getState().colors[3].rating).to.equal(0));

        it("should set timestamp", () => expect(store.getState().colors[3].timestamp).to.be.ok);

    });

    describe("Removing Colors", () => {

        before(() => {
            testColors = [
                {
                    id: 22,
                    title: "Rad Red",
                    color: "#FF0000",
                    rating: 3,
                    timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                }
            ];
            store = storeFactory(false, {colors: testColors});
            store.dispatch(removeColor(22));
        });

        it("should remove the color", () => expect(store.getState().colors.length).to.equal(0));

    });

    describe("Rating Colors", () => {

        before(() => {
            testColors = [
                {
                    id: 22,
                    title: "Rad Red",
                    color: "#FF0000",
                    rating: 3,
                    timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                }
            ];
            store = storeFactory(false, {colors: testColors});
            store.dispatch(rateColor(22, 5));
        });

        it("should rate the color", () => expect(store.getState().colors[0].rating).to.equal(5));

    });

});