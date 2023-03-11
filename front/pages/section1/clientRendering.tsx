import {useEffect, useState} from "react";

const Tester = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {

    const res = await fetch('http://localhost:8080/next', {method: 'POST'});
    return res.text();

  }


  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
      <>
        <h1>
          UUID: {data}
        </h1>
      </>
  );

}

export default Tester;

