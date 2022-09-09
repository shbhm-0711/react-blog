import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("TRYING FETCH");
    if (!url) {
      return;
    }
    (async () => {
      console.log("TRYING FETCH IN");
      const res = await fetch(url);
      res
        .json()
        .then(setData)
        .then((d) => {
          // console.log(d);
        })
        .then(setLoading(false))
        .catch((e) => {
          console.log(e);
          setError(e);
        });
    })();
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
