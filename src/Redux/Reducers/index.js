const initialState = {
  searchResult: {
    searchTerm: "",
    allAlbum: [],
    singleAlbum: [],
  },
};

const mainReducer = (state = initialState, action) => {
  //faccio switch action type, per ogni possibilità faccio un case e ritorno un oggetto
  switch (action.type) {
    case "RICERCA_ALBUM":
      return {
        ...state,
        searchResult: {
          ...state.searchResult,
          allAlbum: [...state.searchResult.allAlbum, action.payload],
        },
      };
    case "SEARCH":
      return {
        ...state,
        searchResult: {
          ...state.searchResult,
          searchTerm: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
