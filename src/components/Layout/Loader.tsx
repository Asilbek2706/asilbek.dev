import { useState } from 'react';

const Loader = ({ onFinished }: { onFinished: () => void }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleAnimationEnd = () => {
        setIsFadingOut(true);
        setTimeout(onFinished, 500);
    };

    return (
        <div className={`manga-loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <h1 className="manga-title" data-text="ASILBEK.DEV">
                    ASILBEK<span className="text-red">.DEV</span>
                </h1>

                <div className="loader-progress-bar">
                    <div
                        className="progress-fill"
                        onAnimationEnd={handleAnimationEnd}
                    ></div>
                </div>

                <div className="loader-status-code">SYSTEM_INIT_COMPLETE...</div>
            </div>
        </div>
    );
};

export default Loader;