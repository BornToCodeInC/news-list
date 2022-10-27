import React from 'react';

import styles from './listItem.module.scss';

export type ListItemProps = {
    articleUrl: string;
    imageUrl: string;
    label: string;
    title: string;
};

export const ListItem: React.FC<ListItemProps> = ({ articleUrl, imageUrl, label, title }): JSX.Element => {
    return (
        <li className="e2e-li">
            <a
                className={styles.itemContainer}
                href={articleUrl}
            >
                <img
                    className={styles.picture}
                    src={imageUrl}
                    alt={title}
                />
                <div className={styles.textContainer}>
                    <div className={styles.label}>{label}</div>
                    <h2 className={styles.title}>{title}</h2>
                </div>
            </a>
        </li>
    );
};
