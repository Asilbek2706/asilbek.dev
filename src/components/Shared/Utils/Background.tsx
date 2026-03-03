import React from 'react';
import styles from '../../../styles/Layout/Background.module.scss';
import {useBackground} from '../../../context/BackgroundContext.tsx';

const Background: React.FC = () => {
    const {variant} = useBackground();

    return (
        <div className={`${styles.bgContainer} ${styles[variant]}`}>
            <div className={styles.shapeWrapper}>
                <svg viewBox="0 0 800 800" fill="none" className={styles.spiralSvg}>
                    {[...Array(20)].map((_, i) => (
                        <circle
                            key={i}
                            cx="400" cy="400"
                            r={100 + i * 20}
                            stroke="rgba(255, 255, 255, 0.03)"
                            strokeWidth="0.3"
                        />
                    ))}
                </svg>
            </div>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default Background;