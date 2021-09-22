import {API_URL} from "../config";

const get = async (endpoint) => {
    return await fetch(`${API_URL}${endpoint}`)
        .then(
            response => {
                if(response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            }
        )
        .catch(error => {
            throw new Error(error);
        })
}

const put = async (endpoint, data) => {
    return await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(
            response => {
                if(response.status !== 200) {
                    throw new Error(response.statusText);
                }
            }
        )
        .catch(error => {
            throw new Error(error);
        })
}

export const API = {
    fetchRewards: async function () {
        return await get('/rewards');
    },

    fetchUsers: async function () {
        return await get('/users');
    },

    fetchTips: async function (userId) {
        return await get(`/users/${userId}/tips`);
    },

    register: async function(data) {
        return await put('/users', data)
    },

    tipUser: async function(data) {
        const { receiverId } = data;
        data.count = 1; // temporary

        return await put(`/users/${receiverId}/tips`, data)
    }
}