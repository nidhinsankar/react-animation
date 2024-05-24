import { CiMenuFries } from "react-icons/ci";
const Sidebar = () => {
  return (
    <main className="bg-red-300 h-screen">
      <div className="bg-blue-300 flex flex-col w-[300px]">
        <div className="flex justify-between items-center px-4 py-4">
          <h3>EFFECT</h3>
          <div>
            <CiMenuFries />
          </div>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;
