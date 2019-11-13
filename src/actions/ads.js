import request from "superagent";

const baseUrl = "http://localhost:4000";

export const ADS_FETCHED = "ADS_FETCHED";

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

export const loadAds = () => (dispatch, getState) => {
  // when the state already contains ads, we don't fetch them again
  if (getState().ads) return;

  // a GET /ads request
  request(`${baseUrl}/ads`)
    .then(response => {
      // dispatch an ADS_FETCHED action that contains the ads
      dispatch(adsFetched(response.body));
    })
    .catch(console.error);
};

export const AD_FETCHED = "AD_FETCHED";

const loadAdSuccess = ad => ({
  type: AD_FETCHED,
  ad
});

export const loadAd = id => dispatch => {
  request
    .get(`${baseUrl}/ads/${id}`)
    .then(response => {
      dispatch(loadAdSuccess(response.body));
    })
    .catch(console.error);
};

export const AD_CREATE_SUCCESS = "AD_CREATE_SUCCESS";

const adCreateSuccess = ad => ({
  type: AD_CREATE_SUCCESS,
  ad
});

export const createAd = data => dispatch => {
  request
    .post(`${baseUrl}/ads`)
    .send(data)
    .then(response => {
      dispatch(adCreateSuccess(response.body));
    })
    .catch(console.error);
};
