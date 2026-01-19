import React from 'react';
import './pro2.css';

function Pro2({ data }) {
    return (
        <div className='pro'>
            <div className="pro-card">
                <div className="pro-img">
                    <img src={ data.avatar } alt={ data.name } />
                    <div className="st">
                        <p className='st-p'> { data.st } </p>
                    </div>
                </div>
                <div className="img-glas">
                    <img src={ data.photo } className='img-g' alt="glasses" />
                </div>
                <div className="pro-card-content">
                    <div className="P">
                        <h6 className='bike'> { data.p } </h6>
                    </div>
                    <div className="pro-title">
                        <h6 className='the1'> { data.name } </h6>
                    </div>
                    <div className="pro-P">
                        <h6 className='res'> { data.PP } </h6>
                    </div>
                    <div className="pro-bottom">
                        <div className="pro-category">
                            {data.category}
                        </div>
                        <div className="pro-price">
                            {data.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pro2;