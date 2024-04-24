//find real time
//use formulae to transfor hands

// function rotate(){
//     d = new Date();
//     h = d.getHours();
//     m = d.getMinutes();
//     s = d.getSeconds();
//     hrot = 30*h+m/2;
//     mrot = 6*m;
//     srot = 6*m;

//     hours.style.transform = `rotate(${hrot}deg)`;
//     min.style.transform = `rotate(${mrot}deg)`;
//     sec.style.transform = `rotate(${srot}deg)`;

// }

// setInterval(rotate,1000);


setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hrot = 30*h+m/2;
    mrot = 6*m;
    srot = 6*s;

    hours.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;

},1000);
