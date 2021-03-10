import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

//query에 var(변수)가 있을때 (ex: id??)는 적어야한다.
// apollo, React, GraphQL, React Apollo를 위해.
// 첫째 줄 query는 apollo를 위한 것
// movie~ 부터는 우리 서버를 위한 것
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      rating
      language
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};

export default Detail;
