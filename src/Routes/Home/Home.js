import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Poster from "../../Components/Poster";
import Section from "../../Components/Section";
import ErrorMessage from "../../Components/ErrorMessage";
import {movieApi} from "../../api";

const Container = styled.div`
    padding: 10px;
    padding-top: 30px;
`;

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popular, setPopular] = useState(null);
    const [upcoming, setUpcoming] = useState(null);
    const [nowPlaying, setNowPlaying] = useState(null);

    const getMovieData = async () => {
        try {
            const { data: { results: popular } } = await movieApi.getPopular();
            const { data: { results: upcoming } } = await movieApi.getUpcoming();
            const { data: { results: nowPlaying } } = await movieApi.getNowPlaying();
            setPopular(popular);
            setUpcoming(upcoming);
            setNowPlaying(nowPlaying);
        } catch {
            setError("Could not get movies");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return loading ? (
        <Loading/>
    ) : (
        <>
            <Container>
                {popular && (
                <Section>
                    <SectionTitle>Popular Movies</SectionTitle>
                    <Grid>
                    {popular.map(movie => (
                        <Poster
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        title={movie.title}
                        year={String(movie.release_date).substring(0, 4)}
                        isTv={false}
                        id={movie.id}
                        key={movie.id}
                        />
                    ))}
                    </Grid>
                </Section>
                )}

                {nowPlaying && (
                <Section>
                    <SectionTitle>Now Playing</SectionTitle>
                    <Grid>
                    {nowPlaying.map(movie => (
                        <Poster
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        title={movie.title}
                        year={String(movie.release_date).substring(0, 4)}
                        isTv={false}
                        id={movie.id}
                        key={movie.id}
                        />
                    ))}
                    </Grid>
                </Section>
                )}

                {upcoming && (
                <Section>
                    <SectionTitle>upcoming</SectionTitle>
                    <Grid>
                    {upcoming.map(movie => (
                        <Poster
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        title={movie.title}
                        year={String(movie.release_date).substring(0, 4)}
                        isTv={false}
                        id={movie.id}
                        key={movie.id}
                        />
                    ))}
                    </Grid>
                </Section>
                )}
            {error && <ErrorMessage text={error} />}         
            </Container>
        </>
    );

    
}

export default Home;

