import { ApolloClient, InMemoryCache } from "@apollo/client";

// 제일 중요한 코드
// 새로운 필드를 movie resolver에서 생성했다는 것. 이건 API랑 같은 이름이여야한다.
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            isLiked: (isLiked) => !isLiked,
          },
        });
      },
    },
  },
  cache: new InMemoryCache(),
});

export default client;
