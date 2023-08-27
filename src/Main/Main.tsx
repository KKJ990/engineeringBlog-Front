import Maintitle from "./MainTitle";
import MainSidebar from "./MainSidebar";
import MainBorder from "./MainBorder";

const Main = () => {
  return (
    <div className="root">
      <Maintitle />
      <div className="main">
        <div className="sidebar">
          <MainSidebar />
        </div>

        <div className="post">
          <MainBorder />
        </div>

        <div></div>
      </div>
    </div>
  );
};
export default Main;
