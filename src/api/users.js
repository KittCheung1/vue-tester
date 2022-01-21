import { BASE_USER_URL } from "./index";

export async function apiUserRegister(username) {
    try {
        const config = {

            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username
                }
            })
        }

        const response = await fetch(`${BASE_USER_URL}`, config);
        const { success, data } = await response.json();
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}