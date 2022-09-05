import { useEffect, useState } from "react";

const useFetch = (url, dependencies) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) {
      return;
    }
    (async () => {
      const res = await fetch(url);
      res
        .json()
        .then(setData)
        .then((d) => {
          console.log(d);
        })
        .then(setLoading(false))
        .catch((e) => {
          console.log(e);
          setError(e);
        });
    })();
  }, [url, ...dependencies]);

  return [data, loading, error];
};

export default useFetch;
