import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

// query에 var(변수)가 하나도 없을때는 특별하게 무엇을 적을 필요가 없다.
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  // if(loading){
  //     return "loading..."
  // }
  // if(data && data.movies) {
  //     return data.movies.map(m => <h1>{m.id}</h1>)
  // }

  return (
    <Container>
      <Header>
        <Title>Apollo Movie</Title>
        <Subtitle>With GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading ...</Loading>}
      <Movies>
        {data?.movies?.map((m) => (
          <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
        ))}
      </Movies>
      )}
    </Container>
  );
};

export default Home;
