/* eslint-disable */
import { VueConstructor } from 'vue';
import {
    FComplexTypeProp,
    FComplexPriorityProp,
    FComplexAssignee,
    FComplexLanguageProp,
} from './src/f-complex/f-complex';
declare module 'vue' {
    export interface GlobalComponents {
        'f-icon': VueConstructor<
            {
                $props: {
                    state?: 'primary' | 'success' | 'warning' | 'danger';
                };
            } & Vue
        >;

        'f-complex': VueConstructor<
            {
                $props: {
                    type: FComplexTypeProp;

                    priority?: FComplexPriorityProp | undefined;

                    assignee?: null | FComplexAssignee | undefined;

                    language?: FComplexLanguageProp | undefined;

                    active?: boolean | undefined;
                };
            } & Vue
        >;
    }
}
