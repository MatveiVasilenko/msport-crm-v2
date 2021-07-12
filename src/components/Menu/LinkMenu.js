import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {THEME} from './../../theme.js'

export default styled(NavLink)`
	color: ${THEME.SUB_COLOR};
	display: block;
	text-decoration: none;
	font-weight: 700;
	padding: 10px;
	font-size: ${THEME.MEDIUM_FONT_SIZE};
	&:hover {
		color: ${THEME.MAIN_COLOR};
		background: ${THEME.SUB_COLOR};
		transition: ${THEME.TRANSITION};
	}

`