import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Poster from "../../Components/Poster";
import ErrorMessage from "../../Components/ErrorMessage"
const Container = styled.div`
  padding: 10px;
  padding-top: 30px;
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-weight: 600;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 30px;
`;

const TvPresenter = ({ loading, error, popular, topRated, airingToday }) => 
    loading ? (<Loading/>) : (
        <Container>
            <Section>
                <SectionTitle>Popular Shows</SectionTitle>
                    <Grid>
                        {popular.map(TvShow => (
                            <Poster
                                imageUrl={TvShow.poster_path}
                                rating={TvShow.vote_average}
                                title={TvShow.name}
                                year={String(TvShow.first_air_date).substring(0, 4)}
                                isTv={true}
                                id={TvShow.id}
                                key={TvShow.id}
                            />
                        ))}
                    </Grid>
            </Section>

            {topRated && (
                <Section>
                    <SectionTitle>Top Rated</SectionTitle>
                    <Grid>
                        {topRated.map(show => (
                            <Poster
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                title={show.name}
                                year={show.first_air_date.substring(0, 4)}
                                isTv={true}
                                id={show.id}
                                key={show.id}
                            />
                        ))}
                    </Grid>
                </Section>
            )}

            {airingToday && (
                <Section>
                    <SectionTitle>Airing Today</SectionTitle>
                        <Grid>
                            {airingToday.map(show => (
                                <Poster
                                    imageUrl={show.poster_path}
                                    rating={show.vote_average}
                                    title={show.name}
                                    year={show.first_air_date.substring(0, 4)}
                                    isTv={true}
                                    id={show.id}
                                    key={show.id}
                                />
                            ))}
                        </Grid>
                </Section>
            )}
            {error && <ErrorMessage text={error} />}      
        </Container>
    );

TvPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array
};

export default TvPresenter;
