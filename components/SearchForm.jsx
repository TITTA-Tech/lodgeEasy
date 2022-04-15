import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRef } from "react";

function SearchForm() {
  let searchRef = useRef();
  return (
    <form className="bg-primary/10 w-full h-auto rounded-xl flex justify-center items-center">
      <input
        type="search"
        ref={searchRef}
        placeholder="Search for a new home"
        className="bg-transparent flex-1 py-3 px-2 outline-none"
      />
      <button
        type="submit"
        className="bg-primary text-white h-full rounded-xl px-3 py-2 mr-1 flex justify-center items-center text-sm font-semibold"
      >
        <SearchOutlinedIcon className="w-[1.2rem!important] mr-1" />
        Search
      </button>
    </form>
  );
}

export default SearchForm;
