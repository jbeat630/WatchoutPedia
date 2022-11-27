import React from "react";
import styled from "@emotion/styled";
import useNowPlayingMovie from "./useNowPlayingMovie";
import Card from "../../../Components/Card";
import Slider from "react-slick";



const Base = styled.div``;

const Title = styled.h4``;

const NowPlayingSection: React.FC = () => {
    const { data, isLoading} = useNowPlayingMovie();

    const getYear = (date:string) => date.split('-')[0];

    // @ts-ignore
    return (
        <Base>
            <Title>최근 개봉작</Title>
            {
                isLoading || !data ? (
                    <div>Loading...</div>
                ) : (
                    <Slider>
                        {
                            data.data.results.map(movie =>(
                                <Card
                                    key={movie.id}
                                    linkUrl={`/movie/${movie.id}`}
                                    title={movie.title}
                                    posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                                    voteAverage={movie.vote_average}
                                    year={getYear(movie.release_date)}
                                />
                            ))
                        }
                    </Slider>
                )
            }
        </Base>
    )
}

export default NowPlayingSection;