class AlarmClock {
    constructor(alarmCollection, timerId) {
        alarmCollection = [];
        timerId = null;
    }

    addClock(time, callback, id) {
        if (id == undefined) {
            throw new Error('id будильника не передан');
        }

        this.alarmCollection.some(function(item) {
            if (item.id == id) {
                console.error('id уже существует');
                return;
            }
        })
        
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        const alarmCollectionLength = this.alarmCollection.length;
        alarmCollectionLength.filter(id => id == this.alarmCollection.id) 
            if (id < this.alarmCollection.id) {
                return;
            }
        }
    

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return hours + ':' + minutes;
    }

    start() {
        function checkClock(clock) {
            if (this.getCurrentFormattedTime() == clock.time) {
                clock.callback();
            }
        }
        
        if (this.timerId == null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(function() {
                checkClock(clock, 1000);
            }))
        }
    }

    stop() {
        if (this.alarmCollection.timerId == null) {
            return;
        } else {
            this.timerId = clearInterval();
            delete this.timerId;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => item.id, item.time);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

console.log(this.alarmCollection)
