import { useEffect, useState } from "react"

const useDeveloper = () => {

    const [dev, setDev] = useState({});

    useEffect(() => {
        fetchDev();
    }, [])

    const fetchDev = async () => {
        const data = await fetch("https://api.github.com/users/hardiksrivastavaa");
        const json = await data.json();
        setDev(json);
    }

    return dev;

}

export default useDeveloper;