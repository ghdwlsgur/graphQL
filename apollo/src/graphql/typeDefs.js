import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: Int!
    name: String!
    rating: Int!
  }

  type Query {
    movies: [Movie]!
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(name: String!, rating: Int!): Movie!
  }
`;

export default typeDefs;

/*
  스키마는 서버에 어떻게 데이터를 요청할지 정의한 파일이다. 
  요청 시 어떤 데이터를 얼마나 요청할지, 각각의 데이터의 자료형이 무엇이고, 어떤 데이터를
  필수로 요청할지에 대한 정보가 담긴다. 즉, 사용자는 반드시 스키마에 정의된 형태로 서버에
  요청해야 한다.

  Query: 데이터베이스에서 데이터를 읽는 요청
  Mutation: 데이터베이스를 수정하는 요청

  스키마엔 Query, Mutation와 같이 2가지 요청이 있다.
  이렇게 요청을 구분한 이유는 데이터베이스 읽기 요청은 무한정으로 동시에 수행될 수 있지만,
  데이터베이스 수정 요청은 순차적으로 수행되야 하기 때문이다.

  위 코드가 의미하는 바를 해석해보자.
  서버에 Query 형태로 movies를 요청하면 Movie의 배열이 반드시 반환된다.
  서버에 Mutation형태로 파라미터와 함께 addMovie를 요청하면 Movie가 반드시 반환된다.

  !: Not nullable. (데이터가 꼭 있어야 한다.)
*/



