

const initialState = {
    api: [],
    genres: [],
    value: "",
    filtered_api: [],
    filter_value: "",
    sorted: false,
  };

  function MainReducer(state = initialState, action) {
    switch (action.type) {
      case "movies/initial":
        return {
          ...state,
          api: state.api.concat(action.payload)
      };
      case "genres/initial":
        return {
          ...state,
          genres: state.genres.concat(action.payload)
      };
      case "movies/change":
        return {
          ...state,
          api: state.api.concat(action.payload),
          filtered_api: action.payload
      };
      case "search": {
        const value = action.payload;
        if(state.filtered_api.length > 0 && state.filter_value !== ""){
          const filtered_api = state.filtered_api.filter((ele) => ele.original_title.toLowerCase().includes(value.toLowerCase())) 
          return { ...state, value, filtered_api}
        }
        else if(state.filtered_api.length === 0 && state.filter_value !== ""){
          const prefiltered_api = state.api.filter((ele) => ele.original_title.toLowerCase().includes(value.toLowerCase())) 
          const filtered_api = prefiltered_api.filter((ele) => ele.genre_ids.includes(parseInt(state.filter_value))) 
          return { ...state, value, filtered_api}
        }
        else{
          const filtered_api = state.api.filter((ele) => ele.original_title.toLowerCase().includes(value.toLowerCase())) 
          return { ...state, value, filtered_api}
        }
      }
      case "genres/change": {
        const filter_value = action.payload
        if(state.filtered_api.length > 0 && state.value !== ""){
          const filtered_api = state.filtered_api.filter((ele) => ele.genre_ids.includes(parseInt(filter_value))) 
          return { ...state, filter_value, filtered_api}
        }
        else if(state.filtered_api.length === 0 && state.value !== ""){
          const prefiltered_api = state.api.filter((ele) => ele.genre_ids.includes(parseInt(filter_value))) 
          const filtered_api = prefiltered_api.filter((ele) => ele.original_title.toLowerCase().includes(state.value.toLowerCase()))
          return { ...state, filter_value, filtered_api}
        }
        else{
          const filtered_api = state.api.filter((ele) => ele.genre_ids.includes(parseInt(filter_value))) 
          return { ...state, filter_value, filtered_api}
        }

      }
      case "sort": {
        const sorted = action.payload
        if(sorted === true){
          if(state.filtered_api.length > 0){
            const sorted_api = state.filtered_api.sort(function(a,b){
              return b.vote_average - a.vote_average
            })
            return {
              ...state,
              sorted,
              filtered_api: sorted_api
            }
          }
          else{
            const sorted_api = state.api.sort(function(a,b){
              return b.vote_average - a.vote_average
            })
            return {
              ...state,
              sorted,
              api: sorted_api,
            }
          }
        }
        else{
          if(state.filtered_api.length > 0){
            const sorted_api = state.filtered_api.sort(function(a,b){
              return a.vote_average - b.vote_average
            })
            return {
              ...state,
              sorted,
              filtered_api: sorted_api
            }
          }
          else{
            const sorted_api = state.api.sort(function(a,b){
              return a.vote_average - b.vote_average
            })
            return {
              ...state,
              sorted,
              api: sorted_api,
            }
          }
        }
      }
      default:
        return state;
    }
  }
  
  export default MainReducer; 