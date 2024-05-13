/**
 * @class
 * Класс реализует контроль над состоянием потенциометра
 */
class ClassPotentiometer extends ClassSensor {
    constructor(_opts) {
        ClassSensor.call(this, _opts);
        if (this._Pins.length < 1) throw new Error();

        // this._Channels[0].DataRefine.SetTransformFunc(100, 0);
        // this.Configure({ range: _opts.range || 100 }); 
    }
    Start(_chNum, _period) {
        this._ChStatus[0] = 1;
        let period = _period ? E.clip(_period, 10, 50) : 20;

        this._Interval = setInterval(() => {
            let val = analogRead(this._Pins[0]);
            // val = Math.round(proportion(val, 0, 1, 0, this._Range));
            this.Ch0_Value = val;
        }, period);
    }
    Stop() {
        this._ChStatus[0] = 0;
        if (this._Interval) clearInterval(this._Interval);
    }
    Configure(_opts) {
        let opts = _opts || {};
        if (typeof opts.range === 'number' &&
            opts.range > 0 &&
            Number.isInteger(opts.range)) {
               this._Range = opts.range;
               return true; 
            }
        return false;
    }
}

exports = ClassPotentiometer;