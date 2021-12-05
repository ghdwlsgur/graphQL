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

/*
  데이터베이스는 외부에서 가져와도 되고 MySQL, mongoDB 등 여러가지 형태로 직접 생성해도 된다.
  GraphQL은 서버와 클라이언트 사이에서 오고 가는 쿼리 언어이기 때문에 데이터베이스 형태에 제약이 없다.
*/