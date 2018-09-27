//Задание Напишите функцию capitalize(), которая принимает слово из маленьких латинских букв и возвращает его же, меняя первую букву на большую.
// Например, print(capitalize('hello')) должно печатать слово Hello.

//Решение 

var word = prompt('Введите слово маленькими символами', '');
function capitalize(word){
    word = word.charAt(0).toLocaleUpperCase() + word.substr(1, );
    alert(word);
}
capitalize(word);
