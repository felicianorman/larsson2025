"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const GoogleMapComponent = () => {
    const googleMapRef = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
            version: "beta",
            libraries: ["places", "geometry"],
        });

        loader.load().then(() => {
            const position = { lat: 59.401414539424245, lng: 18.08900238075827 }; // Example coordinates

            if (googleMapRef.current) {
                const map = new google.maps.Map(googleMapRef.current, {
                    zoom: 10,
                    center: position,
                });

                const marker = new google.maps.Marker({
                    position,
                    map,
                    title: "Hello World!",
                });
            }
        });

        return () => {
            googleMapRef.current = null; 
        };
    }, []); 

    return <div ref={googleMapRef} style={containerStyle} />;
};

export default GoogleMapComponent;
