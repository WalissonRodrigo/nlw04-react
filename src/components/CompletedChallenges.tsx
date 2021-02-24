import styles from "../styles/components/CompleteChallenge.module.css";
function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}

export default CompletedChallenges;
