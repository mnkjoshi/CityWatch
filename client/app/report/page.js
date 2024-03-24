"use client";

import React, { useState } from 'react';
import styles from './report.module.css';

export default function Page() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            console.log('File ready for upload: ', selectedFile);
        }
    };

    return (
        <div className={styles.page}>
            {/* Title */}
            <div className={styles.titleRank}>
                <h4 className={styles.titleText}>View recent reports</h4>
                <p className={styles.titleText1}>Recent Reports</p>
            </div>
            
            {/* Upload section */}
            <div className={styles.uploadSection}>
                <input type="file" onChange={handleFileChange} className={styles.fileInput} />
                <button onClick={handleUpload} className={styles.uploadButton}>Upload Image</button>
            </div>
        </div>    
    );
}
