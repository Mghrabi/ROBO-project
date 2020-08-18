import React, {Fragment} from 'react';


const SearchBox = ({searchChange}) => {
    return (
        <Fragment>
            <input 
            onChange={searchChange}
            className='pa3 b--green bg-lightest-blue ma4'
            type='search' 
            placeholder='search robots'
            />
        </Fragment>
    )
}


export default SearchBox;