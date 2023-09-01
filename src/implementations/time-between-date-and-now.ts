import { TimeBetweenDatesBase } from "../base/time-between-dates-base";

export class TimeBetweenDateAndNow extends TimeBetweenDatesBase {
    private date: Date;
    constructor(date: Date) {
        super();
        this.date = date;
    }

    get fromDate(): Date {
        return new Date();
    }

    get toDate(): Date {
        return this.date;
    }

    set toDate(date: Date) {
        this.date = date;
    }
}
