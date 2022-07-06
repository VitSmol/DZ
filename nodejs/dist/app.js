// const { setTimeout } = require("timers/promises");

const requestURL = `http://localhost:3000/dev/api/`;
const getBtn = document.querySelector(`#get`)
const postBtn = document.querySelector(`#post`);
const firstName = document.querySelector(`#fname`);
const lastName = document.querySelector(`#lname`);
const age = document.querySelector(`#age`);
const getCont = document.querySelector(`.get__container`);
const form = document.querySelector(`form`);
const users = document.querySelector(`.users__list`);

async function createUser() {
    const response = await fetch(`${requestURL}users`, {
        method: 'POST',
        headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            name: firstName.value,
            userId: lastName.value + '3333'
        })
    })
    if (response.ok === true) {
        console.log(response);
    }
}
postBtn.addEventListener(`click`, createUser)


// const sendRequest = async (method, url, body) => {
//     const headers = {
//         'Content-Type': 'application/json;charset=utf-8',
//         "Access-Control-Allow-Origin": "*"
//     }
//     const response = await fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     });
//     return await response.json();
// }

// const getRequest = (method, url, body = null) => {
//     return fetch(url).then(response => {
//         console.log(response.body);
//         return response.json()
//     })
// }

// const createUserList = (data) => {
//     users.innerHTML = ""
//     const ul = document.createElement(`ul`);
//     let arr = JSON.parse(data);
//     arr.forEach(el => {
//         const li = document.createElement(`li`);
//         li.innerHTML = `First name: ${el.firstName}; Last name: ${el.lastName}; Age: ${el.age}`;
//         ul.append(li) 
//     })
//     users.append(ul)
// }


// getBtn.addEventListener(`click`, () => {
//     // Принимаем с сервера
//     getRequest(`GET`, requestURL)
//     .then(data => {
//         createUserList(data)
//     })
//     .catch(error => console.log(error))
// })

// postBtn.addEventListener(`click`, ()=> {
//     const obj = {
//         name:firstName.value,
//         userId: lastName.value+`456`,
//         // age: age.value,
//     }
//     // отправляем на сервер
//     sendRequest('POST', requestURL+`users`, obj)
//     .then(data => {
//         // let p = document.createElement(`p`);
//         // p.innerHTML = JSON.stringify(obj)
//         // form.append(p)
//         //     getRequest(`GET`, requestURL)
//         //         .then(data => {
//         //             createUserList(data)
//         //         }).catch(error => console.log(error))
        
//     })
//     .catch(error => console.log(error))
// })
