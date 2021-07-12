import React from 'react'
import LinkMenu from '../../components/Menu/LinkMenu'
import logo from '../../img/white.png'

export default React.memo(() => {
	return (
			<>
				<div style={{borderBottom: '1px solid #fff', marginBottom: '15px'}}>
					<img style={{width: '90%', padding: '5px'}} src={logo} alt="" />
				</div>
				<div>
					<div>
						<LinkMenu to="/admin">Головна</LinkMenu>
					</div>
					<div>
						<LinkMenu to="/peoples">База даних</LinkMenu>
					</div>
					{/* <div>
						<LinkMenu to="/trains">Тренировки</LinkMenu>
					</div>
					<div>
						<LinkMenu to="/liders">Лидеры спорта</LinkMenu>
					</div>
					<div>
						<LinkMenu to="/keys">Ключи</LinkMenu>
					</div>
					<div>
						<LinkMenu to="/support">Обратная связь</LinkMenu>
					</div> */}
				</div>
			</>
		)
})