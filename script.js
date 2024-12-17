let wrapper = document.querySelector(".wrapper")
let name = prompt("Введите ваше имя ")
let lastName = prompt("Ввидите ваше фамилю")
let age = prompt("Ввидите ваше возрость ")
let maxMin  = prompt('1:большой  \n 2:маленький')


if(maxMin == '1'){
    wrapper.innerHTML = `
    <h2>ism:${name.toUpperCase()}</h2>
    <h2>familiyangiz:${lastName.toUpperCase()}</h2>
    <h2>yosh: ${age.toUpperCase()}</h2>


`

} else if( maxMin == '2'){

    wrapper.innerHTML = `
    <h2>ism:${name.toLowerCase()}</h2>
    <h2>familiyangiz:${lastName.toLowerCase()}</h2>
    <h2>yosh: ${age.toLowerCase()}</h2>


`

}else{
    alert('malumot kiritmadiz ')
}







