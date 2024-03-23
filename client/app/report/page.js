"use client";

import React from 'react';
import styles from './report.module.css';

export default function Page() {
    return (
        <div className={styles.page}>
            {/* Title */}
            <div className={styles.titleRank}>
                <h4 className={styles.titleText}>View recent reports</h4>
                <p className={styles.titleText1}>Recent Reports</p>
            </div>    
        </div>
        );
}
