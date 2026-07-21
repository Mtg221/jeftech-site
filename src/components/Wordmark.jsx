// "Jëf" en bleu, "tech" en marine — poids mixtes
export default function Wordmark({ size = 22 }) {
  return (
    <span className="wordmark" style={{ fontSize: size }}>
      <span className="wm-jef">Jëf</span><span className="wm-tech">tech</span>
    </span>
  )
}
