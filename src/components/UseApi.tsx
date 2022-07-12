import { useEffect, useState } from "react";
import axios from "axios";

function UseApi(url: any){
  const[data, setData] = useState<any>(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


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
      .get(url, config)
      .then((response)=>{setData(response.data)})
      .catch((err)=>{ setError(err); })
      .finally(()=>{ setLoading(false); });

      
  };


  return {data, loading, error, refetch,
          setDescription, setName,
          name, description
        }
}

export default UseApi;