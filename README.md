## 주요기능

- Built with React, Apollo and GraphQL
- GraphQL를 이용한 서버 구축
- Get Movies, See Movie
- Add to Favourite

## 사용한 패키지 

~~~ts
"packages": [
"React"
"NodeJS"
"GraphQL"
"GraphQL Yoga"
"Apollo"
"React Router"
]
~~~

## 완성화면

|Feature|Photo|Description|
|--|--|--|
|Feature1|<img src="https://user-images.githubusercontent.com/60862525/110752915-38341580-8289-11eb-8db9-69f78b24c43d.png" width=1600/>|**MoviesScreen**</br>GraphQL server에서 받아온 API를  뿌려주기</br> Like&UnLike기능 구현|
|Feature2|<img src="https://user-images.githubusercontent.com/60862525/110753314-c90af100-8289-11eb-80ad-1a939c198737.png" width=1600/>|**MovieScreen**</br>배열로 받아온 데이터를 id를 기반으로 detail View 구성|


## Code Note

#### 1. GraphQL server와 외부 오픈 API통합 (YTS)
- axios를 통해서 url 받아오기

~~~ts
import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

~~~

#### 2. GraphQL schema & resolver에 대한 이해
- Schema는 내가 사용자에게 보내거나 사용자로부터 받을 DATA에 대한 설명
- Resolver는 Query를 Schema에서 보낸 Query를 해결한다.

~~~ts
// graphql/schema
type Movie {
    id: Int!
    title : String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
}

type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestion(id: Int!): [Movie]!
}

// graphql/resolver.js
import { getMovies, getMovie, getSuggestions } from "../db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestion: (_, {id}) => getSuggestions(id)
  },
};

export default resolvers;

~~~
