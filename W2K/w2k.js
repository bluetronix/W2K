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
function arperi(){
    const length = parseInt(document.getElementById('length').value)
    const width = parseInt(document.getElementById('width').value)
    const height = parseInt(document.getElementById('height').value)

    const choice = document.getElementById('shapes').value;
        if (choice == 'square'){
            area = length * length;
            document.getElementById('value').innerHTML = area;
            perimeter = length * 4;
            document.getElementById('value1').innerHTML = perimeter;
        }
        if (choice == 'rectange'){
            area = length * width;
            document.getElementById('value').innerHTML = area;
            perimeter = (length + width)* 2;
            document.getElementById('value1').innerHTML = perimeter;
        }
        else if(choice == 'circle'){
            area = length * length * Math.PI / 4;
            document.getElementById('value').innerHTML = area;
            perimeter = length * Math.PI;
            document.getElementById('value1').innerHTML = perimeter;
        }
        
        else if(choice == 'rohmbus'){
            area = length * width;
            document.getElementById('value').innerHTML = area;
            perimeter = 2 * (length + width);
            document.getElementById('value1').innerHTML = perimeter;
        }
        else if(choice == 'triangle'){
            area = length * 0.5 * height;
            document.getElementById('value').innerHTML = area;
            perimeter = length + width + height;
            document.getElementById('value1').innerHTML = perimeter;
        }
        
        else if(choice == 'choose') {
            alert('Wedogo acha wenge!');
        }

}
function me(){
    alert('Hola')
}
