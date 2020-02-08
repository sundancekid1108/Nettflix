import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import ErrorMessage from "../../Components/ErrorMessage";

const Container = styled.div`
    width: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
    padding: 10px;
    padding-top: 50px;
`;

const Form = styled.form`
  all: unset;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 36px;
  color: white;
  width: 100%;
  padding-bottom: 10px;
  margin-left: 10px;
`;

const SearchPresenter = ({
    loading,
    movieResults,
    tvResults,
    searchingBy,
    updateSearchingBy,
    handleSubmit,
    error
}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
        <Input
            placeholder="Search for a Movie or TV Show"
            autoFocus={true}
            value={searchingBy}
            onChange={updateSearchingBy}
        />
        </Form>
        {loading ? (<Loading />) : (
            <>
                {movieResults && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (
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
                    </Section>
                )}
                
                {tvResults && (
                    <Section title="TV Show Results">
                      {tvResults.map(TvShow => (
                        <Poster
                          imageUrl={TvShow.poster_path}
                          rating={TvShow.vote_average}
                          title={TvShow.original_name}
                          year={String(TvShow.first_air_date).substring(0, 4)}
                          isTv={true}
                          id={TvShow.id}
                          key={TvShow.id}
                        />
                      ))}
                    </Section>
                  )}

            </>
        )}
        {error && <ErrorMessage text={error} />}      
    </Container>
        
);

/**
 * year={TvShow.first_air_date.substring(0, 4)} 에러 발생(String 에러)
 * year={String(TvShow.first_air_date).substring(0, 4)} String으로 형변환 하여 해결
 */

SearchPresenter.propTypes = {
    searchingBy: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateSearchingBy: PropTypes.func.isRequired
};

export default SearchPresenter;
