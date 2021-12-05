# graphQL TEST


```javascript
mkdir apollo                                // apollo 폴더 생성
cd apollo                                   // apollo 이동
yarn init -y                                // 기본값 package.json 생성
code .                                      // vscode 오픈
yarn add apollo-server graphql       
yarn add @babel/core @babel/node @babel/preset-env nodemon --dev
```


```javascript
// package.json
"scripts" : {
  "start": "nodemon --exec babel-node src/index.js"
},
```

```javascript
cd apollo
mkdir src                                     // apollo/src 생성
cd src                                        // apollo/src 이동
mkdir database                                // database 생성
mkdir graphql                                 // graphql 생성

파일 생성 index.js
```

```javascript
// database/movies.js

const movies = [
  {
    id: 1, 
    name: '백두산',
    rating: 7
  },
  {
    id: 2,
    name: '히트맨',
    rating: 7,
  },
  {
    id: 3, 
    name: '남산의 부장들',
    rating: 9
  },
  {
    id: 4,
    name: '겨울왕국2',
    rating: 7
  }
];

export default movies;
```

데이터베이스는 외부에서 가져와도 되고 MySQL, mongoDB 등 여러가지 형태로 직접 생성해도 된다.
GraphQL은 서버와 클라이언트 사이에서 오고 가는 쿼리언어이기 때문에 데이터베이스 형태에 제약이 없다.

```javascript
// graphql/typeDefs.js // 스키마 정의

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
```

```javascript
// graphql/resolvers.js // 리졸버 생성

import movies from '../database/movies';

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => {
      return movies.filter(movie => movie.id === id)[0];
    }
  },
  
  Mutation: {
    addMovie: (_, { name, rating }) => {
      if(movies.find(movie => movie.name === name)) return null;
      
      const newMovie = {
        id: movies.length + 1,
        name,
        rating
      };
      
      movies.push(newMovie);
      return newMovie;
    }  
  }    
};

export default resolvers;
```

```javascript
// src/index.js

import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

// ApolloServer는 스키마와 리졸버가 반드시 필요하다.
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});
```




