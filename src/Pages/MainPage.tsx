import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularMovieSection from "../features/movie/popular";
import TopRaterSection from "../features/movie/topRate";
const MainPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <LatestMovieSection/>
            <NowPlayingSection />
            <PopularMovieSection />
            <TopRaterSection />
            <Footer/>
        </div>
    );
}

export default MainPage;