import React, { useEffect } from 'react'
import { useState } from 'react';
import { API_KEY } from '../Key'

const CONTEXT_API = "b75bf97cffcefdf16";

const UseGoogle = (term) => {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_API}&q=${term}`)
                .then(res => res.json())
                .then(result => setData(result))
        }
        fetchData()
    }, [term])

    return { data };
}


export default UseGoogle;