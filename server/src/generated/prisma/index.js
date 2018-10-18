"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: "http://192.168.99.100:4466",
  secret: "mysecret42"
});
exports.prisma = new exports.Prisma();
