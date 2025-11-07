Defined in: [implementations/time-between-dates.ts:3](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-dates.ts#L3)

## Extends

- `TimeBetweenDatesBase`

## Constructors

### Constructor

```ts
new TimeBetweenDates(a, b): TimeBetweenDates;
```

Defined in: [implementations/time-between-dates.ts:6](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-dates.ts#L6)

#### Parameters

##### a

`Date`

##### b

`Date`

#### Returns

`TimeBetweenDates`

#### Overrides

```ts
TimeBetweenDatesBase.constructor;
```

## Accessors

### fromDate

#### Get Signature

```ts
get fromDate(): Date;
```

Defined in: [implementations/time-between-dates.ts:12](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-dates.ts#L12)

##### Returns

`Date`

#### Set Signature

```ts
set fromDate(a): void;
```

Defined in: [implementations/time-between-dates.ts:16](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-dates.ts#L16)

##### Parameters

###### a

`Date`

##### Returns

`void`

#### Overrides

```ts
TimeBetweenDatesBase.fromDate;
```

---

### toDate

#### Get Signature

```ts
get toDate(): Date;
```

Defined in: [implementations/time-between-dates.ts:20](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-dates.ts#L20)

##### Returns

`Date`

#### Set Signature

```ts
set toDate(b): void;
```

Defined in: [implementations/time-between-dates.ts:24](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-dates.ts#L24)

##### Parameters

###### b

`Date`

##### Returns

`void`

#### Overrides

```ts
TimeBetweenDatesBase.toDate;
```

## Methods

### \_getDays()

```ts
protected _getDays(time): number;
```

Defined in: [base/time.ts:30](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L30)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase._getDays;
```

---

### \_getHours()

```ts
protected _getHours(time): number;
```

Defined in: [base/time.ts:38](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L38)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase._getHours;
```

---

### \_getMilliseconds()

```ts
protected _getMilliseconds(time): number;
```

Defined in: [base/time.ts:62](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L62)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase._getMilliseconds;
```

---

### \_getMinutes()

```ts
protected _getMinutes(time): number;
```

Defined in: [base/time.ts:46](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L46)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase._getMinutes;
```

---

### \_getSeconds()

```ts
protected _getSeconds(time): number;
```

Defined in: [base/time.ts:54](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L54)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase._getSeconds;
```

---

### getAllTime()

```ts
getAllTime(): object;
```

Defined in: [base/time.ts:70](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L70)

#### Returns

`object`

##### days

```ts
days: number;
```

##### hours

```ts
hours: number;
```

##### milliseconds

```ts
milliseconds: number;
```

##### minutes

```ts
minutes: number;
```

##### seconds

```ts
seconds: number;
```

#### Inherited from

```ts
TimeBetweenDatesBase.getAllTime;
```

---

### getDays()

```ts
getDays(): number;
```

Defined in: [base/time.ts:34](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L34)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getDays;
```

---

### getHours()

```ts
getHours(): number;
```

Defined in: [base/time.ts:42](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L42)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getHours;
```

---

### getMilliseconds()

```ts
getMilliseconds(): number;
```

Defined in: [base/time.ts:66](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L66)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getMilliseconds;
```

---

### getMinutes()

```ts
getMinutes(): number;
```

Defined in: [base/time.ts:50](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L50)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getMinutes;
```

---

### getSeconds()

```ts
getSeconds(): number;
```

Defined in: [base/time.ts:58](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L58)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getSeconds;
```

---

### getTime()

```ts
getTime(): number;
```

Defined in: [base/time-between-dates-base.ts:12](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time-between-dates-base.ts#L12)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getTime;
```

---

### getTotalDays()

```ts
getTotalDays(): number;
```

Defined in: [base/time.ts:26](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L26)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getTotalDays;
```

---

### getTotalHours()

```ts
getTotalHours(): number;
```

Defined in: [base/time.ts:22](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L22)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getTotalHours;
```

---

### getTotalMilliseconds()

```ts
getTotalMilliseconds(): number;
```

Defined in: [base/time.ts:10](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L10)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getTotalMilliseconds;
```

---

### getTotalMinutes()

```ts
getTotalMinutes(): number;
```

Defined in: [base/time.ts:18](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L18)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getTotalMinutes;
```

---

### getTotalSeconds()

```ts
getTotalSeconds(): number;
```

Defined in: [base/time.ts:14](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/base/time.ts#L14)

#### Returns

`number`

#### Inherited from

```ts
TimeBetweenDatesBase.getTotalSeconds;
```
