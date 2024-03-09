import React from 'react';
import styles from "./App.module.css"
import Communities from "./pages/Communities/Communities";

const App = () => {
    return (
        <div className={styles.app}>
            <Communities/>
        </div>
    );
};

export default App;