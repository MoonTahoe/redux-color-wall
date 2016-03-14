import { max, pluck, sortBy } from '../../lib/array-helpers'
import { expect } from 'chai'

describe("Array Helpers", () => {

    describe("max", () => {

        it("finds the max number when there are numbers", () => expect(
            max([3, 12, null, 8, 'string'])
        ).to.equal(12));

        it("returns 0 in array of anything else", () => expect(
            max([true, null, undefined, 'string', {}])
        ).to.equal(0));

    });

    describe("pluck", () => {

        it("plucks items into separate array", () => expect(
            pluck("id", [
                {
                    id: 10,
                    color: 'red'
                },
                {
                    id: 22,
                    color: 'green'
                },
                {
                    id: 44,
                    color: 'blue'
                }
            ])
        ).to.deep.equal([10, 22, 44]));

    });

    describe("sortBy", () => {

        let arr;

        beforeEach(() => {
            arr = [
                {
                    title: "Virginia",
                    rating: 2,
                    timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
                },
                {
                    title: "Illinois",
                    rating: 5,
                    timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
                },
                {
                    title: "California",
                    rating: 0,
                    timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
                },
                {
                    title: "Maryland",
                    rating: 1,
                    timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
                }
            ];
        });

        it("sorts by title", () => {
            let sorted = arr.sort(sortBy('string', 'title'));
            expect(sorted).to.deep.equal([
                {
                    title: "California",
                    rating: 0,
                    timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
                },
                {
                    title: "Illinois",
                    rating: 5,
                    timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
                },
                {
                    title: "Maryland",
                    rating: 1,
                    timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
                },
                {
                    title: "Virginia",
                    rating: 2,
                    timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
                }
            ]);
        });

        it("sorts by rating", () => {
            let sorted = arr.sort(sortBy('number', 'rating'));
            expect(sorted).to.deep.equal([
                {
                    title: "Illinois",
                    rating: 5,
                    timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
                },
                {
                    title: "Virginia",
                    rating: 2,
                    timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
                },
                {
                    title: "Maryland",
                    rating: 1,
                    timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
                },
                {
                    title: "California",
                    rating: 0,
                    timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
                }
            ]);
        });

        it("sorts by date", () => {
            let sorted = arr.sort(sortBy('date', 'timestamp'));
            expect(sorted).to.deep.equal([
                {
                    title: "Maryland",
                    rating: 1,
                    timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
                },
                {
                    title: "Virginia",
                    rating: 2,
                    timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
                },
                {
                    title: "Illinois",
                    rating: 5,
                    timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
                },
                {
                    title: "California",
                    rating: 0,
                    timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
                }
            ]);

        });

    });

});