import { CHECK_STATUS } from '../types';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export const reducerCategories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};
