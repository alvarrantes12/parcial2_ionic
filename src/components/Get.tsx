import axios from "axios";

export async function getAxios(path: any) {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    let response = await axios.get(path, config)
    return response;
}