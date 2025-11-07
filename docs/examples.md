---
outline: deep
---

# Examples

Here are some examples on how it can be used

## Time between two dates

```typescript
import { TimeBetweenDates } from "@and3k5/timespan.js";

const d1 = new Date("2015-04-05T13:24:45.4120000Z");
const d2 = new Date("2020-01-09T09:32:18.6810000Z");

const time = new TimeBetweenDates(d1, d2);

console.log(time.getTotalDays()); // => 1739.8385795023148
```

## Time duration

```typescript
import { TimeBetweenDates } from "@and3k5/timespan.js";

const time = new TimeDuration(150322053269);

console.log(time.getTotalDays()); // => 1739.8385795023148
```

## Time between date and now

```typescript
import { TimeBetweenDates } from "@and3k5/timespan.js";

const d1 = new Date();
const time = new TimeBetweenDateAndNow(d1);

await wait(300);

console.log(time.getTotalMilliseconds()); // => 300 (roughly)
```
