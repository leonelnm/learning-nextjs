import style from '../../styles/Buttons.module.scss'

export default function Button({ children, onClick }) {
	return (
		<>
			<button className={style.btn} onClick={onClick}>
				{children}
			</button>
		</>
	)
}