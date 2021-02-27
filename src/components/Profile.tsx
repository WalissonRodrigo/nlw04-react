import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

function Profile() {
  const { level, userName, urlProfile } = useContext(
    ChallengesContext
  );
  return (
    <div className={styles.profileContainer}>
      <img
        src={urlProfile}
        alt={userName ? userName: `Visitante`}
      />
      <div>
        <strong>{userName ? userName : `Visitante`}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
