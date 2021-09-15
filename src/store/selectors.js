export const getAllRewards = store => store.rewards.allRewards;
export const getRewardFilterString = store => store.rewards.filterString;
export const getFilteredRewards = store => store.rewards.allRewards.filter(
    reward => reward.name.toLowerCase().includes(store.rewards.filterString.toLowerCase())
);

export const getAllUsers = store => store.users.allUsers;
export const getUsersFilterString = store => store.users.filterString;
export const getUserById = (store, id) => store.users.allUsers.find(
    user => user.id === id
)
export const getFilteredUsers = store => store.users.allUsers.filter(
    user => user.name.toLowerCase().includes(store.users.filterString.toLowerCase())
);