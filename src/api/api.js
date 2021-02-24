import axios from "axios";
import { useState, useCallback } from "react";

function useFetch() {
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(async (dataSize) => {
    setLoading(true);

    try {
      const response = await axios.get(
        dataSize === "small"
          ? "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
          : "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
      );
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  return { loading, fetchData };
}

export default useFetch;
