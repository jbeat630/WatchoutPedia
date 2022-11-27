import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
const MainPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <LatestMovieSection/>
            <NowPlayingSection />
            <Footer/>
        </div>
    );
}

export default MainPage;