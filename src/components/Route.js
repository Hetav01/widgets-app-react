import React, { useState, useEffect } from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener("popstate", onLocationChange);
        
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        }
    }, []);

    if (currentPath === path) {
        return children;
    }
    return null;
};

export default Route;