// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]

// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

let [firstName, surname] = "Ilya Kantor".split(' ');