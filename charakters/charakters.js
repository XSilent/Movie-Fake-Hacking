// Fake-Movie-Hacking
function output() {
        var r = Math.floor((Math.random() * 122) + 1);
    
        var s = String.fromCharCode(r);
        process.stdout.write(s);

        repeatAfter(5);
}

function wait(time) {
    setTimeout(output, time);
}

repeatAfter(5);

