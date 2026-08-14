import Link from "next/link";

function DaylogMark() {
  return (
    <span className="daylog-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export default function DaylogShell({ children }) {
  return (
    <div className="daylog-site">
      <header className="daylog-header">
        <Link href="/daylog" className="daylog-wordmark" aria-label="Daylog home">
          <DaylogMark />
          <span>Daylog</span>
        </Link>
        <nav aria-label="Daylog">
          <Link href="/daylog#features">Features</Link>
          <Link href="/daylog/privacy">Privacy</Link>
          <Link href="/daylog/support">Support</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="daylog-footer">
        <div>
          <Link href="/daylog" className="daylog-wordmark">
            <DaylogMark />
            <span>Daylog</span>
          </Link>
          <p>One score a day. That&apos;s the whole app.</p>
        </div>
        <nav aria-label="Daylog legal and support">
          <Link href="/daylog/privacy">Privacy</Link>
          <Link href="/daylog/support">Support</Link>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Terms
          </a>
          <a href="mailto:jaytat132@gmail.com">Contact</a>
        </nav>
        <p className="daylog-copyright">© 2026 Jay Tat</p>
      </footer>
    </div>
  );
}
