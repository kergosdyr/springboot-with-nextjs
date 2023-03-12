import Header from '@/components/section1/Header';
import styles from 'styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '@/components/home/MapSection';

export default function Home() {
    return (
        <>
            <Header
                rightElements={[
                    <button
                        className={styles.box}
                        style={{ marginRight: '10px' }}
                        onClick={() => {
                            alert('click!');
                        }}
                        key={'share'}
                    >
                        <AiOutlineShareAlt size={20} />
                    </button>,
                    <Link href="feedBack" className={styles.box} key="link">
                        <VscFeedback size={20} />
                    </Link>,
                ]}
            />

            <main style={{ width: '100%', height: '100%' }}>
                <MapSection />
            </main>
        </>
    );
}
