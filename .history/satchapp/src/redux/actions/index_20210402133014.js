export const removeItem = (id, savedVideos) => ({
  type: 'REMOVE_ITEM',
  payload: {
    savedVideos,
    id,
  },
});

export const addItem = (id, savedVideos) => {
  return {
    type: 'ADD_ITEM',
    payload,
  };
};
