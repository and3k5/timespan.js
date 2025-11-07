Defined in: [implementations/time-between-date-and-now.ts:3](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-date-and-now.ts#L3)

## Extends

- `TimeBetweenDatesBase`

## Constructors

### Constructor

```ts
new TimeBetweenDateAndNow(date): TimeBetweenDateAndNow;
```

Defined in: [implementations/time-between-date-and-now.ts:5](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-date-and-now.ts#L5)

#### Parameters

##### date

`Date`

#### Returns

`TimeBetweenDateAndNow`

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

Defined in: [implementations/time-between-date-and-now.ts:10](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-date-and-now.ts#L10)

##### Returns

`Date`

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

Defined in: [implementations/time-between-date-and-now.ts:14](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-date-and-now.ts#L14)

##### Returns

`Date`

#### Set Signature

```ts
set toDate(date): void;
```

Defined in: [implementations/time-between-date-and-now.ts:18](https://github.com/and3k5/timespan.js/blob/d46ec71a8267dcc5b869467ba5bd26748806811f/src/implementations/time-between-date-and-now.ts#L18)

##### Parameters

###### date

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
