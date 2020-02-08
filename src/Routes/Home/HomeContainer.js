import React from 'react'
import HomePresenter from "./HomePresenter"
import {movieApi} from '../../api';
export default class HomeContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        popular: null,
        upcoming: null,
        nowPlaying: null    };

    componentDidMount = async () => {
        try {
            const {
                data: { results: popular }
            } = await movieApi.getPopular();

            const {
                data: { results: upcoming }
            } = await movieApi.getUpcoming();

            const {
                data: { results: nowPlaying }
            } = await movieApi.getNowPlaying();
            
            this.setState({
                popular,
                upcoming,
                nowPlaying
            });
        } catch {
            this.setState({
                error: "Could not get movies"
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    };

    render(){
        console.log("upcoming", this.state.upcoming);
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log("HomePresenter", HomePresenter);
        return(
            <>
                <HomePresenter
                    loading={loading}
                    error={error}
                    popular={popular}
                    upcoming={upcoming}
                    nowPlaying={nowPlaying}
                />
            </>
        );
    }    
}
