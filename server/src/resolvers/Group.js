const Group = {
  id: root => root.id,
  name: root => root.name,
  users: (parent, args, ctx) => ctx.db.group({ id: parent.id }).users(),
  messages: (parent, args, ctx) => ctx.db.group({ id: parent.id }).messages(),
}

module.exports = {
  Group,
}
