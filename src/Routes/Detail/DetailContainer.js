import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        result: null,
        error: null
    };

    componentDidMount = () => {
        const {
            location: {pathname},
            match: {
                params: {id}
            }
        } = this.props;
        const isMovie = pathname.includes("movie");
        this.isMovie = isMovie;
        this.getDetail(id);
    };
d
    getDetail = async (id) => {
        try {
            let result;
            if  (this.isMovie) {
                const {data} = await movieApi.getMovieDetail(id);
                result = data;
            } else {
                const {data} = await tvApi.getTvDetail(id);
                result = data
            }
            console.log("result", result);
            this.setState({
                result
            });
        } catch {
            this.setState({
                error : "Sorry! Cant Find it!!"
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    };
 
    render() {
        const { loading, result, error } = this.state;
        return (
            <DetailPresenter
                loading={loading}
                result={result}
                error={error}
            />
        );
    }
}
