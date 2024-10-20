import { notoSansJP, roboto_mono } from "./fonts/fonts";
import styles from "./styles/main.module.scss";
import "./styles/test.scss";

export default function Home() {
  return (
    <div>
      <h1>test</h1>
      <ul>
        <li className={notoSansJP.className}>list</li>
        <li className={`${styles.text_test} ${roboto_mono.className}`}>list</li>
        <li className={styles.text_test}>リスト</li>
        <li className="test">リスト</li>
      </ul>
    </div>
  );
}
