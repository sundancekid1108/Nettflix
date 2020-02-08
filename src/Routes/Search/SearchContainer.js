import React, { Component } from 'react'
import SearchPresenter from './SearchPresenter'
import {movieApi, tvApi} from '../../api';
export default class SearchContainer extends Component {
    state = {
        loading: false,
        movieResults: null,
        tvResults: null,
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

    handleSubmit = (e) => {
        e.preventDefault();
        const {searchingBy} = this.state;
        if (searchingBy !== "") {
            this.search(searchingBy);
        }
    };


    search = async (searchingBy) => {
        this.setState({ loading: true});
        try {
            const{
                data: {results: movieResults}
            } = await movieApi.searchMovies(searchingBy);
            const {
                data: { results: tvResults }
            } = await tvApi.searchTv(searchingBy);

            this.setState({
                movieResults, tvResults
            });
            // console.log("movieResults", movieResults);
            // console.log("tvResults", tvResults);
        } catch {
            this.setState({
                error: "Sorry! Can't searching it!!"
            })
        } finally {
            this.setState({ loading: false });
        }

    };  
  

    render() {
        const {
            loading,
            error,
            movieResults,
            tvResults,
            searchingBy
        } = this.state;

        return (
            <SearchPresenter
                loading={loading}
                error={error}
                movieResults={movieResults}
                tvResults={tvResults}
                searchingBy={searchingBy}
                updateSearchingBy={this.updateSearchingBy}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}
