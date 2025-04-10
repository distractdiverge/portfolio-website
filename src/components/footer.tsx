import React from 'react';
import HorizontalDash from './horizontal-dash';

const FooterComponent : React.FC = () => {
    return (
        <footer className="bg-white pb-10">
            <div className="p-4">
                <div className="w-auto">
                    <div className="border-gray-200 border-t p-4">
                        <p className="p-2">&copy; Rainbow Fern Consulting</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;