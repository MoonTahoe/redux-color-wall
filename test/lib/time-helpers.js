import { ago } from '../../lib/time-helpers'
import { expect } from 'chai'

describe("Time Helpers", () => {

    describe("ago", () => {

        it("less than a minute", () => {
            const now = 'Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)';
            const timestamp = 'Thu Mar 17 2016 18:42:50 GMT-0700 (PDT)';
            expect(ago(timestamp, now)).to.equal("less than a minute")
        });

        it("5 minutes", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)';
            const timestamp = 'Thu Mar 17 2016 18:40:08 GMT-0700 (PDT)';
            expect(ago(timestamp, now)).to.equal("5 minutes");
        });

        it("2 hours", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)';
            const timestamp = 'Thu Mar 17 2016 16:45:08 GMT-0700 (PDT)';
            expect(ago(timestamp, now)).to.equal("2 hours");
        });

        it("1 day", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)';
            const timestamp = 'Wed Mar 16 2016 16:00:00 GMT-0700 (PDT)';
            expect(ago(timestamp, now)).to.equal("1 day");
        });

        it("5 days", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)';
            const timestamp = 'Sat Mar 12 2016 16:40:08 GMT-0700 (PDT)';
            expect(ago(timestamp, now)).to.equal("5 days");
        });

        it("over a month", () => {
            const now = 'Thu Mar 17 2016 18:45:08 GMT-0700 (PDT)';
            const timestamp = 'Thu Feb 11 2016 15:40:08 GMT-0700 (PDT)';
            expect(ago(timestamp, now)).to.equal("2/11/2016");
        });

        it("years ago", () => {
            const timestamp = 'Thu May 17 2012 15:40:08 GMT-0700 (PDT)';
            expect(ago(timestamp)).to.be.ok;
        });

    });

});