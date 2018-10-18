const Message = {
  id: root => root.id,
  text: root => root.text,
  to: (parent, args, ctx) => ctx.db.message({ id: parent.id }).group(),
  from: (parent, args, ctx) => ctx.db.message({ id: parent.id }).user(),
  createdAt:root => root.createdAt,
}

module.exports = {
  Message,
}
