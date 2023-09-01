import { TimeBetweenDatesBase } from "../base/time-between-dates-base";

export class TimeBetweenDates extends TimeBetweenDatesBase {
    private dateA: Date;
    private dateB: Date;
    constructor(a: Date, b: Date) {
        super();
        this.dateA = a;
        this.dateB = b;
    }

    get fromDate(): Date {
        return this.dateA;
    }

    set fromDate(a: Date) {
        this.dateA = a;
    }

    get toDate(): Date {
        return this.dateB;
    }

    set toDate(b: Date) {
        this.dateB = b;
    }
}
