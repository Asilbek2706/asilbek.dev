import { useState } from 'react';

interface Props {
    onFinished?: () => void;
}

const Loader = ({ onFinished }: Props) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleAnimationEnd = () => {
        setIsFadingOut(true);
        if (onFinished) {
            setTimeout(onFinished, 500);
        }
    };

    return (
        <div className={`manga-loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <h1 className="manga-title" data-text="ASILBEK-KAROMATOV.DEV">
                    ASILBEK-KAROMATOV<span className="text-red">.DEV</span>
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