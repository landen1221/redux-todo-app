import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="static">
      <div className="NavContainer">
        <Toolbar className="toolbar">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1.35em"
            width="1.35em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10l2-1 7-7-1-1-7 7-1 2zM4.52 13.548c-0.494-1.043-1.026-1.574-2.069-2.069l1.548-4.262 2-1.217 6-6h-3l-6 6-3 10 10-3 6-6v-3l-6 6-1.217 2z"></path>
          </svg>
        <h4>MY TODOS</h4>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
