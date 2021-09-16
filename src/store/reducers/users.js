import {AUTHORIZE, REGISTER, SET_USERS_FILTER_STRING} from "../actionTypes";

const initialState = {
    allUsers: [
        {
            id: "123",
            name: "John ",
            surname: "Cena",
            description: "Professional wrestler",
            imageUrl: "https://i.imgur.com/C5ZpUTu.jpeg",
            tipsToBeSent: 5,
            tipsToBeSpent: 3,
            tipList: [],
            isAdmin: false
        },
        {
            id: "23",
            name: "John ",
            surname: "Cena",
            description: "Professional wrestler",
            imageUrl: "https://i.imgur.com/C5ZpUTu.jpeg",
            tipsToBeSent: 5,
            tipsToBeSpent: 3,
            tipList: [],
            isAdmin: false
        },
        {
            id: "55",
            name: "John ",
            surname: "Cena",
            description: "Professional wrestler",
            imageUrl: "https://i.imgur.com/C5ZpUTu.jpeg",
            tipsToBeSent: 5,
            tipsToBeSpent: 3,
            tipList: [],
            isAdmin: false
        },
        {
            id: "77",
            name: "John ",
            surname: "Cena",
            description: "Professional wrestler",
            imageUrl: "https://i.imgur.com/C5ZpUTu.jpeg",
            tipsToBeSent: 5,
            tipsToBeSpent: 3,
            tipList: [],
            isAdmin: false
        }
    ],
    filterString: "",
    isAuthorized: false,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_FILTER_STRING: {
            return { ...state, filterString: action.payload };
        }
        case AUTHORIZE: {
            console.log('Authorization attempt', action.payload);
            return { ...state, isAuthorized: true };
        }
        case REGISTER: {
            console.log('Registration attempt', action.payload);
            return { ...state, isAuthorized: true };
        }

        default: {
            return state;
        }
    }
};

export default users;
