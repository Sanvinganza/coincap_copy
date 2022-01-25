import React from "react";

export const Header = (props) => {
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <div className="menu">
                        <div className="menu__item">
                            <div className="subtitle"> Bitcoin </div>
                            <div className="price"> $35,926.89 </div>
                        </div>
                        <div className="menu__item">
                            <div className="subtitle"> Ethereum </div>
                            <div className="price"> $2,363.37</div>
                        </div>
                        <div className="menu__item">
                            <div className="subtitle"> Tether </div>
                            <div className="price"> $1.00 </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}