import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './src/schema';
import { resolvers } from './src/resolvers';
import { mock } from './data/mock';
import { prisma } from './src/generated/prisma'
import {getdata} from './data/fakedata'

const PORT = 4000;
getdata()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req=>({
    ...req,
    db: prisma,
  }),
 });
server.listen({ port: PORT }).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
