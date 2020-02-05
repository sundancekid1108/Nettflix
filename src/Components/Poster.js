import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Poster = ({
    imageUrl, rating, name, year, seasons, id
}) => null;
//Poster객체

Poster.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string.isRequired,
    seasons: PropTypes.string
};

export default Poster;