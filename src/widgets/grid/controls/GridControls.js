import React from 'react' 
import GridButton from './GridButton';
import GridFilter from './GridFilter';

const GridControls = ({
    filter,
    filterParams,
    filterParamsSport,
    setFilter,
    filterType,
    setFilterType,
    classes
}) => {
    return (
        <div>
            <GridButton 
                classes={classes}
            />
            <GridFilter
                type="type" 
                filter={filter}
                filterParams={filterParams}
                setFilter={setFilter}
                classes={classes}
                setFilterType={setFilterType}
            />
            <GridFilter
                type="sport_id" 
                filter={filter}
                filterParams={filterParamsSport}
                setFilter={setFilter}
                classes={classes}
                setFilterType={setFilterType}
            />
        </div>
    )
}
export default GridControls