const { expect } = require("chai");
const { TimeBetweenDateAndNow } = require("../../dist");

describe("TimeBetweenDateAndNow", () => {

    const wait = (n) => new Promise((resolve, reject) => { setTimeout(resolve, n) });

    it("increases after each call", async function () {
        const d1 = new Date();
        const time = new TimeBetweenDateAndNow(d1);


        const totalMs1 = time.getTotalMilliseconds();
        await wait(300);
        const totalMs2 = time.getTotalMilliseconds();
        await wait(300);
        const totalMs3 = time.getTotalMilliseconds();

        expect(totalMs1 - totalMs2).to.be.greaterThan(200).and.lessThan(400);
        expect(totalMs2 - totalMs3).to.be.greaterThan(200).and.lessThan(400);
    });
});