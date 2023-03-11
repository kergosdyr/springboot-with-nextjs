import type { NextPage, GetStaticProps } from 'next'

interface Props {
  data: string
}

const Example: NextPage<Props> = ({data}) => {
  return (
    <>
      <h1>
        UUID: 
        {data}
      </h1>
    </>
  );
};

export default Example;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:8080/next', {method: 'POST'});
  const data = await res.text();

  return {
    props: {
      data
    }
  };
}
