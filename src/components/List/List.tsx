import React from 'react';
import { ListItem } from '@components/List/ListItem/ListItem';

import styles from './list.module.scss';

type Item = {
    id: number;
    urlAlias: string;
    titel: string;
    labelValue: string;
    afbeelding: {
        crops: {
            path: string;
        }[]
    };
};

export type ListProps = {
    listItems: Item[];
};

export const List: React.FC<ListProps> = ({listItems}): JSX.Element | null => {
    return listItems.length ?
        <ul className={styles.list}>
            {listItems.map(item => <ListItem
                articleUrl={item.urlAlias}
                imageUrl={item.afbeelding.crops[0].path}
                title={item.titel}
                label={item.labelValue}
                key={item.id}
            />)}
        </ul> : null;
};
