import React, { Component } from 'react'
import SearchPresenter from './SearchPresenter'
import {movieApi, tvApi} from '../../api';
export default class SearchContainer extends Component {
    state = {
        loading: false,
        movieResults: null,
        showResults: null,
        searchingBy: "",
        error: null
    };

    updateSearchingBy = (event) => {
        const {
            target: { value }
        } = event;
        this.setState({
            searchingBy: value
        });
    };

    search = async (searchingBy) => {
        this.setState({ loading: true});
        try {
            const{
                data: {results: movieResults}
            } = await movieApi.searchMovies(searchingBy);
            const {
                data: { results: showResults }
            } = await tvApi.searchTv(searchingBy);

            this.setState({
                movieResults, showResults
            });

        } catch {
            this.setState({
                error: "Sorry! Can't searching it!!"
            })
        } finally {
            this.setState({ loading: false });
        }

    };  

    handleSubmit = () => {
        const {searchingBy} = this.state;
        if (searchingBy !== "") {
            this.search(searchingBy);
        }
    };

    

    render() {
        const {
            loading,
            error,
            movieResults,
            showResults,
            searchingBy
        } = this.state;

        return (
            <SearchPresenter
                loading={loading}
                error={error}
                movieResults={movieResults}
                showResults={showResults}
                searchingBy={searchingBy}
            />
        )
    }
}
