import Maintitle from "./MainTitle";
import MainSidebar from "./MainSidebar";
import MainBorder from "./MainBorder";

const Main = () => {
  return (
    <div className="todo-root">
      <Maintitle />

      <div className="todo-main">
        <div className="todo-sidebar">
          <MainSidebar />
        </div>

        <div className="todo-post">
          <MainBorder />
        </div>

        <div></div>
      </div>
    </div>
  );
};
export default Main;
