import styles from '../../styles/AppLayout.module.scss'

export default function AppLayout({ children }) {
	return (
		<>
			<div className={styles.container}>
				<main className={styles.boxMain}>
					{children}
				</main>
			</div>
		</>
	)

}