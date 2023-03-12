import Header from '@/components/home/Header';
import MapSection from '@/components/home/MapSection';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import useStores from '@/hooks/useStores';
import { Fragment, useEffect } from 'react';
import DetailSection from '@/components/home/DetailSection';

interface Props {
    stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
    const { initializeStores } = useStores();

    useEffect(() => {
        initializeStores(stores);
    }, [initializeStores, stores]);
    return (
        <>
            <Fragment>
                <Header />
            </Fragment>

            <main
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <MapSection />
                <DetailSection />
            </main>
        </>
    );
};

export async function getStaticProps() {
    /** TODO: next api routes로 불러오기 */
    const stores = (await import('../public/stores.json')).default;

    return {
        props: { stores },
        revalidate: 60 * 60,
    };
}

export default Home;
