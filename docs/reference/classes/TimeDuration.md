Defined in: [implementations/time-duration.ts:4](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L4)

## Extends

- `Time`

## Constructors

### Constructor

```ts
new TimeDuration(milliseconds): TimeDuration;
```

Defined in: [implementations/time-duration.ts:6](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L6)

#### Parameters

##### milliseconds

`number`

#### Returns

`TimeDuration`

#### Overrides

```ts
Time.constructor;
```

## Methods

### \_getDays()

```ts
protected _getDays(time): number;
```

Defined in: [base/time.ts:30](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L30)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
Time._getDays;
```

---

### \_getHours()

```ts
protected _getHours(time): number;
```

Defined in: [base/time.ts:38](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L38)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
Time._getHours;
```

---

### \_getMilliseconds()

```ts
protected _getMilliseconds(time): number;
```

Defined in: [base/time.ts:62](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L62)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
Time._getMilliseconds;
```

---

### \_getMinutes()

```ts
protected _getMinutes(time): number;
```

Defined in: [base/time.ts:46](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L46)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
Time._getMinutes;
```

---

### \_getSeconds()

```ts
protected _getSeconds(time): number;
```

Defined in: [base/time.ts:54](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L54)

#### Parameters

##### time

`number`

#### Returns

`number`

#### Inherited from

```ts
Time._getSeconds;
```

---

### getAllTime()

```ts
getAllTime(): object;
```

Defined in: [base/time.ts:70](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L70)

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
Time.getAllTime;
```

---

### getDays()

```ts
getDays(): number;
```

Defined in: [base/time.ts:34](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L34)

#### Returns

`number`

#### Inherited from

```ts
Time.getDays;
```

---

### getHours()

```ts
getHours(): number;
```

Defined in: [base/time.ts:42](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L42)

#### Returns

`number`

#### Inherited from

```ts
Time.getHours;
```

---

### getMilliseconds()

```ts
getMilliseconds(): number;
```

Defined in: [base/time.ts:66](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L66)

#### Returns

`number`

#### Inherited from

```ts
Time.getMilliseconds;
```

---

### getMinutes()

```ts
getMinutes(): number;
```

Defined in: [base/time.ts:50](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L50)

#### Returns

`number`

#### Inherited from

```ts
Time.getMinutes;
```

---

### getSeconds()

```ts
getSeconds(): number;
```

Defined in: [base/time.ts:58](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L58)

#### Returns

`number`

#### Inherited from

```ts
Time.getSeconds;
```

---

### getTime()

```ts
getTime(): number;
```

Defined in: [implementations/time-duration.ts:11](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L11)

#### Returns

`number`

#### Overrides

```ts
Time.getTime;
```

---

### getTotalDays()

```ts
getTotalDays(): number;
```

Defined in: [base/time.ts:26](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L26)

#### Returns

`number`

#### Inherited from

```ts
Time.getTotalDays;
```

---

### getTotalHours()

```ts
getTotalHours(): number;
```

Defined in: [base/time.ts:22](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L22)

#### Returns

`number`

#### Inherited from

```ts
Time.getTotalHours;
```

---

### getTotalMilliseconds()

```ts
getTotalMilliseconds(): number;
```

Defined in: [base/time.ts:10](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L10)

#### Returns

`number`

#### Inherited from

```ts
Time.getTotalMilliseconds;
```

---

### getTotalMinutes()

```ts
getTotalMinutes(): number;
```

Defined in: [base/time.ts:18](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L18)

#### Returns

`number`

#### Inherited from

```ts
Time.getTotalMinutes;
```

---

### getTotalSeconds()

```ts
getTotalSeconds(): number;
```

Defined in: [base/time.ts:14](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/base/time.ts#L14)

#### Returns

`number`

#### Inherited from

```ts
Time.getTotalSeconds;
```

---

### setAllTime()

```ts
setAllTime(obj, reset): number;
```

Defined in: [implementations/time-duration.ts:83](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L83)

#### Parameters

##### obj

###### days

`null`

###### hours

`null`

###### milliseconds

`null`

###### minutes

`null`

###### seconds

`null`

##### reset

`boolean`

#### Returns

`number`

---

### setDays()

```ts
setDays(days): void;
```

Defined in: [implementations/time-duration.ts:43](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L43)

#### Parameters

##### days

`number`

#### Returns

`void`

---

### setHours()

```ts
setHours(hours): void;
```

Defined in: [implementations/time-duration.ts:51](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L51)

#### Parameters

##### hours

`number`

#### Returns

`void`

---

### setMilliseconds()

```ts
setMilliseconds(milliseconds): void;
```

Defined in: [implementations/time-duration.ts:79](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L79)

#### Parameters

##### milliseconds

`number`

#### Returns

`void`

---

### setMinutes()

```ts
setMinutes(minutes): void;
```

Defined in: [implementations/time-duration.ts:61](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L61)

#### Parameters

##### minutes

`number`

#### Returns

`void`

---

### setSeconds()

```ts
setSeconds(seconds): void;
```

Defined in: [implementations/time-duration.ts:71](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L71)

#### Parameters

##### seconds

`number`

#### Returns

`void`

---

### setTotalDays()

```ts
setTotalDays(days): void;
```

Defined in: [implementations/time-duration.ts:35](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L35)

#### Parameters

##### days

`number`

#### Returns

`void`

---

### setTotalHours()

```ts
setTotalHours(hours): void;
```

Defined in: [implementations/time-duration.ts:31](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L31)

#### Parameters

##### hours

`number`

#### Returns

`void`

---

### setTotalMilliseconds()

```ts
setTotalMilliseconds(ms): void;
```

Defined in: [implementations/time-duration.ts:19](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L19)

#### Parameters

##### ms

`number`

#### Returns

`void`

---

### setTotalMinutes()

```ts
setTotalMinutes(mins): void;
```

Defined in: [implementations/time-duration.ts:27](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L27)

#### Parameters

##### mins

`number`

#### Returns

`void`

---

### setTotalSeconds()

```ts
setTotalSeconds(secs): void;
```

Defined in: [implementations/time-duration.ts:23](https://github.com/and3k5/timespan.js/blob/6a5b3abdd23f060244360af2e30fdeafac7d3264/src/implementations/time-duration.ts#L23)

#### Parameters

##### secs

`number`

#### Returns

`void`
