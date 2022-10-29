import React from 'react';

import styles from './hero.module.scss';

export type HeroProps = {
    title: string;
    label: string;
    description: string;
    imageUrl: string;
};

export const Hero: React.FC<HeroProps> = ({
                                              title,
                                              label,
                                              description,
                                              imageUrl
                                          }): JSX.Element => {
    return (
        <div data-id="hero">
            <img className={styles.picture} src={imageUrl} alt={title} data-id="heroImage"/>
            <div className={styles.label} data-id="heroLabel">{label}</div>
            <h1 className={styles.title} data-id="heroTitle">{title}</h1>
            <p className={styles.description} data-id="heroDescription">{description}</p>
        </div>
    );
};
