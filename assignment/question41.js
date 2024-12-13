const pointA = {x:1,y:2};
const pointB = {x:4,y:6};

const distance = calculateDistance(pointA.x,pointA.y,pointB.x,pointB.y);
console.log(distance);

function calculateDistance(x1,x2,y1,y2){
    const a = x2-x1;
    const b = y2-y1;

    const distance = Math.sqrt(a*a+b*b);
    return distance;
}