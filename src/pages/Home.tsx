import { Link } from "react-router-dom";
import scrollIMG from "../assets/scroll.png";
import { motion } from "framer-motion";
const list = [
  {
    img: scrollIMG,
    title: "Scroll Animation",
    link: "/scroll-animation",
  },
  {
    img: scrollIMG,
    title: "Timeline",
    link: "/timeline",
  },
  {
    img: scrollIMG,
    title: "Sidebar",
    link: "/sidebar",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <h2 className="text-xl font-semibold text-center py-4">
        Animation in <span className="text-2xl font-bold">React</span>
      </h2>
      <div className="md:max-w-7xl mx-auto w-[95%] mt-5">
        {list.map((item) => (
          <Link to={item?.link}>
            <motion.div
              className="w-[320px] bg-white text-gray-500 rounded-xl"
              whileHover={{
                boxShadow:
                  "rgba(50,50,93,0.25) 0 2px  5px -1px, rgba(0,0,0,0.3) 0 1px 3px -1px",
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.76,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <img src={item?.img} alt={item?.title} className="rounded-xl" />
              <div className="p-4">
                <h3>{item?.title}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
