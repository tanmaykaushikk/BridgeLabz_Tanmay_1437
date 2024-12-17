 
function isOperand(x)
{
    return (x >= 'a' && x <= 'z') ||
            (x >= 'A' && x <= 'Z');
}

function getInfix(exp)
{
    let s = [];
   
    for (let i = 0; i < exp.length; i++)
    {
        if (isOperand(exp[i]))
        {
        s.push(exp[i] + "");
        }
        else
        {
            let op1 = s[s.length-1];
            s.pop();
            let op2 = s[s.length-1];
            s.pop();
            s.push("(" + op2 + exp[i] +
                    op1 + ")");
        }
    }
    return s[s.length-1];
}
let exp = "ab*c+";
console.log( getInfix(exp));