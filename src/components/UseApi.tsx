import { useEffect, useState } from "react";
import axios from "axios";

function UseApi(url: any){
  const[data, setData] = useState<any>(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  const [name, setName] = useState("");
  const [price, setDescription] = useState("");

  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

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

  const createContent = (body: any) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios
      .post(url, body, config)
      .then((response)=>{setData(response.data)})
      .catch((err)=>{ setError(err); })
      .finally(()=>{ setLoading(false); });
      setDescription("");
      setName("");

  }; 

  const editContent = () => {
    setLoading(true);
    axios
      .put(`${url}/${editId}`, {name: editName, price: editDescription})
      .then((response)=>{setData(response.data)})
      .catch((err)=>{ setError(err); })
      .finally(()=>{ setLoading(false); });
      setEditName("");
      setEditId("");
      setEditDescription("");
    refetch();
  }; 

  const deleteContent = (id: any) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios
      .delete(`${url}/${id}`)
      .then((response)=>{setData(response.data)})
      .catch((err)=>{ setError(err); })
      .finally(()=>{ setLoading(false); });
      setEditId("");
      setEditName("");
    refetch();
  }; 

  return {data, loading, error, refetch, createContent,
          setDescription, setName,
          name, price, editDescription, setEditDescription,
          editContent, editId, setEditId, editName, setEditName,
          deleteContent}
}

export default UseApi;