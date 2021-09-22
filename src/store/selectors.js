export const getIsAuthorized = store => store.users.isAuthorized;

export const getAllRewards = store => store.rewards.allRewards;
export const getRewardFilterString = store => store.rewards.filterString;
export const getRewardsFetching = store => store.rewards.isFetching;
export const getRewardsIsFetched = store => store.rewards.isFetched;
export const getFilteredRewards = store => store.rewards.allRewards.filter(
    reward => reward.name.toLowerCase().includes(store.rewards.filterString.toLowerCase())
);

export const getAllUsers = store => store.users.allUsers;
export const getUsersFilterString = store => store.users.filterString;
export const getUsersFetching = store => store.users.isFetching;
export const getUsersIsFetched = store => store.users.isFetched;
export const getCurrentUserId = store => "101" // TODO Implement
export const getUserById = (store, id) => (store.users.allUsers.find(
    user => user.id === id
) || {})
//export const getCurrentUser = store => getUserById(store, getCurrentUserId(store));
export const getCurrentUser = store => {
    return store.users.allUsers.length ? store.users.allUsers[2] : {};
}
export const getFilteredUsers = store => store.users.allUsers.filter(
    user => user.name.toLowerCase().includes(store.users.filterString.toLowerCase())
);

export const getAllTips = store => store.tips.allTips;
export const getTipsFetched = store => store.tips.isFetched;
export const getTipsFetching = store => store.tips.isFetching;