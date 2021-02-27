import Head from "next/head";
import { GetServerSideProps } from "next";
import styles from "../styles/pages/Home.module.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";

interface HomeProps {
  userName: string;
  urlProfile: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  userName,
  urlProfile,
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      userName={userName}
      urlProfile={urlProfile}
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    userName,
    level,
    currentExperience,
    challengesCompleted,
  } = ctx.req.cookies;
  let urlProfile = `/icons/github.svg`;
  const url = async () => {
    try {
      const url = `https://github.com/${userName}.png`;
      const img = await fetch(url);
      if (img.status === 200) urlProfile = url;
    } catch (error) {
      urlProfile = `/icons/github.svg`;
    }
  };
  await url();
  return {
    props: {
      userName,
      urlProfile,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
