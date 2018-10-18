module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGroup {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Group {
  id: ID!
  name: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String
  users: UserCreateManyWithoutGroupsInput
  messages: MessageCreateManyWithoutToInput
}

input GroupCreateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneWithoutMessagesInput {
  create: GroupCreateWithoutMessagesInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutMessagesInput {
  name: String
  users: UserCreateManyWithoutGroupsInput
}

input GroupCreateWithoutUsersInput {
  name: String
  messages: MessageCreateManyWithoutToInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  name: String
  users: UserUpdateManyWithoutGroupsInput
  messages: MessageUpdateManyWithoutToInput
}

input GroupUpdateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutUsersInput!]
}

input GroupUpdateOneRequiredWithoutMessagesInput {
  create: GroupCreateWithoutMessagesInput
  update: GroupUpdateWithoutMessagesDataInput
  upsert: GroupUpsertWithoutMessagesInput
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutMessagesDataInput {
  name: String
  users: UserUpdateManyWithoutGroupsInput
}

input GroupUpdateWithoutUsersDataInput {
  name: String
  messages: MessageUpdateManyWithoutToInput
}

input GroupUpdateWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutUsersDataInput!
}

input GroupUpsertWithoutMessagesInput {
  update: GroupUpdateWithoutMessagesDataInput!
  create: GroupCreateWithoutMessagesInput!
}

input GroupUpsertWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutUsersDataInput!
  create: GroupCreateWithoutUsersInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  to: Group!
  from: User!
  text: String!
  createdAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  to: GroupCreateOneWithoutMessagesInput!
  from: UserCreateOneWithoutMessagesInput!
  text: String!
}

input MessageCreateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutFromInput {
  to: GroupCreateOneWithoutMessagesInput!
  text: String!
}

input MessageCreateWithoutToInput {
  from: UserCreateOneWithoutMessagesInput!
  text: String!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  to: GroupUpdateOneRequiredWithoutMessagesInput
  from: UserUpdateOneRequiredWithoutMessagesInput
  text: String
}

input MessageUpdateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutFromInput!]
}

input MessageUpdateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutToInput!]
}

input MessageUpdateWithoutFromDataInput {
  to: GroupUpdateOneRequiredWithoutMessagesInput
  text: String
}

input MessageUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredWithoutMessagesInput
  text: String
}

input MessageUpdateWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutFromDataInput!
}

input MessageUpdateWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutToDataInput!
}

input MessageUpsertWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutFromDataInput!
  create: MessageCreateWithoutFromInput!
}

input MessageUpsertWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutToDataInput!
  create: MessageCreateWithoutToInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  to: GroupWhereInput
  from: UserWhereInput
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  username: String
  password: String
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String
  password: String
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGroupsInput {
  email: String!
  username: String
  password: String
  messages: MessageCreateManyWithoutFromInput
  friends: UserCreateManyInput
}

input UserCreateWithoutMessagesInput {
  email: String!
  username: String
  password: String
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  username: String
  password: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  username: String
  password: String
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
}

input UserUpdateInput {
  email: String
  username: String
  password: String
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGroupsInput!]
}

input UserUpdateOneRequiredWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutGroupsDataInput {
  email: String
  username: String
  password: String
  messages: MessageUpdateManyWithoutFromInput
  friends: UserUpdateManyInput
}

input UserUpdateWithoutMessagesDataInput {
  email: String
  username: String
  password: String
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGroupsDataInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutGroupsDataInput!
  create: UserCreateWithoutGroupsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    