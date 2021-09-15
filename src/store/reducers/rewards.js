import {SET_REWARDS_FILTER_STRING} from "../actionTypes";

const initialState = {
    allRewards: [
        {
            id: "123",
            name: "Lamborghini",
            description: "Idk if we use it",
            imageUrl: "https://i.imgur.com/1lgPDw1.jpeg",
            cost: 23
        },
        {
            id: "124",
            name: "Lamborghini",
            description: "Idk if we use it",
            imageUrl: "https://i.imgur.com/1lgPDw1.jpeg",
            cost: 23
        },
        {
            id: "126",
            name: "Lamborghini",
            description: "Idk if we use it",
            imageUrl: "https://i.imgur.com/1lgPDw1.jpeg",
            cost: 23
        },
        {
            id: "125",
            name: "Lamborghini",
            description: "Idk if we use it",
            imageUrl: "https://i.imgur.com/1lgPDw1.jpeg",
            cost: 23
        },
        {
            id: "128",
            name: "Lamborghini",
            description: "Idk if we use it",
            imageUrl: "https://i.imgur.com/1lgPDw1.jpeg",
            cost: 23
        }
    ],
    filterString: "",
};

const rewards = (state = initialState, action) => {
    switch (action.type) {
        case SET_REWARDS_FILTER_STRING: {
            return { ...state, filterString: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default rewards;
