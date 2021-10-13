export const initialState = {
  user: null,
  playlists:[],
  playing: false,
  item: null,
  // channge token back to null after development!!!
  // token:'BQA4_8icc2v6fsLDJYYF8MdVDIUHdMiDwaQCAB3Jd4NXDcjVZBBOYPq5uxGaDCrrHJwbnSLXWAq-d2W2lE_NY6IbgilT_faFBI1ZwNPLRnjzGC3wY-iNdlY2KXgt-QREaLFyw_B0ZZJI2jQkSFVwoHuQib_eIxF8kDOa9-5OYedJPxHZn1lu'
};

const reducer = (state, action) =>{
  console.log(action);

// Action ->type, [payload]

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
      ...state,
        token: action.token
      };
    case 'SET_PLAYLISTS':
      return {
        ...state, 
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      };  
    default:
      return state;
    
  }
 
};

export default reducer;