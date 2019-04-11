import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HistoryPaginator from './HistoryPaginator';

function History({match}) {
    if (match.isExact) {
        return <Redirect to="/history/1" />
    }
    return <Route path="/history/:page" component={HistoryPaginator} />
}

export default History;