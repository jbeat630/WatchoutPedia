import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularMovieSection from "../features/movie/popular";
import TopRaterSection from "../features/movie/topRate";
import UpcomingSection from "../features/movie/upcoming"
import styled from "@emotion/styled";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => {
    return (
        <>
            <Header/>
            <Main>
                <Container>
                    <LatestMovieSection/>
                    <NowPlayingSection />
                    <PopularMovieSection />
                    <TopRaterSection />
                    <UpcomingSection />
                </Container>
            </Main>
            <Footer/>
        </>
    );
}

export default MainPage;