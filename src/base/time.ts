import { msToSecond, msToMinute, msToHour, msToDay } from "../constants";
import { type Duration } from "./duration";

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
        return Math.floor(time / msToDay);
    }

    public getDays() {
        return this._getDays(this.getTime());
    }

    protected _getHours(time: number) {
        const daysMs = this._getDays(time) * msToDay;
        return Math.floor((time - daysMs) / msToHour);
    }

    public getHours() {
        return this._getHours(this.getTime());
    }

    protected _getMinutes(time: number) {
        const daysMs = this._getDays(time) * msToDay;
        const hoursMs = this._getHours(time) * msToHour;
        return Math.floor((time - hoursMs - daysMs) / msToMinute);
    }

    public getMinutes() {
        return this._getMinutes(this.getTime());
    }

    protected _getSeconds(time: number) {
        const daysMs = this._getDays(time) * msToDay;
        const hoursMs = this._getHours(time) * msToHour;
        const minutesMs = this._getMinutes(time) * msToMinute;
        return Math.floor((time - minutesMs - hoursMs - daysMs) / msToSecond);
    }

    public getSeconds() {
        return this._getSeconds(this.getTime());
    }

    protected _getMilliseconds(time: number) {
        const daysMs = this._getDays(time) * msToDay;
        const hoursMs = this._getHours(time) * msToHour;
        const minutesMs = this._getMinutes(time) * msToMinute;
        const secondsMs = this._getSeconds(time) * msToSecond;
        return Math.floor(time - secondsMs - minutesMs - hoursMs - daysMs);
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
