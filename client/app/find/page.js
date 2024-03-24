"use client";

import React from 'react';
import styles from './find.module.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function Page() {
    return (
        <div className={styles.page}>
            {/* Title */}
            <div className={styles.titleRank}>
                <h4 className={styles.titleText}>Locate</h4>
                <p className={styles.titleText1}>Find individuals through image search in our database</p>
            </div>
            <div className={styles.searchContainer}>

                {/* Image upload section */}
                <div className={styles.imageUpload}>
                    <div className={styles.imageUploadContent}>
                        <input type="file" id="file" hidden/>
                        <label htmlFor="file" className={styles.labelFile}>Choose an image...</label>
                    </div>
                </div>


                <MapContainer center={[53.546654, -113.512541]} zoom={22} scrollWheelZoom={true}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>


            </div>
        </div>
    );
}
