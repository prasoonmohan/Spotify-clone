export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    // token : "BQBnAvzxTJUuG5Y8hzYCKDNALuxcXFgpfW8Viny_WYeI8dgQV1Tc-y2L246wTwd8RFXl8A3GGSFCZHFXEXDkBeiTJSGGljpyDwo9v63oUbbMVUJliTdnPlqrKRNEa3ulZEZaZ5VQCiP0535wjqisqw7KcBsrIZpbLpWK2C3RPpuK9ZRGADUV_AyPAh7wamguZfZUik4JV_uJZIoEwHRT",
};

const reducer = (state,action) =>{

    console.log(action);

    switch(action.type){
        case 'SET_USER' :
            return{
                ...state,
                user : action.user
             };

        case "SET_TOKEN" :
            return{
                ...state,
                token : action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists : action.playlists,
            }
        default :
        return state;
    }
}

export default reducer;