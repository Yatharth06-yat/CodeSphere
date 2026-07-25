import './Footer.css'

export default function Footer() {
  return (
    <footer className="cs-footer">
      <p>© {new Date().getFullYear()} CodeSphere. Built for collaborative study and productivity.</p>
      <div className="cs-footer__links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </footer>
  )
}
