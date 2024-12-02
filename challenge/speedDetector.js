// function to check speed of a car and assign demerit points
const Speed = prompt('enter speed');
CarSpeed = (speed) => {
if (speed < 70){
    return 'ok'
}
// calculate demerit points
else {
    const demeritPoint =Math.floor((speed-70)/5)
    if (demeritPoint > 12){
        return 'License suspended'
    }
    else {
        return `Points: ${demeritPoint}`;
    }
}
}
// check if the qinput is valid
console.log(CarSpeed(Speed));
