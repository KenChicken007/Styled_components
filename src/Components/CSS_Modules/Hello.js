import styles from "./Hello.module.css";

export default function Hello() {
  return (
    <>
      <h1 className={styles.header_color}>Hello, I am learning React</h1>
      <button className={styles.pos_btn}>Congrats</button>
      <br />
      <br />
      <button className={styles.neg_btn}>Yeh toh sab kar rahe hain</button>
    </>
  );
}
