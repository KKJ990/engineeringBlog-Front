import { Route, Routes } from "react-router-dom";
import Test from "../Todo/test";
import TodoMain from "../Todo/TodoMain";
import GitBorder from "../Github/GitBorder";

const RouteMain = () => {
  return (
    <Routes>
      <Route path="/todo" element={<TodoMain />}></Route>
      <Route path="/github" element={<GitBorder />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/test1" element={<Test />}></Route>
    </Routes>
  );
};
export default RouteMain;
