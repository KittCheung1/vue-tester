import { BASE_USER_URL } from "./index";
const apiKey = '334H7SGhAEiIPqPfCg+pfA=='

fetch(`${BASE_USER_URL}`, {
        method: 'POST',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'the-trivia-master',
            highScore: 0
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not create new user')
        }
        return response.json()
    })
    .then(newUser => {
        // newUser is the new user with an id
    })
    .catch(error => {})

// export async function apiUserRegister(username) {
//     try {
//         const config = {

//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify({
//                 user: {
//                     username
//                 }
//             })
//         }

//         const response = await fetch(`${BASE_USER_URL}?username=${username}`, config);
//         const { success, data } = await response.json();
//         return [null, data]
//     } catch (error) {
//         return [error.message, null]
//     }
// }