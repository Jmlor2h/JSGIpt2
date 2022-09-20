function BMI(){

const Tom = ['Toms', 9, 8];
const Jerry = ['Jerrys', 10, 45];

var x = Tom[1] / Tom[2] **2
var y = Jerry[1] / Jerry[2] **2
var z = false;

if (x > y){
    z = true;
    alert('Is ' + Tom[0] + ' BMI higher than ' + Jerry[0] +'?' + ' ;' + z)
}

console.log('Toms BMI is', x)
console.log('Jerrys BMI is', y)

console.log('Is', Tom[0],'BMI higher than', Jerry[0],'?',' ;', z)


}
