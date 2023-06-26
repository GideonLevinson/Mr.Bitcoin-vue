import { sessionStorageService } from "./storage.service";
import { utilService } from "./util.service";

export const userService = {
    getUser,
    signup: login,
    addMove,
}

const gUsers = []
const LOGIN_KEY = 'usersDB'

function getUser() {
    const users = sessionStorageService.loadFromSessionStorage('usersDB')
    if (users) {
        return users[0]
    } else return null
}
function addMove(contact, amount) {
    let users = sessionStorageService.loadFromSessionStorage('usersDB')
    console.log('users', users)

    if ((amount > 0) && (users[0].coins - amount >= 0)) {

        users[0].coins -= amount
        const newMove = _createMove(contact, amount)
        users[0].moves.unshift(newMove)
        console.log('users!!!', users)
        sessionStorageService.save
        sessionStorageService.saveToSessionStorage(LOGIN_KEY, users)

        return users[0]
    }
}



function login(name) {
    const user = {
        name,
        balance: 100,
        _id: utilService.makeId(),

    }
    gUsers.unshift(user)
    sessionStorageService.saveToSessionStorage(LOGIN_KEY, gUsers)
    return Promise.resolve(user)
}



function _createMove(contact, amount, status) {
    return {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
        status
    }
}

// const user = {
//   name: "Puki Ben David",
//   balance: 100,
//   transactions: [],
// }

// export const userService = {
//   getUser,
// }

// function getUser() {
//   return user
// }
