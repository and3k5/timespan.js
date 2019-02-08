(function (self) {
    var timeSpan = function () {
        var _time = 0;
        var _timeType = 0; // 0 = static, 1 = get difference from two dates (null means now)
        var _dateA = null;
        var _dateB = null;

        var time = function () {
            if (arguments.length === 0) {
                // get
                if (_timeType === 0)
                    return _time;
                if (_timeType === 1)
                    return (_dateB || new Date()).getTime() - (_dateA || new Date()).getTime();
                throw new Error("Unknown timetype: " + _timeType);
            } else {
                // set
                if (arguments.length === 1 && Number.isInteger(arguments[0])) {
                    _timeType = 0;
                    return _time = arguments[0];
                }
                if (arguments.length === 2 && (arguments[0] instanceof Date || arguments[1] instanceof Date)) {
                    _timeType = 1;
                    _dateA = arguments[0];
                    _dateB = arguments[1];
                    return time();
                };
            }
            throw new Error("Unsupported combination of arguments: (" +
                [].map.call(arguments,
                    function (a) {
                        if (a === null) return "null";
                        if (a === undefined) return "undefined";
                        if (isNaN(a)) return "NaN";
                        if (a.constructor != null) return a.constructor.name;
                        return typeof (a);
                    }).join(", ") +
                ")");
        }

        if (arguments.length > 0) {
            time.apply(this, arguments);
        }

        var msToDay = (24 * 60 * 60 * 1000);
        var msToHour = (60 * 60 * 1000);
        var msToMinute = (60 * 1000);
        var msToSecond = (1000);

        this.getTotalMilliseconds = function () { return time(); };
        this.getTotalSeconds = function () { return time() / msToSecond; };
        this.getTotalMinutes = function () { return time() / msToMinute; };
        this.getTotalHours = function () { return time() / msToHour; };
        this.getTotalDays = function () { return time() / msToDay; };

        this.setTotalMilliseconds = function (ms) { time(ms); };
        this.setTotalSeconds = function (secs) { time(secs * msToSecond); };
        this.setTotalMinutes = function (mins) { time(mins * msToMinute); };
        this.setTotalHours = function (hours) { time(hours * msToHour); };
        this.setTotalDays = function (days) { time(days * msToDay); };

        var _getDays = function (time) {
            return Math.floor(time / msToDay);
        }

        this.getDays = function () { return _getDays(time()); };

        var _getHours = function (time) {
            var daysMs = (_getDays(time)) * msToDay;
            return Math.floor((time - daysMs) / msToHour);
        };

        this.getHours = function () { return _getHours(time()); };

        var _getMinutes = function (time) {
            var daysMs = _getDays(time) * msToDay;
            var hoursMs = _getHours(time) * msToHour;
            return Math.floor((time - hoursMs - daysMs) / msToMinute);
        };

        this.getMinutes = function () { return _getMinutes(time()); };

        var _getSeconds = function (time) {
            var daysMs = _getDays(time) * msToDay;
            var hoursMs = _getHours(time) * msToHour;
            var minutesMs = _getMinutes(time) * msToMinute;
            return Math.floor((time - minutesMs - hoursMs - daysMs) / msToSecond);
        };

        this.getSeconds = function () { return _getSeconds(time()); };

        var _getMilliseconds = function (time) {
            var daysMs = _getDays(time) * msToDay;
            var hoursMs = _getHours(time) * msToHour;
            var minutesMs = _getMinutes(time) * msToMinute;
            var secondsMs = _getSeconds(time) * msToSecond;
            return Math.floor((time - secondsMs - minutesMs - hoursMs - daysMs));
        };

        this.getMilliseconds = function () { return _getMilliseconds(time()); };

        this.getAllTime = function () {
            var t = time();
            return {
                days: _getDays(t),
                hours: _getHours(t),
                minutes: _getMinutes(t),
                seconds: _getSeconds(t),
                milliseconds: _getMilliseconds(t)
            };
        }

        var _setDays = function (days, time) {
            return time - (_getDays(time) * msToDay) + (days * msToDay);
        };

        this.setDays = function (days) { time(_setDays(days, time())) };

        var _setHours = function (hours, time) {
            return time - (_getHours(time) * msToHour) + (hours * msToHour);
        };

        this.setHours = function (hours) { time(_setHours(hours, time())) };

        var _setMinutes = function (minutes, time) {
            return time - (_getMinutes(time) * msToMinute) + (minutes * msToMinute);
        };

        this.setMinutes = function (minutes) { time(_setMinutes(minutes, time())) };

        var _setSeconds = function (seconds, time) {
            return time - (_getSeconds(time) * msToSecond) + (seconds * msToSecond);
        };

        this.setSeconds = function (seconds) { time(_setSeconds(seconds, time())) };


        var _setMilliseconds = function (milliseconds, time) {
            return time - (_getMilliseconds(time)) + (milliseconds);
        };

        this.setMilliseconds = function (milliseconds) { time(_setMilliseconds(milliseconds, time())) };

        this.setAllTime = function (obj, reset) {
            if (reset === true)
                time(0);

            var t = time();

            if (obj.days != null)
                t = _setDays(obj.days, t);
            if (obj.hours != null)
                t = _setHours(obj.hours, t);
            if (obj.minutes != null)
                t = _setMinutes(obj.minutes, t);
            if (obj.seconds != null)
                t = _setSeconds(obj.seconds, t);
            if (obj.milliseconds != null)
                t = _setMilliseconds(obj.milliseconds, t);

            return time(t);
        }
    };

    self.TimeSpan = timeSpan;
})(this);
