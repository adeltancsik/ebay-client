import { ADS_FETCHED } from "../actions/ads";

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;
    // case AD_CREATE_SUCCESS:
    //   return [...state, { ...action.ad }];
    //   case AD_DELETE_SUCCESS:
    //     return [state.filter(ad => ad.id !== action.adId)];
    default:
      return state;
  }
};
