import { Route, Routes } from "react-router-dom";
import TodoMain from "../Todo/TodoMain";
import GitBorder from "../Github/GitBorder";

const RouteMain = () => {
  return (
    <Routes>
      <Route path="/todo" element={<TodoMain />}></Route>
      <Route path="/github" element={<GitBorder />}></Route>
    </Routes>
  );
};
export default RouteMain;
