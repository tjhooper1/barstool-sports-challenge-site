import { useEffect, useState } from "react";
import axios, { CancelToken } from "axios";
import { getMLBData, getNBAData } from "../api/api";

export const useNbaData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let cancelToken: CancelToken | undefined;
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        cancelToken = source.token;
        const response = await getNBAData(cancelToken);
        setData(response.data);
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log("Request Canceled", error.message);
        } else {
          setError(error);
        }
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      cancelToken && source.cancel("Cancelling in cleanup");
    };
  }, []);
  return { data, isLoading, error };
};

export const useMlbData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getMLBData();
        setData(response.data);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { data, isLoading, error };
};
