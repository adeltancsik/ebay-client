import { ADS_FETCHED } from "../actions/ads";
import { AD_CREATE_SUCCESS } from "../actions/ads";
import { AD_DELETE_SUCCESS } from "../actions/ads";
import { AD_EDIT_SUCCESS } from "../actions/ads";

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;
    case AD_CREATE_SUCCESS:
      return [...state, { ...action.ad }];
    case AD_DELETE_SUCCESS:
      return [...state.filter(ad => ad.id !== action.adId)];
    case AD_EDIT_SUCCESS:
      return [
        ...state.map(ad => {
          if (ad.id === action.newData.id) {
            return (ad = action.newData);
          } else {
            return ad;
          }
        })
      ];
    default:
      return state;
  }
};
