import Map from './Map';
import { NaverMap } from '@/types/map';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import Markers from '@/components/home/Markers';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Coordinates } from '@/types/store';
import useCurrentStore from '@/hooks/useCurrentStore';

const MapSection = () => {
    const router = useRouter();
    /**
     * router.asPath === '/?zoom={}&lat={}&lng={}'
     * https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams
     */
    const query = useMemo(
        () => new URLSearchParams(router.asPath.slice(1)),
        []
    ); // eslint-disable-line react-hooks/exhaustive-deps
    const initialZoom = useMemo(
        () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
        [query]
    );
    const initialCenter = useMemo<Coordinates>(
        () =>
            query.get('lat') && query.get('lng')
                ? [Number(query.get('lat')), Number(query.get('lng'))]
                : INITIAL_CENTER,
        [query]
    );

    const { initializeMap } = useMap();
    const { clearCurrentStore } = useCurrentStore();
    const onload = (map: NaverMap) => {
        initializeMap(map);
        naver.maps.Event.addListener(map, 'click', clearCurrentStore);
    };
    return (
        <>
            <Map
                onLoad={onload}
                initialZoom={initialZoom}
                initialCenter={initialCenter}
            />
            <Markers />
        </>
    );
};
export default MapSection;
