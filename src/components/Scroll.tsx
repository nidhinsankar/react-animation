import { useScroll, useTransform, motion } from "framer-motion";
import { users } from "../utils/users.";

const Scroll = () => {
  return (
    <div className="flex flex-col  h-screen bg-white">
      <ScrollCore />
    </div>
  );
};

const ScrollCore = () => {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div className="h-[120vh] transform scale-[0.8] flex items-center justify-center p-10 relative">
      <div className="w-full py-40 relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} />
        <Card translate={translate} rotate={rotate} scale={scale} />
      </div>
    </div>
  );
};

const Header = ({ translate }: { translate: any }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      <h2 className="text-3xl font-semibold">
        Unleash the Power of <br />{" "}
        <span className="text-5xl font-bold lg:text-6xl mt-1 leading-none">
          Scroll Animations
        </span>
      </h2>
    </motion.div>
  );
};

const Card = ({
  translate,
  rotate,
  scale,
}: {
  translate: any;
  rotate: any;
  scale: any;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d,0 9px #0000004a,0 37px 37px #00000042,0 84px 50px #00000026,0 149px 60px #0000000a,0 233px 65px #0000003",
      }}
      className="max-w-5xl h-[30rem] md:h-[40rem] w-full mx-auto -mt-12 border-4 border-[#6c6c6c] p-6 bg-[#222222] rounded-[30px] shadow-2xl "
    >
      <div className="w-full h-full bg-gray-100 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4 p-4 overflow-hidden">
        {users.map((user) => (
          <motion.div
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px  rgb(0 0 0/0.1),0 8px 10px -6px rgb(0 0 0/0.1)",
            }}
            key={user.name}
            className=" bg-white relative rounded-md"
          >
            <img src={user.image} alt={user.name} />
            <span className="bg-white font-bold text-base absolute top-2 right-2 px-2 py-1 rounded-3xl">
              {user.badge}
            </span>
            <div className="p-4">
              <h3 className="font-bold text-xl">{user.name}</h3>
              <p className="text-xs text-gray-400">{user.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Scroll;
