import { expect, describe, it } from "vitest";
import { TimeBetweenDates } from "../time-between-dates";

describe("TimeBetweenDates", () => {
    const d1 = new Date("2015-04-05T13:24:45.4120000Z");
    const d2 = new Date("2020-01-09T09:32:18.6810000Z");

    const time = new TimeBetweenDates(d1, d2);

    it("calculates total units properly", () => {
        expect(time.getTotalDays()).equals(1739.8385795023148, "total days");
        expect(time.getTotalHours()).equals(41756.125908055554, "total hours");
        expect(time.getTotalMinutes()).equals(
            2505367.554483333,
            "total minutes",
        );
        expect(time.getTotalSeconds()).equals(150322053.269, "total seconds");
        expect(time.getTotalMilliseconds()).equals(
            150322053269,
            "total milliseconds",
        );
    });

    it("calculates allTime object properly", () => {
        const timeObj = time.getAllTime();

        expect(timeObj.days).equals(1739, "days");
        expect(timeObj.hours).equals(20, "hours");
        expect(timeObj.minutes).equals(7, "minutes");
        expect(timeObj.seconds).equals(33, "seconds");
        expect(timeObj.milliseconds).equals(269, "milliseconds");
    });

    it("calculates units properly", () => {
        expect(time.getDays()).equals(1739, "days");
        expect(time.getHours()).equals(20, "hours");
        expect(time.getMinutes()).equals(7, "minutes");
        expect(time.getSeconds()).equals(33, "seconds");
        expect(time.getMilliseconds()).equals(269, "milliseconds");
    });
});
