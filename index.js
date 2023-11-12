let btn = document.querySelectorAll('[value]');
let answer = document.querySelector('[data-answer]')
let equal = document.querySelector('[data-calculate]');
let clear = document.querySelector('[data-clear]');
let array = ''
let del = document.querySelector('[data-del]');

//attaching function to each button
btn.forEach(element => {
    element.addEventListener('click', () => append(element.value))
})
//adding elemets
function append(element) {
    if (element === '*' && answer.value.includes('*')) return
    if (element === '/' && answer.value.includes('/')) return
    if (element === '.' && answer.value.includes('.')) return
    if (element === '+' && answer.value.includes('+')) return
    if (element === '-' && answer.value.includes('-')) return
    answer.value += element
    console.log(element);
}
//attaching func to erqual button
equal.addEventListener('click', () => {
    answer.value = eval(answer.value).toFixed(2)
    console.log(typeof eval(answer.value))
})

//clear button
clear.addEventListener('click', () => {
    answer.value = ''
})

//delete button
del.addEventListener('click', () => {
    array = answer.value.split('')
    array.pop()
    answer.value = array.join('')
    console.log(array)
})