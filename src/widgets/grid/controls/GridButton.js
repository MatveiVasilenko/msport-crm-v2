import React from 'react' 
import { Link } from 'react-router-dom';

const GridButton = ({
    classes
}) => {
    return (
        <Link className={classes.gridLink} to="/peoples/create">
            Створити
        </Link>
    )
}
export default GridButton