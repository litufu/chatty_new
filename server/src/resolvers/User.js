const User = {
  id: root => root.id,
  email: root => root.email,
  username: root => root.username,
  messages: (parent, args, ctx) => ctx.db.user({ id: parent.id }).messages(),
  groups: (parent, args, ctx) => ctx.db.user({ id: parent.id }).groups(),
  friends: (parent, args, ctx) => ctx.db.user({ id: parent.id }).friends(),
}

module.exports = {
  User,
}
