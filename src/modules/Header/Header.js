import React from 'react'
import {THEME} from '../../theme.js'
import styles from './Header.module.scss'


export const Header = () => {
	return (
			<div className={styles.header} style={{backgroundColor: THEME.MAIN_COLOR}}>
				CRM system
			</div>
		)
}