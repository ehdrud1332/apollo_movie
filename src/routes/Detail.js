import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//query에 var(변수)가 있을때 (ex: id??)는 적어야한다.
// apollo, React, GraphQL, React Apollo를 위해.
// 첫째 줄 query는 apollo를 위한 것
// movie~ 부터는 우리 서버를 위한 것
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      language
      medium_cover_image
      description_intro
      isLiked @client
    }
    suggestion(id: $id) {
      id
      medium_cover_image
    }
  }
`;
// const GET_MOVIE = gql`
//   query getMovie($id: Int!) {
//     movie(id: $id) {
//       id
//       title
//       medium_cover_image
//       language
//       rating
//       description_intro
//       isLiked @client
//     }
//     suggestions(id: $id) {
//       id
//       medium_cover_image
//     }
//   }
// `;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const PosterContainer = styled.div`
  height: 700px;
  width: 500px;
`;

const Poster = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Column>
        {/*항상 삼항 연산자(ternary operator)로 만들어주자*/}
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        <Subtitle>
          {data?.movie?.language} . {data?.movie?.rating}
        </Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <PosterContainer>
        <Poster bg={data?.movie?.medium_cover_image}></Poster>
      </PosterContainer>
    </Container>
  );
};

export default Detail;
