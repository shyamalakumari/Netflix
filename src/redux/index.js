import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./slice/bannerSlice";
import movieDetails from "./slice/movieDetails";
import payment from "./slice/payment";
import popularSlice from "./slice/popularSlice";
import upcomingdetails from "./slice/upcomingdetails";
import nowplayingdeatails from "./slice/nowplayingdeatails";
import toprated from "./slice/topratedSlice";


export default configureStore({
    reducer: {
        banner: bannerSlice.reducer,
        popular: popularSlice.reducer,
        movieDetails: movieDetails.reducer,
        payment : payment.reducer,
        upcomingdetails : upcomingdetails.reducer,
        nowplayingdeatails :nowplayingdeatails.reducer,
        toprated : toprated.reducer
    }
})