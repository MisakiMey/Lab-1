alert("^_^")
let burn = prompt ("Буду ли я сегодня ЧЕРТОМ?", "yes")
let ay = confirm("Вы сможете принять мои лабы?")


let age = prompt ("Сколько вам лет?")
console.log ("Ваш возвраст:" +age)



let food = prompt ("Сколько у вас купленых товаров?")
let sereal = prompt ("Какова цена зха один товар?")
let all = 0
all = food * sereal
console.log ("Сумма равна:" +all)




let num = prompt ("Введи число")
if (num < 0) {alert ("Отрицательное")}
else
{alert ("Положительное")}



let week = + prompt ("Выберите день недели?")
switch(week) {
  case 1:
  alert( 'Понедельник')
  break
  case 2:
  alert( 'Вторник')
  break
  case 3:
  alert( 'Среда')
  break
  case 4:
  alert( 'Четверг')
  break
  case 5:
  alert( 'Пятница')
  break
  case 6:
  alert( 'Суббота')
  break
  case 7:
  alert( 'Воскресение')
  break
  default:
    alert("Такого нет!")
}