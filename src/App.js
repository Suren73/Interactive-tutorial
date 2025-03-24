import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const clickBack = () => setActiveIndex(activeIndex - 1);
	const clickForward = () => setActiveIndex(activeIndex + 1);
	const startOver = () => setActiveIndex(0);
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	let isFirstStep = !activeIndex;
	let isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{steps.map(({ id, title }, index) => (
							<li
								key={id}
								className={`${styles["steps-item"]} ${activeIndex === index ? styles.active : ""} ${index <= activeIndex ? styles.done : ""}`}
							>
								<button
									className={styles["steps-item-button"]}
									onClick={() => setActiveIndex(index)}
								>
									{Number(id)}
								</button>
								{/* При клике на кнопку установка выбранного шага в качестве активного */}
								{title}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={clickBack}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={!isLastStep ? clickForward : startOver}
						>
							{!isLastStep ? "Далее" : "Начать с начала"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
