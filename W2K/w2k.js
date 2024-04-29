function quad(){
    let val1 = document.getElementById('a').value
    let val2 = document.getElementById('b').value
    let val3 = document.getElementById('c').value

    let inn = (val2 * val2) * 4 * val1 * val3;
    let c = (Math.sqrt(inn)) + (-val2);
    a = c/2;

    let b =(-val2) - (Math.sqrt(inn));
    b = b/2;
    window.alert(`The values of x are: ${a} 
    and ${b}`);
}
function me(){
    alert("ana");
}
