import RootRouter from "./Router/rootRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
export default function App() {
  return (
    
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}
