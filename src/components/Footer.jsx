import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__meta">&copy; 2026 {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
