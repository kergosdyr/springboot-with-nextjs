import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link';
import router from 'next/router';


export default function LinkTest() {
  return (
    <>
      <Link href="/section1/staticProp">get!</Link>
      <button onClick={() => {router.push('/section1/staticProp')} }>click me!</button>
    </>
  );
};

