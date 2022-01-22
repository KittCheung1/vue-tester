import { BASE_USER_URL } from "./index";
const apiKey = '334H7SGhAEiIPqPfCg+pfA=='

// GET --------------------------------------------------------------------------------------------
// export async function apiGetUser(username) {
//     const username = 'dewaldes'


//     fetch(`${BASE_USER_URL}?username=${username}`)
//         .then(response => response.json())
//         .then(results => {
//             // results will be an array of users that match the username of mega-mind.
//         })
//         .catch(error => {})
// }
export async function apiUserLoginRegister(action = "login", username) {
    try {
        const config = {

            method: "POST",
            headers: {
                'X-API-Key': apiKey,
                "content-type": "application/json"
            },
            body: JSON.stringify({

                username,
            })
        }

        const response = await fetch(`${BASE_USER_URL}/${action}`, config);
        const { data } = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, null];
    }
}




//POST------------------------------------------------------------------------------------------
export async function apiUserRegister(username) {
    try {
        const config = {

            method: "POST",
            headers: {
                'X-API-Key': apiKey,
                "content-type": "application/json"
            },
            body: JSON.stringify({

                username,
            })
        }

        const response = await fetch(`${BASE_USER_URL}`, config);
        const { data } = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, null];
    }
}