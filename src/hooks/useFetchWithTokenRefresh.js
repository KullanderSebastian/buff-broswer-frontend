import { useState, useEffect } from "react";
import fetchWithTokenRefresh from "../utils/fetchWithTokenRefresh";

const useFetchWithTokenRefresh = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchWithTokenRefresh(url, options);

                if (!response.ok) throw new Error("Network response was not ok");

                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

export default useFetchWithTokenRefresh;