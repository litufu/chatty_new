import { User } from './User'
import { Group } from './Group'
import { Message } from './Message'
import { Query } from './Query'
const resolvers = {
  Query,
  User,
  Group,
  Message,
}

module.exports = {
  resolvers,
}
