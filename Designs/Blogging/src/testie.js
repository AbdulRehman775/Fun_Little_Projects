let broken = 0;

setInterval( function () {
        if (broken < 1) {
            broken++;
            console.log(broken)
        } else {
            broken--;
            console.log(broken)
        }
    }
    , 3000
);
