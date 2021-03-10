import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LIkE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 400px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-color: white;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  letter-spacing: -0.3px;
  margin-top: 8px;
`;

const Rating = styled.h4`
  font-size: 14px;
  line-height: 14px;
  margin-top: 5px;
  color: #555765;
`;

const LikeButton = styled.button`
  //position: relative;
  //background-color: white;
  //border-radius: 20px;
  //height: 30px;
  //width: 30px;
  //margin: 6px 6px 0 0;
  //padding: 4px 4px 4px 4px;
  //cursor: pointer;
  /* Center the content */
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 9px;

  /* Colors */
  background-color: white;
  color: black;

  /* Rounded border */
  border-radius: 9999px;
  height: 32px;
  width: 32px;
  top: -440px;
  right: -225px;
`;

const Movie = ({ id, bg, isLiked, title, rating }) => {
  const [toggleMovie] = useMutation(LIkE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <Title>{title}</Title>
      <Rating>★ {rating}</Rating>
      <LikeButton onClick={toggleMovie}>
        {isLiked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
      </LikeButton>
    </Container>
  );
};

export default Movie;
