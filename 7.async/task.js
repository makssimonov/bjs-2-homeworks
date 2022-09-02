class AlarmClock {
    constructor(alarmCollection, timerId) {
        alarmCollection = [];
        timerId = null;
    }

    addClock(time, callback, id) {
        if (id == undefined) {
            throw new Error('id будильника не передан');
        }
        
        for (const i in this.alarmCollection) {
            if (this.alarmCollection.id[i] === id) {
                console.error('id уже существует');
                return;
            }
        }

        this.alarmCollection = [
            {id, time, callback}
        ]
    }

    removeClock(id) {
        const idCompare = this.alarmCollection.filter(item => item.id == id);
        if (idCompare === false) {
            return idCompare;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return hours + ':' + minutes;
    }

    start() {
        function checkClock(call) {
            if (getCurrentDate() === call.time) {
                call.callback();
            }
        }
        
        if (this.alarmCollection.timerId == undefined) {
            function setInterval() {this.alarmCollection.forEach(item => {
                item.checkClock;
            });
            }
            setInterval = this.alarmCollection.timerId;
        }
    }

    stop() {
        if (this.alarmCollection.timerId == undefined) {
            return;
        } else {
            function clearInterval() {
                setInterval = null;
                delete this.AlarmClock.timerId;
            }
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => item.id && item.time);
    }

    clearAlarms() {
        this.stop();
        delete this.alarmCollection;
    }
}
