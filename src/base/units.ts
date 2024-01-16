import { msToDay, msToHour, msToMinute, msToSecond } from "../constants";

type UnitKey = "day" | "hour" | "minute" | "second" | "millisecond";

export function getUnitValue(key: UnitKey, ms: number) {
    const negative = ms < 0;
    if (negative) {
        ms *= -1;
    }
    const multiplier = negative ? -1 : 1;

    const days = Math.floor(ms / msToDay);
    if (key === "day") return days * multiplier;
    ms -= days * msToDay;
    const hours = Math.floor(ms / msToHour);
    if (key === "hour") return hours * multiplier;
    ms -= hours * msToHour;
    const minutes = Math.floor(ms / msToMinute);
    if (key === "minute") return minutes * multiplier;
    ms -= minutes * msToMinute;
    const seconds = Math.floor(ms / msToSecond);
    if (key === "second") return seconds * multiplier;
    ms -= seconds * msToSecond;
    const milliseconds = Math.floor(ms / 1);
    if (key === "millisecond") return milliseconds * multiplier;

    throw new Error("Unknown unit");
}
