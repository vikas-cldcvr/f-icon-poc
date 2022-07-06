/* eslint-disable */
import { VueConstructor } from 'vue';

declare module 'vue' {
    export interface GlobalComponents {
        'f-icon': VueConstructor<
            {
                $props: {
                    state: 'primary' | 'success' | 'warning' | 'danger';
                };
            } & Vue
        >;
    }
}
