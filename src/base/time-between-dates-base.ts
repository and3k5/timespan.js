import { Time } from "./time";

export abstract class TimeBetweenDatesBase extends Time {
    get fromDate(): Date {
        throw new Error("Missing implementation");
    }

    get toDate(): Date {
        throw new Error("Missing implementation");
    }

    getTime() {
        return this.toDate.getTime() - this.fromDate.getTime();
    }
}
