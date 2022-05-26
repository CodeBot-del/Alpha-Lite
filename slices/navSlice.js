import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    facial: null,
    qrcode: null,
    liveStreamRequest: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setFacial: (state, action) => {
            state.facial = action.payload;
        },
        setQrcode: (state, action) => {
            state.qrcode = action.payload;
        },
        setLiveStreamRequest: (state, action) => {
            state.liveStreamRequest = action.payload;
        },
    },
});

export const {setFacial, setQrcode, setLiveStreamRequest} = navSlice.actions;

// selectors
export const selectFacial = (state) => state.nav.facial;
export const selectQrcode = (state) => state.nav.qrcode;
export const selectLiveStreamRequest = (state) => state.nav.liveStreamRequest;

export default navSlice.reducer;