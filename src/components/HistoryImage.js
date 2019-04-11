import React from 'react';

export default ({src, updated, title, handleClickDelete}) => {
    return (
        <div className="history__image">
            <div className="history__left">
                <div className="history__cover">
                    <img className="history__src" src={ src } alt= {title} />
                    <div className="history__delete" onClick={handleClickDelete}>[x]</div>
                </div>
            </div>
            <div className="history__right">
                <div className="history__title">{ title }</div>
                <div className="history__info">{ updated.toLocaleString() }</div>
            </div>
        </div>
    );
}