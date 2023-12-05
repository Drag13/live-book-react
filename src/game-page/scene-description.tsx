import { AppText } from '../shared/typography/app-text';
import { P } from '../shared/typography/p';
import styles from "./scene-description.module.css";

export function SceneDescription({ description }: { description: string }) {
  const text = description.split('\n');
  return (
    <div className={styles.root}>
      {text.map((v, i) => (
        <P key={i}>
          <AppText>{v}</AppText>
        </P>
      ))}
    </div>
  );
}
