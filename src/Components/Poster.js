import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  color: white;
  width: 125px;
`;


const Votes = styled.span`
  font-size: 12px;
  position: relative;
  z-index: 9;
  transition: opacity 0.3s ease-in-out;
`;

const Image = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
  &:hover {
    opacity: 0.3;
  }
  
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 2;
  height: 180px;
  margin-bottom: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5px;
  ${Votes} {
    opacity: 0;
  }
  &:hover {
    ${Votes} {
      opacity: 1;
    }
  } 
`;

const Data = styled.div`
  width: 100%;
`;

const Title = styled.span`
  color: rgba(255, 255, 255, 0.8);
  display: block;
  margin-bottom: 7px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  font-size: 12px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const DataColumn = styled.div``;

const Poster = ({ imageUrl, rating, title, year, isTv,seasons, id }) => (
  <Link to={isTv ? `/show/${id}` : `/movie/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          backgroundImage={
              imageUrl
                ? `https://image.tmdb.org/t/p/w500${imageUrl}`
                : require("../assets/noPoster.png")
          }
        />
        <Votes>
          <span role="img" aria-label="Stars">
            ⭐️
          </span>{" "}
          {rating}/10
        </Votes>
      </ImageContainer>
      <Data>
        <DataColumn>
          <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
          <Year>{year}</Year>
        </DataColumn>
        {seasons && (
          <DataColumn>
            {seasons === 1 ? "1 season" : `${seasons} seasons.`}
          </DataColumn>
        )}
      </Data>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  seasons: PropTypes.string,
  isTv: PropTypes.bool.isRequired
};

export default Poster; 