import styled from 'styled-components'
import {THEME} from './../../../theme.js'

export default styled.button`
	background-color: ${THEME.MAIN_COLOR};
	border-radius: 10px;
	font-size: ${THEME.FONT_SIZE};
	padding: 8px 12px;
	margin: 0 5px;	
	color: ${THEME.SUB_COLOR};
	transition: ${THEME.TRANSITION};
	cursor: pointer;
	border-color: ${THEME.MAIN_COLOR};
	font-weight: bold;
	width: 130px;
	&:hover {
		background-color: ${THEME.SUB_COLOR};
		color: ${THEME.MAIN_COLOR};
	}
	&:focus {
		outline: none;
	}
	&:disabled {
		opacity: 0.5;
		&:hover {
			background-color: ${THEME.MAIN_COLOR};
			color: ${THEME.SUB_COLOR};
		}
	}
`