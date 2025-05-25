import React from 'react';

const FooterComponent : React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white pb-10">
            <div className="p-4">
                <div className="w-auto">
                    <div className="border-gray-200 border-t p-4">
                        <p className="p-2">&copy; {currentYear} Rainbow Fern Consulting</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;