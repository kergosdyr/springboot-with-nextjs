import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@/components/section1/noSSR'), {
    ssr: false,
});

const Tester = () => {
    const [data, setData] = useState('');

    const fetchData = async () => {
        const res = await fetch('http://localhost:8080/next', {
            method: 'POST',
        });
        return res.text();
    };

    useEffect(() => {
        fetchData().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <>
            <h1>
                <NoSSR />
                UUID: {data}
            </h1>
        </>
    );
};

export default Tester;
