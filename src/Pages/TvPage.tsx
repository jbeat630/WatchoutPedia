import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LatestTvSection from "../features/tv/latest";
const TvPage: React.FC = () => {
    return  (
        <div>
            <Header />
            <div>
                <LatestTvSection />
            </div>
            <Footer />
        </div>
    )
}

export default TvPage;