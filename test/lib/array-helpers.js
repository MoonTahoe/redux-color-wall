import { max, pluck } from '../../lib/array-helpers'
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

});