import { useState } from "react";
import styles from "./app.module.css";
import { NavigationButtons, StepItem } from "./components";
import data from "./data.json";

export const App = () => {
	const [steps] = useState(data);
	const [activeStep, setActiveStep] = useState(0);

	const isFirst = activeStep === 0;
	const isLast = activeStep === steps.length - 1;

	const goToStep = (i) => setActiveStep(i);
	const goBack = () => setActiveStep((i) => i - 1);
	const goNext = () => setActiveStep((i) => i + 1);
	const reset = () => setActiveStep(0);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>

				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeStep].content}
					</div>

					<ul className={styles["steps-list"]}>
						{steps.map((step, index) => (
							<StepItem
								key={step.id}
								step={step}
								index={index}
								activeStep={activeStep}
								onClick={goToStep}
							/>
						))}
					</ul>

					<NavigationButtons
						isFirst={isFirst}
						isLast={isLast}
						onBack={goBack}
						onNext={goNext}
						onReset={reset}
					/>
				</div>
			</div>
		</div>
	);
};
