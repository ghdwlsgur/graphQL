import movies from '../database/movies';

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => {
      return movies.filter(movie => movie.id === id)[0];      
    }
  },
  Mutation: {
    addMovie: (_, {name, rating}) => {
      // 영화 제목 중복 검사
      if(movies.find(movie => movie.name === name)) return null;

      // 중복이 아니면 데이터베이스에 추가
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

/* 
  리졸버는 사용자가 쿼리를 요청했을 때 이를 서버가 어떻게 처리할 지 정의한 파일이다.
  리졸버는 요청에 대해 단순히 데이터를 반환할 수도 있지만, 직접 데이터베이스를 찾거나,
  메모리에 접근하거나, 다른 API에 요청해서 데이터를 가져올 수 있다.
*/

/* 
  프로젝트가 커지다보면 나중에는 리졸버 구현이 복잡해질텐데, 이를 해결하기 위해
  리졸버 단계에 prisma나 TypeORM 등 데이터베이스 ORM을 사용하기도 한다.
*/