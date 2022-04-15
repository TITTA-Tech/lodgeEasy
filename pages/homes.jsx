import { SearchForm, SearchFilter, SearchCard } from "../components";

function homes() {
  return (
    <div className="w-full min-h-screen pt-6 md:pt-10 px-5 md:px-10">
      <div className="lg:w-2/5 mx-auto">
        <SearchForm />
      </div>
      <SearchFilter />
      <div className="w-full">
        {Array(10)
          .fill()
          .map((_, i) => {
            return <SearchCard key={i} />;
          })}
      </div>
      <button className="rounded-lg block w-fit text-center text-xs md:text-sm font-semibold bg-secondary px-5 py-2 mx-auto my-16">
        Load more
      </button>
    </div>
  );
}

export default homes;
