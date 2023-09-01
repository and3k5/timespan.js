import { Time } from "../base/time";
import { msToSecond, msToMinute, msToHour, msToDay } from "../constants";

export class TimeDuration extends Time {
    private milliseconds: number;
    constructor(milliseconds: number) {
        super();
        this.milliseconds = milliseconds;
    }

    getTime(): number {
        return this.milliseconds;
    }

    private setTime(milliseconds: number) {
        return (this.milliseconds = milliseconds);
    }

    setTotalMilliseconds(ms: number) {
        this.setTime(ms);
    }

    setTotalSeconds(secs: number) {
        this.setTime(secs * msToSecond);
    }

    setTotalMinutes(mins: number) {
        this.setTime(mins * msToMinute);
    }

    setTotalHours(hours: number) {
        this.setTime(hours * msToHour);
    }

    setTotalDays(days: number) {
        this.setTime(days * msToDay);
    }

    private _setDays(days: number, time: number) {
        return time - this._getDays(time) * msToDay + days * msToDay;
    }

    public setDays(days: number) {
        this.setTime(this._setDays(days, this.getTime()));
    }

    private _setHours(hours: number, time: number) {
        return time - this._getHours(time) * msToHour + hours * msToHour;
    }

    public setHours(hours: number) {
        this.setTime(this._setHours(hours, this.getTime()));
    }

    private _setMinutes(minutes: number, time: number) {
        return (
            time - this._getMinutes(time) * msToMinute + minutes * msToMinute
        );
    }

    public setMinutes(minutes: number) {
        this.setTime(this._setMinutes(minutes, this.getTime()));
    }

    private _setSeconds(seconds: number, time: number) {
        return (
            time - this._getSeconds(time) * msToSecond + seconds * msToSecond
        );
    }

    public setSeconds(seconds: number) {
        this.setTime(this._setSeconds(seconds, this.getTime()));
    }

    private _setMilliseconds(milliseconds: number, time: number) {
        return time - this._getMilliseconds(time) + milliseconds;
    }

    public setMilliseconds(milliseconds: number) {
        this.setTime(this._setMilliseconds(milliseconds, this.getTime()));
    }

    public setAllTime(
        obj: {
            days: null;
            hours: null;
            minutes: null;
            seconds: null;
            milliseconds: null;
        },
        reset: boolean,
    ) {
        if (reset) this.setTime(0);

        let t = this.getTime();

        if (obj.days != null) t = this._setDays(obj.days, t);
        if (obj.hours != null) t = this._setHours(obj.hours, t);
        if (obj.minutes != null) t = this._setMinutes(obj.minutes, t);
        if (obj.seconds != null) t = this._setSeconds(obj.seconds, t);
        if (obj.milliseconds != null)
            t = this._setMilliseconds(obj.milliseconds, t);

        return this.setTime(t);
    }
}
