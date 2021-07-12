import React from 'react'
import GridBody from './components/GridBody';
import GridHead from './components/GridHead';
import styles from './grid-styles.module.scss'
import GridControls from './controls/GridControls';

const GridComponent = ({
    gridData, // thead, tbody - данные с сервера
    elems, // какие будут колонки
    customStyles, // кастомные стили в scss
    settings,
    gridHandlers,
    activeFilter, // filter - true
    setActiveFilter,// filter - true
    filter,
    filterParams,
    filterParamsSport,
    setFilter,
    classes,
    filterType,
    setFilterType

}) => {
    const config = {
        counter: settings.counter || false,
        net: settings.net || '',
        filter: settings.filter || false,
        routeFilter: settings.routeFilter || 'courses'
    }
    return (
        <div className={[styles.gridWrapper, customStyles?.gridWrapper].join(' ')}>
            {config.filter && <GridControls 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                styles={styles}
                routeFilter={config.routeFilter}
                net={config.net}
                filter={filter}
                filterParams={filterParams}
                filterParamsSport={filterParamsSport}
                setFilter={setFilter}
                classes={classes}
                filterType={filterType}
                setFilterType={setFilterType}
            />}
            <GridHead 
                styles={styles}
                thead={gridData.header}
                customStyles={customStyles}
                config={config}
            />
            <GridBody 
                styles={styles}
                tbody={gridData.boder}
                elems={elems}
                customStyles={customStyles}
                config={config}
                gridHandlers={gridHandlers}
            />
        </div>
    )
}
export default GridComponent

//Document styles - CustomStyles
// gridWrapper - main wrapper
// gridHead - main wrapper head
// gridHead
// gridHeadItem
// gridBody
// gridRow
// gridRowItem