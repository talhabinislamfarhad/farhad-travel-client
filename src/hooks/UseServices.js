import { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-retreat-33013.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services]
};

export default UseServices;