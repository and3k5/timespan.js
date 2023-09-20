const { expect } = require("chai");
const { TimeDuration } = require("../../dist");

describe("TimeDuration", () => {
    describe("positive values", () => {
        const time = new TimeDuration(150322053269);

        beforeEach(() => {
            time.setTotalMilliseconds(150322053269);
        });

        it("calculates total units properly", () => {
            expect(time.getTotalDays()).equals(1739.838579502314848, "total days");
            expect(time.getTotalHours()).equals(41756.125908055554, "total hours");
            expect(time.getTotalMinutes()).equals(2505367.554483333, "total minutes");
            expect(time.getTotalSeconds()).equals(150322053.269, "total seconds");
            expect(time.getTotalMilliseconds()).equals(150322053269, "total milliseconds");
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

        describe("can change", function () {
            describe("one day and return expected result", () => {
                beforeEach(() => {
                    expect(time.getDays()).equals(1739);
                    time.setDays(time.getDays() - 1);
                    expect(time.getDays()).equals(1738);
                });


                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(1738.8385795023148, "total days");
                    expect(time.getTotalHours()).equals(41732.125908055554, "total hours");
                    expect(time.getTotalMinutes()).equals(2503927.5544833333, "total minutes");
                    expect(time.getTotalSeconds()).equals(150235653.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(150235653269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(1738, "days");
                    expect(time.getHours()).equals(20, "hours");
                    expect(time.getMinutes()).equals(7, "minutes");
                    expect(time.getSeconds()).equals(33, "seconds");
                    expect(time.getMilliseconds()).equals(269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(1738, "days");
                    expect(timeObj.hours).equals(20, "hours");
                    expect(timeObj.minutes).equals(7, "minutes");
                    expect(timeObj.seconds).equals(33, "seconds");
                    expect(timeObj.milliseconds).equals(269, "milliseconds");
                });
            });

            describe("one hour and return expected result", () => {
                beforeEach(() => {
                    expect(time.getHours()).equals(20);
                    time.setHours(time.getHours() - 1);
                    expect(time.getHours()).equals(19);
                });

                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(1739.796912835648, "total days");
                    expect(time.getTotalHours()).equals(41755.125908055554, "total hours");
                    expect(time.getTotalMinutes()).equals(2505307.554483333, "total minutes");
                    expect(time.getTotalSeconds()).equals(150318453.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(150318453269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(1739, "days");
                    expect(time.getHours()).equals(19, "hours");
                    expect(time.getMinutes()).equals(7, "minutes");
                    expect(time.getSeconds()).equals(33, "seconds");
                    expect(time.getMilliseconds()).equals(269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(1739, "days");
                    expect(timeObj.hours).equals(19, "hours");
                    expect(timeObj.minutes).equals(7, "minutes");
                    expect(timeObj.seconds).equals(33, "seconds");
                    expect(timeObj.milliseconds).equals(269, "milliseconds");
                });
            });

            describe("one minute and return expected result", () => {
                beforeEach(() => {
                    expect(time.getMinutes()).equals(7);
                    time.setMinutes(time.getMinutes() - 1);
                    expect(time.getMinutes()).equals(6);
                });

                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(1739.8378850578704, "total days");
                    expect(time.getTotalHours()).equals(41756.10924138889, "total hours");
                    expect(time.getTotalMinutes()).equals(2505366.554483333, "total minutes");
                    expect(time.getTotalSeconds()).equals(150321993.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(150321993269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(1739, "days");
                    expect(time.getHours()).equals(20, "hours");
                    expect(time.getMinutes()).equals(6, "minutes");
                    expect(time.getSeconds()).equals(33, "seconds");
                    expect(time.getMilliseconds()).equals(269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(1739, "days");
                    expect(timeObj.hours).equals(20, "hours");
                    expect(timeObj.minutes).equals(6, "minutes");
                    expect(timeObj.seconds).equals(33, "seconds");
                    expect(timeObj.milliseconds).equals(269, "milliseconds");
                });
            });

            describe("one second and return expected result", () => {
                beforeEach(() => {
                    expect(time.getSeconds()).equals(33);
                    time.setSeconds(time.getSeconds() - 1);
                    expect(time.getSeconds()).equals(32);
                });


                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(1739.8385679282408, "total days");
                    expect(time.getTotalHours()).equals(41756.12563027778, "total hours");
                    expect(time.getTotalMinutes()).equals(2505367.5378166665, "total minutes");
                    expect(time.getTotalSeconds()).equals(150322052.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(150322052269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(1739, "days");
                    expect(time.getHours()).equals(20, "hours");
                    expect(time.getMinutes()).equals(7, "minutes");
                    expect(time.getSeconds()).equals(32, "seconds");
                    expect(time.getMilliseconds()).equals(269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(1739, "days");
                    expect(timeObj.hours).equals(20, "hours");
                    expect(timeObj.minutes).equals(7, "minutes");
                    expect(timeObj.seconds).equals(32, "seconds");
                    expect(timeObj.milliseconds).equals(269, "milliseconds");
                });
            });
        });

    });

    describe("negative values", () => {
        const time = new TimeDuration(-150322053269);

        beforeEach(() => {
            time.setTotalMilliseconds(-150322053269);
        });

        it("calculates total units properly", () => {
            expect(time.getTotalDays()).equals(-1739.838579502314848, "total days");
            expect(time.getTotalHours()).equals(-41756.125908055554, "total hours");
            expect(time.getTotalMinutes()).equals(-2505367.554483333, "total minutes");
            expect(time.getTotalSeconds()).equals(-150322053.269, "total seconds");
            expect(time.getTotalMilliseconds()).equals(-150322053269, "total milliseconds");
        });

        it("calculates allTime object properly", () => {
            const timeObj = time.getAllTime();

            expect(timeObj.days).equals(-1739, "days");
            expect(timeObj.hours).equals(-20, "hours");
            expect(timeObj.minutes).equals(-7, "minutes");
            expect(timeObj.seconds).equals(-33, "seconds");
            expect(timeObj.milliseconds).equals(-269, "milliseconds");
        });

        it("calculates units properly", () => {
            expect(time.getDays()).equals(-1739, "days");
            expect(time.getHours()).equals(-20, "hours");
            expect(time.getMinutes()).equals(-7, "minutes");
            expect(time.getSeconds()).equals(-33, "seconds");
            expect(time.getMilliseconds()).equals(-269, "milliseconds");
        });

        describe("can change", function () {
            describe("one day and return expected result", () => {
                beforeEach(() => {
                    expect(time.getDays()).equals(-1739);
                    time.setDays(time.getDays() + 1);
                    expect(time.getDays()).equals(-1738);
                });


                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(-1738.8385795023148, "total days");
                    expect(time.getTotalHours()).equals(-41732.125908055554, "total hours");
                    expect(time.getTotalMinutes()).equals(-2503927.5544833333, "total minutes");
                    expect(time.getTotalSeconds()).equals(-150235653.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(-150235653269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(-1738, "days");
                    expect(time.getHours()).equals(-20, "hours");
                    expect(time.getMinutes()).equals(-7, "minutes");
                    expect(time.getSeconds()).equals(-33, "seconds");
                    expect(time.getMilliseconds()).equals(-269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(-1738, "days");
                    expect(timeObj.hours).equals(-20, "hours");
                    expect(timeObj.minutes).equals(-7, "minutes");
                    expect(timeObj.seconds).equals(-33, "seconds");
                    expect(timeObj.milliseconds).equals(-269, "milliseconds");
                });
            });

            describe("one hour and return expected result", () => {
                beforeEach(() => {
                    expect(time.getHours()).equals(-20);
                    time.setHours(time.getHours() + 1);
                    expect(time.getHours()).equals(-19);
                });

                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(-1739.796912835648, "total days");
                    expect(time.getTotalHours()).equals(-41755.125908055554, "total hours");
                    expect(time.getTotalMinutes()).equals(-2505307.554483333, "total minutes");
                    expect(time.getTotalSeconds()).equals(-150318453.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(-150318453269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(-1739, "days");
                    expect(time.getHours()).equals(-19, "hours");
                    expect(time.getMinutes()).equals(-7, "minutes");
                    expect(time.getSeconds()).equals(-33, "seconds");
                    expect(time.getMilliseconds()).equals(-269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(-1739, "days");
                    expect(timeObj.hours).equals(-19, "hours");
                    expect(timeObj.minutes).equals(-7, "minutes");
                    expect(timeObj.seconds).equals(-33, "seconds");
                    expect(timeObj.milliseconds).equals(-269, "milliseconds");
                });
            });

            describe("one minute and return expected result", () => {
                beforeEach(() => {
                    expect(time.getMinutes()).equals(-7);
                    time.setMinutes(time.getMinutes() + 1);
                    expect(time.getMinutes()).equals(-6);
                });

                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(-1739.8378850578704, "total days");
                    expect(time.getTotalHours()).equals(-41756.10924138889, "total hours");
                    expect(time.getTotalMinutes()).equals(-2505366.554483333, "total minutes");
                    expect(time.getTotalSeconds()).equals(-150321993.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(-150321993269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(-1739, "days");
                    expect(time.getHours()).equals(-20, "hours");
                    expect(time.getMinutes()).equals(-6, "minutes");
                    expect(time.getSeconds()).equals(-33, "seconds");
                    expect(time.getMilliseconds()).equals(-269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(-1739, "days");
                    expect(timeObj.hours).equals(-20, "hours");
                    expect(timeObj.minutes).equals(-6, "minutes");
                    expect(timeObj.seconds).equals(-33, "seconds");
                    expect(timeObj.milliseconds).equals(-269, "milliseconds");
                });
            });

            describe("one second and return expected result", () => {
                beforeEach(() => {
                    expect(time.getSeconds()).equals(-33);
                    time.setSeconds(time.getSeconds() + 1);
                    expect(time.getSeconds()).equals(-32);
                });


                it("and returns total units properly", function () {
                    expect(time.getTotalDays()).equals(-1739.8385679282408, "total days");
                    expect(time.getTotalHours()).equals(-41756.12563027778, "total hours");
                    expect(time.getTotalMinutes()).equals(-2505367.5378166665, "total minutes");
                    expect(time.getTotalSeconds()).equals(-150322052.269, "total seconds");
                    expect(time.getTotalMilliseconds()).equals(-150322052269, "total milliseconds");
                })

                it("calculates units properly", () => {
                    expect(time.getDays()).equals(-1739, "days");
                    expect(time.getHours()).equals(-20, "hours");
                    expect(time.getMinutes()).equals(-7, "minutes");
                    expect(time.getSeconds()).equals(-32, "seconds");
                    expect(time.getMilliseconds()).equals(-269, "milliseconds");
                });

                it("calculates allTime object properly", () => {
                    const timeObj = time.getAllTime();

                    expect(timeObj.days).equals(-1739, "days");
                    expect(timeObj.hours).equals(-20, "hours");
                    expect(timeObj.minutes).equals(-7, "minutes");
                    expect(timeObj.seconds).equals(-32, "seconds");
                    expect(timeObj.milliseconds).equals(-269, "milliseconds");
                });
            });
        });

    });

})