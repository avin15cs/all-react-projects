import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // console.log(res.json());
          console.log("Response: ", res);
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log("Error: ", err.message);
          setError(err);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
