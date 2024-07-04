import React from 'react'
import { useEffect, useState } from 'react'

const Card = () => {
    const [cardData, setData] = useState([]);

    const fetchDataFromAPI = async () => {
        let fetchedData = await fetch('https://jsonplaceholder.typicode.com/photos')
        let processedFetchedData = await fetchedData.json();
        setData(processedFetchedData);
    }

    useEffect(() => {
        fetchDataFromAPI()
    }, [])

    return (
        <div className='h-full flex flex-row justify-start grid grid-cols-4 '>
            {cardData.map((perRecord) => (
                <div key={perRecord.id} className="m-2 p-2 block max-w-[18rem] rounded-lg bg-black text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg"
                            src={perRecord.url}
                            alt="" />
                    </div>
                    <div className="p-6">
                        <p className="text-base" >
                            {perRecord.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card