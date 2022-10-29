import React from 'react';

import styles from './listItem.module.scss';

export type ListItemProps = {
    articleUrl: string;
    imageUrl: string;
    label: string;
    title: string;
};

export const ListItem: React.FC<ListItemProps> = ({
                                                      articleUrl,
                                                      imageUrl,
                                                      label,
                                                      title
                                                  }): JSX.Element => {
    return (
        <li data-id="listItem">
            <a
                className={styles.itemContainer}
                href={articleUrl}
            >
                <img
                    className={styles.picture}
                    src={imageUrl}
                    alt={title}
                    data-id="listItemImage"
                />
                <div className={styles.textContainer}>
                    {label && <div
                        className={styles.label}
                        data-id="listItemLabel">
                        {label}
                    </div>}
                    {title && <h2
                        className={styles.title}
                        data-id="listItemTitle">
                        {title}
                    </h2>}
                </div>
            </a>
        </li>
    );
};
