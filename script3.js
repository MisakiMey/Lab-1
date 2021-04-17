for (let i = 1; i<=10; i++)
{
	console.log(`6*${i}=${6*i}`)
}


const array = [1,2,3,4,5,-7,-8]
console.log (Math.pow(array[2],2))
const boge = array[0] + array[array.length-1]
console.log (boge)
let result = 0
for (let n = 0; n<=array.length-1; n++)
{
	if (array[n] < 0) {result +=(array[n]*array[n])
	}
}
console.log (result)




const car = {name: "Lada",model: "Porsche",engine_hoop: 57}
const car1 = {name: "Boll",model: "Tayota",engine_hoop: 38}
const car2 = {name: "Nell",model: "Nisan",engine_hoop: 167}
const array1 = [car,car1,car2]
let sick = 0
for (let n = 0; n <array1.length; n++)
{	
if (array1[n].engine_hoop < array1[sick].engine_hoop){
}

}
console.log (array1[sick])





let e = 0
let f = 0
let g = 0
let a = prompt ("Введите число")
console.log ("a:" +a)
let b = prompt ("Введите число")
console.log ("b:" +b)
let c = prompt ("Введите число")
console.log ("c:" +c)
let d = prompt ("Введите число")
console.log ("d:" +d)
if (a<b) { 
	e = a
}
else {
	e = b
}
if (c<d) { 
	f = c
}
else {
	f = d
}
if  (e > f){
	g = e
}
else {
	g = f
}
console.log ("Максимвльное число:" +g)