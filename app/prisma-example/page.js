import prisma from "@/utils/db";

let sayac = 0;
const prismaHandlers = async () => {
  console.log("prisma example starting...");
  sayac = sayac + 1;

  // await prisma.task.create({
  //   data: {
  //     content: "Finish Prisma tutorial : " + sayac,
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg"> No tasks ti show</h2>;
  }

  return (
    <div>
      <h1 className="text-7xl">Prisma Example</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}

            {task.completed}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
