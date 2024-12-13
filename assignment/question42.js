const circle1 = { x: 1, y: 0, r: 5 };
const circle2 = { x: 3, y: 3, r: 5 };

const intersecting = helper(circle1.x,circle1.y,circle1.r,circle2.x,circle2.y,circle2.r);
console.log(intersecting);

function helper(x1,y1,r1,x2,y2,r2){
    const a = x2-x1;
    const b = y2-y1;
    const distance = Math.sqrt(a*a+b*b);

    return distance<(r1+r2);
}