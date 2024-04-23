import { NizzaStore } from '@nizza/core'
import { FunctionComponent } from 'react'

type CustomElement<T> = Partial<T & { children: any }>

declare global {
    interface SFC<P = {}> extends FunctionComponent<P> {
        schema?: object
        getSchema?(props?: P): object
    }
    interface Window extends Window {
        dataLayer: any[];
        VTEX_METADATA: {
            account: string,
            renderer: "faststore"
        };
        sendrc: (eventName: string, eventValues?: any) => void
        __RUNTIME__: {
            account: string
            workspace: string
            production: boolean
            culture?: {
                currency?: string
                locale?: string
            }
        }
        nizza: NizzaStore
    }
}
