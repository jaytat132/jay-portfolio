export const metadata = {
  title: "Support",
  description: "Help with Daylog accounts, subscriptions, privacy, and journal data.",
  alternates: { canonical: "/daylog/support" },
};

const supportItems = [
  {
    title: "Delete an account and cloud data",
    body: "Open Daylog → Settings → Account → Delete account. The app removes the account, sessions, cloud journal data, stored Apple credential, entitlement record, and that account’s offline store. Guest entries remain.",
  },
  {
    title: "Manage or cancel Daylog Plus",
    body: "Open Daylog → Settings → Daylog Plus → Manage subscription, or manage subscriptions in your Apple Account settings. Deleting a Daylog account does not cancel Apple billing.",
  },
  {
    title: "Restore a purchase",
    body: "Open Daylog → Settings → Daylog Plus → Upgrade, then choose Restore purchases. Use the same Apple Account that made the purchase.",
  },
  {
    title: "Export journal entries",
    body: "Open Settings and choose Export CSV. Daylog also offers a printable Yearbook PDF with Daylog Plus.",
  },
  {
    title: "Photo privacy",
    body: "Daylog displays permitted photos directly from Apple Photos. It does not copy or upload the photo library. You can change access at any time in iOS Settings.",
  },
  {
    title: "Cloud backup and sign-in",
    body: "The core journal works without an account. Cloud backup is optional and requires both a Daylog account and Daylog Plus.",
  },
];

export default function DaylogSupport() {
  return (
    <div className="daylog-support">
      <header>
        <p className="daylog-eyebrow">Help when you need it</p>
        <h1>Daylog Support</h1>
        <p>
          For help with an account, purchase, privacy request, or anything that
          does not look right, email us and include the app version shown at
          the bottom of Settings. Please do not include private journal notes.
        </p>
        <a className="daylog-button-link" href="mailto:jaytat132@gmail.com?subject=Daylog%20Support">
          Email Daylog Support
        </a>
        <span className="daylog-response-note">jaytat132@gmail.com</span>
      </header>

      <section aria-labelledby="common-help">
        <p className="daylog-eyebrow">Common questions</p>
        <h2 id="common-help">Accounts, purchases, and your data</h2>
        <div className="daylog-support-grid">
          {supportItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="daylog-support-privacy">
        <div>
          <p className="daylog-eyebrow">Privacy requests</p>
          <h2>Access, deletion, or questions</h2>
        </div>
        <div>
          <p>
            Account holders can delete their account and cloud data directly
            inside Daylog. If you cannot access the app or need additional
            help, email the support address above.
          </p>
          <a href="/daylog/privacy">Read the full privacy policy →</a>
        </div>
      </section>
    </div>
  );
}
