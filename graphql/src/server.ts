import { ApolloServer } from "@apollo/server";
import { prisma, type Context} from "./lib/prisma";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { books, todos } from "./data";

type AddTodo = {
  title: string;
};

const typeDefs = `#graphql
  type Book {
    title: String!
    author: String!
  }

  type Todo {
    id: String!
    title: String!
    completed: Boolean!
  }

  type Query {
    getBook: [Book]
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(title: String!): Todo!
    updateTodo(id: String!, title: String! completed: Boolean!): Todo!
    deleteTodo(id: String!): Todo!
  }
`;

const resolvers = {
  Query: {
    // getBook: () => {
    //   return books;
    // },
    getTodos: async (
      _: unknown,
      _args: Record<string, never>,
      context: Context
    ) => {
      return await context.prisma.todo.findMany();
    },
  },
  Mutation: {
    addTodo: (_: unknown, { title }: AddTodo, context: Context) => {
      return context.prisma.todo.create({
        data: {
          title,
          completed: false,
        },
      });
    },

    updateTodo: (
      _: unknown,
      { id, title, completed }: { id: string; title: string; completed: boolean },
      context: Context
    ) => {
      return context.prisma.todo.update({
        where: { id },
        data: { title,completed },
      });
    },

    deleteTodo: (_: unknown, { id }: { id: string }, context: Context) => {
      return context.prisma.todo.delete({
        where: { id },
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({ prisma }),
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

// GUIで叩くAPI
// query GetBook {
//   getBook {
//     title
//     author
//   }
// }
