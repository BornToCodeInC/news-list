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
        <div className="e2e-hero">
            <img className={styles.picture} src={imageUrl} alt={title}/>
            <div className={styles.label}>{label}</div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    );
};
