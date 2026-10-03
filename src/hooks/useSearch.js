import { useEffect, useState, useRef } from "react";
import { searchWeb } from "../services/searchApi";

const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lastQueryRef = useRef("");

  useEffect(() => {
    if (!query) return;

    // Prevent duplicate API calls for the same query
    if (lastQueryRef.current === query) {
      return;
    }

    lastQueryRef.current = query;

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await searchWeb(query);

        setResults(data.results || []);
        setSummary(data.summary || "");
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
    summary,
    loading,
    error,
  };
};

export default useSearch;