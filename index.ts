// src/index.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const User = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
    //   posts: {
    //     create: { title: 'Hello, Prisma!', content: 'This is my first post.' },
    //   },
    },
  });

  console.log(User);

//   const allUsers = await prisma.user.findMany({
//     include: { posts: true },
//   });

//   console.log(allUsers);
}

main()
.then(async () => {
    await prisma.$disconnect();
})
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  });
