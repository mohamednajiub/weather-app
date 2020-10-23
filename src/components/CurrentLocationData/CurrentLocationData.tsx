import React from 'react';


interface CurrentLocationDataProps {
    city: string;
    country: string;
	status: string;
}

const CurrentLocationData: React.FC<CurrentLocationDataProps> = ({city, country, status}) => {

    return (
        <>
            <h1>{city}, {country}</h1>
            <p>{status}</p>
        </>
    )

}

export default CurrentLocationData;