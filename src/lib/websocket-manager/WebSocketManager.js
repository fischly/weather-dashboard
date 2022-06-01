

export let myVar = 0;
let started = false;
let callbacks = [];

export function start() {
    if (!started) {
        started = true;
        window.setInterval(() => {
            console.log(myVar++);
            for (const cb of callbacks) {
                cb(myVar);
            }
        }, 1000);
    }
}

export function inc() {
    console.log(myVar++);
}

export function addCallback(cb) {
    if (!callbacks.includes(cb)) {
        callbacks.push(cb);
    }
}
