import { useEffect, useState } from "react";
import axios from "axios";

function UseApi(url: any ){
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios.get(url, config)
        .then((Response) => {setData(Response.data);})
        .catch((err) => {setError(err);})
        .finally(() => {setLoading(false); });
    },[url]);

    return {data, loading, error}

}

export default UseApi;