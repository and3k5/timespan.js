export interface Duration {
    getTotalMilliseconds: () => number;
    getTotalSeconds: () => number;
    getTotalMinutes: () => number;
    getTotalHours: () => number;
    getTotalDays: () => number;
}
