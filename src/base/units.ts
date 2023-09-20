import { msToDay, msToHour, msToMinute, msToSecond } from "../constants";

type UnitKey = "day" | "hour" | "minute" | "second" | "millisecond";
interface Unit {
    type: UnitKey;
    property: `${UnitKey}s`;
    order: number;
    msToUnit: number;
}

const units: Unit[] = [
    {
        type: "day",
        property: "days",
        msToUnit: msToDay,
        order: 0,
    },
    {
        type: "hour",
        property: "hours",
        msToUnit: msToHour,
        order: 1,
    },
    {
        type: "minute",
        property: "minutes",
        msToUnit: msToMinute,
        order: 2,
    },
    {
        type: "second",
        property: "seconds",
        msToUnit: msToSecond,
        order: 3,
    },
    {
        type: "millisecond",
        property: "milliseconds",
        msToUnit: 1,
        order: 4,
    },
];

type UnitItem = (typeof units)[number];

export function getUnitValue(keyOrUnit: UnitItem["type"] | Unit, ms: number) {
    const negative = ms < 0;
    if (negative) {
        ms *= -1;
    }
    const unit =
        typeof keyOrUnit === "string"
            ? units.find((x) => x.type === keyOrUnit)
            : keyOrUnit;
    if (unit == null) throw new Error("could not find unit");
    const biggerUnits = units
        .filter((x) => x.order < unit.order)
        .sort((a, b) => a.order - b.order);

    let unitValueInMs = Math.floor(ms / unit.msToUnit) * unit.msToUnit;

    for (const biggerUnit of biggerUnits) {
        unitValueInMs -=
            getUnitValue(biggerUnit.type, ms) * biggerUnit.msToUnit;
    }

    const resultValue = Math.floor(unitValueInMs / unit.msToUnit);
    if (negative) {
        return resultValue * -1;
    }
    return resultValue;
}
