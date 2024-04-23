import React, { useEffect, useMemo, useState } from 'react';
import { NizzaStore, NizzaAddToCartHandler } from '@nizza/core';
import { useNzScript } from '@nizza/utils';

import fastStoreConfig from "../../faststore.config";

const ACCOUNT = fastStoreConfig.api.storeId;
const NIZZA_PLAYER_SCRIPT = 'https://cdn.nizza.com/player/prod/nz-index.es.js';

interface LiveShoppingWCProps {
    id: string;
}

export default function LiveShoppingWC({ id: livestreamingId }: LiveShoppingWCProps) {
    const [nizza, setNizza] = useState<NizzaStore | null>(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    const id = 'nizza-player';

    useEffect(() => {
        const checkNizza = () => {
            if (window?.nizza) {
                setNizza(window.nizza);
                setIsScriptLoaded(true);
            } else {
                console.error('Nizza script not loaded properly');
            }
        };

        if (typeof window !== 'undefined') {
            if (window.nizza) {
                checkNizza();
            } else {
                const script = document.createElement('script');
                script.src = NIZZA_PLAYER_SCRIPT;
                script.onload = checkNizza;
                script.onerror = () => {
                    console.error('Failed to load the Nizza script');
                    setIsScriptLoaded(false);
                };
                document.head.appendChild(script);
            }
        }
    }, []);

    const addToCart: NizzaAddToCartHandler = async ({ product, quantity = 1 }) => {
        console.info('!!! FAST STORE addToCart !!!');
    };

    const livestreamingProps = useMemo(() => ({
        environment: 'prod',
        account: ACCOUNT,
        idLivestreaming: livestreamingId,
        originOfProducts: 'VTEX',
        isInGlobalPage: false,
        isInfinite: true,
        redirectTo: false,
        showChat: true,
        showLike: true,
        showQuickView: true,
        showProductsCarousel: false,
        showSidebarProducts: true,
        showViewers: true,
        time: 10,
        currentOrderForm: 'orderFormId',
        setUTM: () => console.info('!!! FAST STORE setUTM !!!'),
        addToCartConfig: {
            actionFactory: {
                addToCart,
            },
        },
    }), [livestreamingId]);

    useNzScript(
        { account: ACCOUNT, store: nizza },
        [{ id, src: NIZZA_PLAYER_SCRIPT, renderArgs: [livestreamingProps] }],
        [nizza?.instanceId, 'orderFormId']
    );



    return <div id={id} />;
}
