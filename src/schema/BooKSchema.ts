import { gql } from "@apollo/client";
export const BOOK_SCHEMA = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedYear: Int!
  }
  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }
  type Mutation {
    addBook(title: String!, author: String!, publishedYear: Int!): Book!
    updateBook(id: ID!, title: String, author: String, publishedYear: Int): Book!
    deleteBook(id: ID!): Boolean!
  }
`;
export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      publishedYear
    }
  }
`;
export const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      author
      publishedYear
    }
  }
`;
export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $publishedYear: Int!) {
    addBook(title: $title, author: $author, publishedYear: $published Year) {
      id
      title
      author
      publishedYear
    }
  }
`;
export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String, $author: String, $publishedYear: Int) {
    updateBook(id: $id, title: $title, author: $author, publishedYear: $publishedYear) {
      id
      title
      author
      publishedYear
    }
  }
`;


