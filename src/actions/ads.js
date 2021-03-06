import request from "superagent";

const baseUrl = "http://localhost:4000";

// fetching for displaying all the ads
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

// fetching a single ad based on its id for displaying it
export const AD_FETCHED = "AD_FETCHED";

const loadAdSuccess = ad => ({
  type: AD_FETCHED,
  ad
});

// loadAd is a function w an argument id, that return a function dispatch
export const loadAd = id => dispatch => {
  request
    .get(`${baseUrl}/ads/${id}`)
    .then(response => {
      dispatch(loadAdSuccess(response.body));
    })
    .catch(console.error);
};

// creating a new ad
export const AD_CREATE_SUCCESS = "AD_CREATE_SUCCESS";

const adCreateSuccess = ad => ({
  type: AD_CREATE_SUCCESS,
  ad
});

export const createAd = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/ads`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      dispatch(adCreateSuccess(response.body));
    })
    .catch(console.error);
};

// deleting a single ad
export const AD_DELETE_SUCCESS = "AD_DELETE_SUCCESS";

const deleteAdSuccess = adId => ({
  type: AD_DELETE_SUCCESS,
  adId
});

export const deleteAd = id => dispatch => {
  request
    .delete(`${baseUrl}/ads/${id}`)
    .then(() => {
      dispatch(deleteAdSuccess(id));
    })
    .catch(console.error);
};

// editing a single ad
export const AD_EDIT_SUCCESS = "AD_EDIT_SUCCESS";

const editAdSuccess = newData => ({
  type: AD_EDIT_SUCCESS,
  newData
});

export const editAd = (id, values) => dispatch => {
  request
    .put(`${baseUrl}/ads/${id}`)
    .send(values)
    .then(response => {
      dispatch(editAdSuccess(response.body));
      dispatch(loadAd(id));
    })
    .catch(console.error);
};
