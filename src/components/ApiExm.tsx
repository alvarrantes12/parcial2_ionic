import { useEffect, useState } from "react";
import axios from "axios";

function ApiExm(url: any){
  const[data, setData] = useState<any>(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    };

    setLoading(true);
    axios
      .get(url, config)
      .then((response) => {setData(response.data); })
      .catch((err) => {setError(err); })
      .finally(() => {setLoading(false);});
  }, [url]);

  const refetch = () => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios
      .post(url,{name: "Lista Datos Index"}, config)
      .then((response)=>{setData(response.data)})
      .catch((err)=>{ setError(err); })
      .finally(()=>{ setLoading(false); });
  };

  return {data, loading, error, refetch}
}

export default ApiExm;