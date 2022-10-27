import React from 'react';
import styles from './app.module.scss';
import { List } from '@components/List/List';
import data from '@api/bundle-api.json'
import { Hero } from '@components/Hero/Hero';

function App() {
  return (
    <div className={styles.app}>
        <div className={styles.bgImage}></div>
        <Hero
            title={data.title}
            label={data.label}
            description={data.description}
            imageUrl={data.image.imageUrl}
        />
        <List listItems={data.bundelItems} />
    </div>
  );
}

export default App;
