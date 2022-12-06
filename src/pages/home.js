import React from 'react'
import Banner from "../components/banner";
import Header from "../components/header";
import Popular from "../components/popular";
import Upcoming from '../components/upcoming';
import Nowplaying from '../components/nowplaying';
import Toprated from '../components/toprated'

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Popular />
            <Upcoming />
            <Nowplaying/>
            <Toprated/>
        </div>
    )
}
