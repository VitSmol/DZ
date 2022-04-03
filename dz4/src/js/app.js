// const { setTimeout } = require("timers/promises");

const requestURL = `http://localhost:8000/`;
// const getBtn = document.querySelector(`#get`)
const postBtn = document.querySelector(`#adduser`);
const firstName = document.querySelector(`#name`);
const lastName = document.querySelector(`#surname`);
const age = document.querySelector(`#age`);
const tableBody = document.getElementById(`tablebody`);

const getRequest = (method, url, body = null) => {
    return fetch(url).then(response => {
        return response.json()
    })
}

const createUserList = (data) => {
    tableBody.innerHTML = ""
    let arr = JSON.parse(data);
    arr.forEach(user => {
        const row = document.createElement(`tr`);
        for (let prop in user) {
            const cell = document.createElement(`td`);
            cell.innerText = user[prop]
            row.append(cell) 
        }
        tableBody.append(row)
    })
}
// Принимаем с сервера
const getData = () => {
    getRequest(`GET`, requestURL)
    .then(data => {
        createUserList(data)
    })
    .catch(error => console.log(error))
}
getData()

const sendRequest = (method, url, body) => {
    const headers = {
        'Content-Type': 'application/json;charset=utf-8'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json()
    })
}
postBtn.addEventListener(`click`, ()=> {
    const obj = {
        firstName:firstName.value,
        lastName: lastName.value,
        age: age.value,
    }
    // отправляем на сервер
    sendRequest('POST', requestURL, obj)
    .then(data => {
        // let p = document.createElement(`p`);
        // p.innerHTML = JSON.stringify(obj)
        // form.append(p)
            getRequest(`GET`, requestURL)
                .then(data => {
                    createUserList(data)
                }).catch(error => console.log(error))
        
    })
    .catch(error => console.log(error))
})



// setInterval(() => {
//     getRequest(`GET`, requestURL)
//         .then(data => {
//             createUserList(data)
//         }).catch(error => console.log(error))
// }, 5000)