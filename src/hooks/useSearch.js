import { useEffect, useState } from "react";
import { searchWeb } from "../services/searchApi";

const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [peopleAlsoAsk, setPeopleAlsoAsk] = useState([]);
  const [relatedSearches, setRelatedSearches] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await searchWeb(query);

        setResults(data.organic || []);
        setPeopleAlsoAsk(data.peopleAlsoAsk || []);
        setRelatedSearches(data.relatedSearches || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return {
    results,
    peopleAlsoAsk,
    relatedSearches,
    loading,
    error,
  };
};

export default useSearch;