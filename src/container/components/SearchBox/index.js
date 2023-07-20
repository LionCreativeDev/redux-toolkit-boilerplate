import React from 'react'

import { useDispatch } from "react-redux"
import { setSearchText, setRecordsOrder } from '../../../store/slices/Search';

const SearchBox = (props) => {
    const { order, searchText } = props;
    const dispatch = useDispatch();

    return (
        <div className="row py-4 px-4">
            <div className="col-sm-12 col-md-6 d-flex align-items-center mb-2 px-0 pe-md-1">
                <label className="form-label mb-0 me-2">Filter: </label>
                <input className="form-control" placeholder="ie: John" value={searchText} onChange={(e) => dispatch(setSearchText(e.target.value))} />
            </div>
            <div className="col-sm-12 col-md-6 d-flex align-items-center mb-2 px-0 ps-md-1">
                <label className='form-label mb-0 me-2'>Sort: </label>
                <select className="form-select" aria-label="Sort" value={order} onChange={(e) => dispatch(setRecordsOrder(e.target.value))}>
                    <option value="">Default</option>
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBox
// const mapStateToProps = (state) => {
//     return {
//         order: state.order,
//         searchText: state.searchText
//     }
// }
// export default connect(mapStateToProps)(SearchBox)