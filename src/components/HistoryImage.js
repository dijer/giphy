import React from 'react';

export default ({src, updated, title, handleClickDelete}) => {
    return (
        <div className="history__image">
            <div className="history__src">
                <div className="history__cover">
                    <img src={ src } alt= {title} />
                    <div className="history__delete" onClick={handleClickDelete}>[x]</div>
                </div>
            </div>
            <div className="history__descr">
                <div className="history__title">{ title }</div>
                <div className="history__info">{ updated.toLocaleString() }</div>
            </div>
        </div>
    );
}