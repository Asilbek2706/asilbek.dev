import React from 'react';

const Loader: React.FC = () => (
    <div className="manga-loader-container">
        <div className="text-center">
            <div className="spinner-manga mb-3"></div>
            <h5 className="manga-text-loading">Portfolio yuklanmoqda...</h5>
        </div>
    </div>
);

export default Loader;