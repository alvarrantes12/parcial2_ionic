import { useEffect, useState } from "react";
import { getAxios } from "./Get";

function UseApi(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);
        getAxios(url)
            .then((response) => { setData(response.data); })
            .catch((err) => { setError(err); })
            .finally(() => { setLoading(false);})
    }, [url]);

    return { data, loading, error}
}

export default UseApi;