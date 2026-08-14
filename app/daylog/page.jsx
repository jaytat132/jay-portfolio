import Link from "next/link";

const recentScores = [6, 6, 7, 6, 6, 6, 8];

const features = [
  {
    number: "01",
    title: "A ritual that stays small",
    body: "Give the day one score from 0 to 10. Add a note or a few tags when you want to, then move on.",
  },
  {
    number: "02",
    title: "A life you can look back on",
    body: "Calm calendars, streaks, badges, and personal bests turn individual nights into a story you can revisit.",
  },
  {
    number: "03",
    title: "Patterns without pressure",
    body: "See your recent rhythm and learn what tends to lift you up or wear you down—without a public feed or leaderboard.",
  },
  {
    number: "04",
    title: "Your photos stay your photos",
    body: "Daylog can show photos beside the matching day without copying or uploading your photo library.",
  },
];

export default function DaylogHome() {
  return (
    <>
      <section className="daylog-hero">
        <div className="daylog-hero-copy">
          <p className="daylog-eyebrow">A nightly journal for iPhone</p>
          <h1>
            Rate the day.
            <br />
            <em>Notice the life.</em>
          </h1>
          <p className="daylog-lede">
            One score each night becomes a private map of the people, places,
            and small choices that shape your life.
          </p>
          <div className="daylog-hero-actions">
            <span className="daylog-store-badge" aria-label="Coming soon to the App Store">
              <span>Coming soon to the</span>
              <strong>App Store</strong>
            </span>
            <Link href="/daylog/privacy" className="daylog-text-link">
              Read the privacy promise <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="daylog-phone" aria-label="Daylog example showing a score of 8">
          <div className="daylog-island" />
          <div className="daylog-phone-date">THURSDAY, AUGUST 13</div>
          <div className="daylog-phone-title">Today</div>
          <div className="daylog-score-card">
            <span className="daylog-score">8</span>
            <div>
              <strong>Bright</strong>
              <p>Something in it went right.</p>
            </div>
          </div>
          <div className="daylog-phone-stats">
            <div><strong>10</strong><span>day streak</span></div>
            <div><strong>5.6</strong><span>30-day average</span></div>
          </div>
          <div className="daylog-week-card">
            <div><strong>Last 7 nights</strong><span>7 of 7 logged</span></div>
            <ol aria-label="Recent fictional scores">
              {recentScores.map((score, index) => (
                <li key={`${score}-${index}`} className={`score-${score}`}>
                  {score}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="daylog-intro" id="features">
        <p className="daylog-eyebrow">Simple by design</p>
        <h2>A tiny habit with a long memory.</h2>
        <p>
          Daylog is not another task list to maintain. It asks one honest
          question, once a day, and lets the meaning emerge over time.
        </p>
      </section>

      <section className="daylog-features" aria-label="Daylog features">
        {features.map((feature) => (
          <article key={feature.number}>
            <span>{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>

      <section className="daylog-private">
        <div>
          <p className="daylog-eyebrow">Private by design</p>
          <h2>Your journal is not an ad profile.</h2>
        </div>
        <div className="daylog-private-copy">
          <p>
            The core journal works without an account, and guest entries stay
            on your iPhone. Daylog has no advertising and does not track you
            across other companies&apos; apps or websites.
          </p>
          <ul>
            <li>No account required for core journaling</li>
            <li>No photo-library uploads</li>
            <li>Export your entries whenever you like</li>
            <li>Delete an account and its cloud data inside the app</li>
          </ul>
          <Link href="/daylog/privacy" className="daylog-button-link">
            Read the full privacy policy
          </Link>
        </div>
      </section>

      <section className="daylog-plus">
        <p className="daylog-eyebrow">Optional Daylog Plus</p>
        <h2>Go deeper when you&apos;re ready.</h2>
        <p>
          Core logging, recent insights, streaks, and badges stay free. Plus
          adds longer-range insights, search, smart reminders, widgets, a
          printable Yearbook PDF, and optional account-based cloud backup.
        </p>
        <p className="daylog-fine-print">
          Monthly and yearly auto-renewing plans are offered in the app. Your
          localized price and billing period are shown before purchase.
        </p>
      </section>
    </>
  );
}
