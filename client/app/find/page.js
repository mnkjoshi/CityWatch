"use client";

import React, { useState } from 'react';
import styles from './find.module.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { useEffect } from 'react';

export default function Page() {

    const positionData = [
        [53.547669872744635,-113.49892055013765],
        [53.54626132681381,-113.50107233663181],
        [53.546662929999364,-113.50885646605707],
        [53.546662929999364,-113.50885646605707],
        [53.546719840133434,-113.51088502231897],
        [53.5466034,-113.5116643]
    ]

    const [file, setFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const [individualHistory, setIndividualHistory] = useState([]);

    const switchHistory = () => {
        if (individualHistory.length === 0) {
            setIndividualHistory(positionData);
        } else {
            setIndividualHistory([]);
        }
    }

    useEffect(() => {
        if (!file) {
          return
        }
        setPreviewUrl(URL.createObjectURL(file))
      
        return () => {
            URL.revokeObjectURL(previewUrl);
            switchHistory();
        }
      }, [file])

    const resetImage = () => {
        setFile(null);
        setPreviewUrl(null);
        setIndividualHistory([]);
    }



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
                    <form className={styles.imageUploadContent}>
                        <input type="file" id="file" hidden onChange={(e) => setFile(e.target.files[0])} />
                        <label htmlFor="file" className={styles.labelFile}>Choose an image...</label>
                    </form>

                    <div className={styles.imagePreview}>
                        <img
                            className={styles.imagePreviewContent} 
                            src={previewUrl ? previewUrl: "https://via.placeholder.com/150"}
                            alt="Preview" 
                        />
                    </div>

                    {/* reset button */}
                    {previewUrl && <button className={styles.resetButton} onClick={resetImage}>Reset</button>}
                            
                </div>


                <MapContainer center={[53.546654, -113.512541]} zoom={22} scrollWheelZoom={true}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Polyline pathOptions={{ color: 'red' }} positions={individualHistory} />
                </MapContainer>




            </div>
        </div>
    );
}
