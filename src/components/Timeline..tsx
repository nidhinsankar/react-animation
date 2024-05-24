const eventList = [
  {
    title: "task 1",
    content: "this is the task 1",
  },
  {
    title: "task 2",
    content: "this is the task 2",
  },
  {
    title: "task 3",
    content: "this is the task 3",
  },
  {
    title: "task 4",
    content: "this is the task 4",
  },
];

const Timeline = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center relative">
      {eventList?.map((task) => (
        <Item title={task?.title} content={task?.content} />
      ))}
    </div>
  );
};

const Item = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="bg-gray-500 text-white w-[200px] px-4 py-2 shadow-lg rounded-lg">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
export default Timeline;
