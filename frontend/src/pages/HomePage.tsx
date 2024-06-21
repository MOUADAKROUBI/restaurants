import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import SearchResultCard from "@/components/SearchResultCard";

const HomePage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<Array<[]>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/restaurant`);
      const data = await response.json();
      setResults(data);
      setLoading(false);
    };

    fetchRestaurants();
  }, []);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center mt-10">
          <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Tuck into a takeway today
          </h1>
          <span className="text-xl">Food is just a click away!</span>
          <SearchBar
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
      <div className="restaurants grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] gap-4 mt-5">
        {
          loading ? <Loading /> : (
            results?.map((restaurant, index) => (
              <SearchResultCard key={index} homePage={true} restaurant={restaurant} />
            ))
          )
        }
        {
          results.length === 0 && (
            <div className="text-center text-2xl font-bold text-gray-600 mt-10 capitalize">
              No restaurants found
            </div>
          )
        }
      </div>

    </>
  );
};

export default HomePage;
