import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRef } from "react";

function SearchForm() {
  let searchRef = useRef();
  return (
    <form className="bg-primary/10 w-full h-auto rounded-2xl flex justify-center items-center pr-2">
      <input
        type="search"
        ref={searchRef}
        placeholder="Search for a new home"
        className="bg-transparent flex-2 py-3 px-2 outline-none w-full"
      />
      <button
        type="submit"
        className="bg-primary text-white w-fit flex-1 h-full rounded-full px-3 py-2"
      >
        <SearchOutlinedIcon className="w-[1.2rem!important]" />
      </button>
    </form>
  );
}

export default SearchForm;
