import { msToSecond, msToMinute, msToHour, msToDay } from "../constants";
import { type Duration } from "./duration";
import { getUnitValue } from "./units";

export abstract class Time implements Duration {
    getTime(): number {
        throw new Error("Missing implementation");
    }

    getTotalMilliseconds() {
        return this.getTime();
    }

    getTotalSeconds() {
        return this.getTime() / msToSecond;
    }

    getTotalMinutes() {
        return this.getTime() / msToMinute;
    }

    getTotalHours() {
        return this.getTime() / msToHour;
    }

    getTotalDays() {
        return this.getTime() / msToDay;
    }

    protected _getDays(time: number) {
        return getUnitValue("day", time);
    }

    public getDays() {
        return this._getDays(this.getTime());
    }

    protected _getHours(time: number) {
        return getUnitValue("hour", time);
    }

    public getHours() {
        return this._getHours(this.getTime());
    }

    protected _getMinutes(time: number) {
        return getUnitValue("minute", time);
    }

    public getMinutes() {
        return this._getMinutes(this.getTime());
    }

    protected _getSeconds(time: number) {
        return getUnitValue("second", time);
    }

    public getSeconds() {
        return this._getSeconds(this.getTime());
    }

    protected _getMilliseconds(time: number) {
        return getUnitValue("millisecond", time);
    }

    public getMilliseconds() {
        return this._getMilliseconds(this.getTime());
    }

    public getAllTime() {
        const t = this.getTime();
        return {
            days: this._getDays(t),
            hours: this._getHours(t),
            minutes: this._getMinutes(t),
            seconds: this._getSeconds(t),
            milliseconds: this._getMilliseconds(t),
        };
    }
}
