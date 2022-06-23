import style from "../styles/Main.module.css";
import SearchBox from "./SearchBox.js";
import ListBox from "./ListBox.js";
import Overview from "./Overview.js";

function Main() {
  return (
    <div className={style.mainContainer}>
      <SearchBox />
      <ListBox />
      <Overview />
    </div>
  )
}

export default Main;