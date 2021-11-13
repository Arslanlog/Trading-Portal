import React from 'react';
const SearchFilter = () => {
    return (
        <>
        <div className="Filters">
            <div className="container">
                <div className="row searchFilter">
                    <div className="col-sm-12">
                        <div className="input-group">
                            <input id="table_filter" type="text" className="form-control" aria-label="Text input with segmented button dropdown" />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="label-icon">Category</span> <span className="caret">&nbsp;</span></button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="category_filters">
                                        <li>
                                            <input className="cat_type category-input" data-label="All" id="all" defaultValue name="radios" type="radio" /><label htmlFor="all">All</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="radios" id="Design" defaultValue="Design" /><label className="category-label" htmlFor="Design">Design</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="radios" id="Marketing" defaultValue="Marketing" /><label className="category-label" htmlFor="Marketing">Marketing</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="radios" id="Programming" defaultValue="Programming" /><label className="category-label" htmlFor="Programming">Programming</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="radios" id="Sales" defaultValue="Sales" /><label className="category-label" htmlFor="Sales">Sales</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="radios" id="Support" defaultValue="Support" /><label className="category-label" htmlFor="Support">Support</label>
                                        </li>
                                    </ul>
                                </div>
                                <button id="searchBtn" type="button" className="btn btn-outline-danger">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}
export default SearchFilter;