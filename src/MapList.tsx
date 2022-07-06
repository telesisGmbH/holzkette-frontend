import { List, useListContext } from 'react-admin';
import { Stack, Typography } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJuZXNwcmVtYmVyZyIsImEiOiJjanh1b29iZHgwMzlmM2NteW8weDU5a3NjIn0.Zk131XKgBQsq0kADqQpmEg';

export const MapList = () => {

    const { data } = useListContext();

    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        // @ts-ignore
        map.current = new mapboxgl.Map({
            // @ts-ignore
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-71.060316, 48.432044],
            zoom: 6
        });
    });

    useEffect(() => {
        console.log(data);
        data && data.map(item => {
            if (map && map.current) {
                item?.location?.coordinates && new mapboxgl.Marker().setLngLat(item?.location?.coordinates).addTo(map.current)
            }
        })
    }, [data])

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
        // <Stack spacing={2} sx={{ padding: 2 }}>
        //     {data.map(book => (
        //         <Typography key={book.id}>
        //             <i>{book.title}</i>, by {book.author} ({book.year})
        //         </Typography>
        //     ))}
        // </Stack>
    );
}