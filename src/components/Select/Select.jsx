import styled from 'styled-components'
import {THEME} from './../../theme.js'

export default styled.select`
	border: 2px solid ${THEME.MAIN_COLOR};
	border-radius: 3px;
	font-size: ${THEME.FONT_SIZE};
	padding: 8px 12px;
	margin: 0 10px;
	& option {
	}	
`