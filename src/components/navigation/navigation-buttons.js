import styles from "../../app.module.css";

export const NavigationButtons = ({
	isFirst,
	isLast,
	onBack,
	onNext,
	onReset,
}) => {
	const handleClick = () => {
		if (isLast) onReset();
		else onNext();
	};

	const nextText = isLast ? "Начать с начала" : "Далее";

	return (
		<div className={styles["buttons-container"]}>
			<button
				className={styles.button}
				disabled={isFirst}
				onClick={onBack}
			>
				Назад
			</button>

			<button className={styles.button} onClick={handleClick}>
				{nextText}
			</button>
		</div>
	);
};
