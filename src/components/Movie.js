import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  background-color: white;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const Movie = ({ id, bg, isLiked }) => {
  return (
    <>
      <Container>
        <Link to={`/${id}`}>
          <Poster bg={bg} />
        </Link>
        <button>{isLiked ? "Unlike" : "like"}</button>
      </Container>
    </>
  );
};

export default Movie;
