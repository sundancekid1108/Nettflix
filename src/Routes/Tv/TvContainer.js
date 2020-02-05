import React, { Component } from 'react'
import TvPresenter from './TvPresenter'
import {tvApi} from '../../api';
export default class TvContainer extends Component {
    state = {
        loading: true,
        error: null,
        popular: null,
        topRated: null,
        airingToday: null
    };

    componentDidMount = async () => {
        try {
            const {
                data: { results: popular }
              } = await tvApi.getPopular();
              const {
                data: { results: topRated }
              } = await tvApi.getTopRated();
              const {
                data: { results: airingToday }
              } = await tvApi.getAiringToday();
              this.setState({
                popular,
                topRated,
                airingToday
              });
        } catch {
            this.setState({
                error: "Could not get tv shows"
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    };

    render() {
        const {
            loading,
            error, 
            popular, 
            topRated, 
            airingToday
        } = this.state;
        return (
            <TvPresenter
                loading={loading}
                error={error}
                popular={popular}
                topRated={topRated}
                airingToday={airingToday}
            /> 
        )
    }
}
