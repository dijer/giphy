import React from 'react';
import {connect} from 'react-redux';
import HistoryImage from './HistoryImage';
import {deleteImage} from '../actions'
import {NavLink, Redirect} from 'react-router-dom'

class HistoryPaginator extends React.Component {

    renderImages = () => {
        const { images } = this.props;
        if (!images.length) {
            return null;
        }
        const items = images.map(image =>
            <HistoryImage key={image.id} src={image.src} updated={image.updated} title={image.title} handleClickDelete={this.handleClickDelete(image.id)} />
        );
        
        return(
            <>
                { items }
            </>
        );
    }

    handleClickDelete = id => () => {
        const { deleteImage } = this.props;
        deleteImage(id);
    }

    getPaginator = () => {
        const { page, limit, total } = this.props;
        
        if (!total) {
            return null;
        }
        
        const pages = Math.floor((total - 1) / limit) + 1;
        
        if (page > pages) {
            return <Redirect to={`/history/${pages}`} />
        }

        const pager = [];
        for (let pageN = 1; pageN <= pages; pageN++) {
            pager.push(
                <li className="paginator__item shadow" key={pageN}>
                    <NavLink to={`/history/${pageN}`} className="paginator__link" activeClassName="paginator__link_active">
                        { pageN }
                    </NavLink>
                </li>
            );
        }
        return <ul className="paginator">{pager}</ul>
    }

    render() {
        return(
            <div className="history shadow">
                <div className="history__images">
                    { this.renderImages() }
                    { this.getPaginator() }
                </div>
            </div>
        )
    }
}

function mapStateToProps (state, {match}) {
    const { page } = match.params;
    const { images } = state;
    const limit = 5;
    const offset = (page - 1) * limit;
    const imagesFilter = images.slice(offset, offset + limit);
    const total = images.length;
    return {
        images: imagesFilter,
        limit: 5,
        page,
        total
    }
}

const mapToDispatch = {
    deleteImage
}

export default connect(mapStateToProps, mapToDispatch)(HistoryPaginator);