import faker from 'faker';
import { prisma } from '../src/generated/prisma'

export async function getdata(){
  const newGroup = await prisma
  .createGroup({
    name: faker.lorem.words(3),
    users:{
      create:[
          {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
          },
          {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
          },
    ]},
  })
  
}


// export  async function getdata(){
//   const newGroup = await prisma
//     .createGroup({
//       name: faker.lorem.words(3),
//     })
//   const newUser = await prisma
//     .createUser({
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     })
// console.log(newUser)
//   const newMessage = await prisma.createMessage({
//     text: faker.lorem.sentences(3),
//   })
// console.log(newMessage)
//   const userGroupRel = await prisma.createUserGroupRel({
//     user: {connect:{id:newUser.id}},
//     group:{connect:{id:newGroup.id}},
//   })
//
//   const UserMessageRel = await prisma.createUserMessageRel({
//     user: {connect:{id:newUser.id}},
//     message:{connect:{id:newMessage.id}},
//   })
//
//   const groupMessageRel = await prisma.createGroupMessageRel({
//     group: {connect:{id:newGroup.id}},
//     message:{connect:{id:newMessage.id}},
//   })
// }
