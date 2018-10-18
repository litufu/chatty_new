const Query = {
  user: (parent, args, ctx) => {
    return ctx.db.user({ id:args.id,email:args.email })
  },
  users: (parent, args, ctx) => {
    return ctx.db.users()
  },
  messages:(parent, args, ctx) => {
    if(args.userId){
      return ctx.db.user({ id:args.userId }).messages()
    }
    if(args.groupId){
      return ctx.db.group({ id:args.groupId }).messages()
    }
  },
  group:(parent, args, ctx) => {
    return ctx.db.group({ id:args.id })
  },
  groups:(parent, args, ctx) => {
    return ctx.db.groups()
  },
}

module.exports = {
  Query,
}
