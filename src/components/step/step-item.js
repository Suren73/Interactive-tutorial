import styles from "../../app.module.css";

export const StepItem = ({ step, index, activeStep, onClick }) => {
	const isActive = index === activeStep;
	const isDone = index <= activeStep;

	const classNames = [
		styles["steps-item"],
		isActive && styles.active,
		isDone && styles.done,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<li className={classNames}>
			<button
				className={styles["steps-item-button"]}
				onClick={() => onClick(index)}
			>
				{Number(step.id)}
			</button>
			{step.title}
		</li>
	);
};
