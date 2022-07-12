import {useEffect, useState} from "react";
import axios from "axios";

const UseApi = (url: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios
      .get(url, config)
      .then((response)=>{setData(response.data)})
      .catch((err)=>{setError(err);})
      .finally(()=>{
        setLoading(value => !value);
        console.log(data)
      });

  },[url, data]);

  const refetchMethod = () => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios
      .get(url, config)
      .then((response)=>{setData(response.data)})
      .catch((err)=>{setError(err);})
      .finally(()=>{setLoading(value => !value);});
}

  return { data, refetchMethod, loading, error }
}

export default UseApi;