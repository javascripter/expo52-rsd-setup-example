import { html, css} from 'react-strict-dom'

export default function Index() {
  return (
    <html.div
      style={styles.container}
    >
      <html.div>Edit app/index.tsx to edit this screen.</html.div>
    </html.div>
  );
}

const styles = css.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
  }
})