export const metadata = {
  title: "Privacy Policy",
  description: "How Daylog handles journal, account, purchase, and diagnostic data.",
  alternates: { canonical: "/daylog/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <article className="daylog-legal">
      <header>
        <p className="daylog-eyebrow">Effective August 13, 2026</p>
        <h1>Privacy Policy</h1>
        <p className="daylog-legal-summary">
          Daylog does not sell personal data, serve advertising, or track
          people across apps and websites. The core journal can be used
          without an account. Cloud backup is optional and requires both an
          account and Daylog Plus.
        </p>
      </header>

      <section>
        <h2>Who operates Daylog</h2>
        <p>Daylog is operated by Jay Tat.</p>
      </section>

      <section>
        <h2>Data that stays on the device</h2>
        <p>
          Guest entries, scores, notes, tags, preferences, and offline account
          copies are stored on the device. If photo access is allowed, Daylog
          reads the date and image needed to show photos beside the matching
          entry; it does not copy or upload the photo library. Widgets receive
          only a local summary through Daylog&apos;s app group.
        </p>
      </section>

      <section>
        <h2>Data Daylog collects</h2>
        <p>
          When an account is created, Daylog processes the email address or
          Sign in with Apple identity, a Daylog account identifier, and
          authentication records.
        </p>
        <p>
          When cloud backup is used, Daylog stores scores, notes, tags, pinned
          state, entry dates, sync timestamps, versions, and deletion markers.
        </p>
        <p>
          To provide Daylog Plus, Daylog stores App Store product and
          transaction identifiers, purchase and expiration dates,
          subscription status, and the app account token attached to the
          purchase. A purchase made while signed out uses a random,
          install-scoped token; it is not an advertising identifier. Daylog
          never receives payment-card details.
        </p>
        <p>
          When Daylog communicates with its cloud service, Supabase
          automatically retains limited request and authentication metadata
          such as IP address, approximate city or country derived by its
          network provider, user agent, request time, route, and response
          status. Daylog uses this metadata only for authentication, rate
          limiting, abuse prevention, security, and service reliability. It is
          not used to build a location history, personalize content, advertise,
          or track activity across other companies&apos; apps or websites.
        </p>
      </section>

      <section>
        <h2>Service providers</h2>
        <ul>
          <li><strong>Apple</strong> processes Sign in with Apple and App Store purchases.</li>
          <li><strong>Supabase</strong> provides authentication, database storage, cloud functions, and operational security logs, including the limited network and request metadata described above.</li>
          <li><strong>Sentry</strong> receives limited crash and diagnostic information so Daylog can identify failures. Sentry is configured not to collect default personal information, screenshots, view hierarchy, breadcrumbs, network request details, or performance traces. Daylog does not intentionally send journal entries, notes, tags, email addresses, or account identifiers to Sentry.</li>
        </ul>
        <p>
          These providers process data only to deliver and protect Daylog under
          their own security and privacy terms.
        </p>
      </section>

      <section>
        <h2>Why data is used</h2>
        <p>
          Daylog uses collected data only to authenticate accounts, sync
          requested journal data, verify purchases, provide support, prevent
          abuse, keep the service reliable, and comply with legal obligations.
          It is not used for advertising or data-broker profiling.
        </p>
      </section>

      <section>
        <h2>Retention and deletion</h2>
        <p>
          Local guest data remains until it is removed or the app is deleted.
          Choosing <strong>Delete account</strong> in Settings permanently
          removes the active account and sessions, its cloud journal data,
          stored Apple credential, and Daylog entitlement row. Daylog also
          removes that account&apos;s offline store from the device. Guest entries
          remain.
        </p>
        <p>
          Limited security logs and encrypted service backups may persist until
          the service provider&apos;s routine retention cycle expires, after which
          they are deleted. Diagnostic events remain only for the retention
          period configured for Daylog&apos;s Sentry project.
        </p>
        <p>
          Deleting an account does not cancel an App Store subscription. Daylog
          offers a route to Apple&apos;s subscription management from the deletion
          prompt, and the account can still be deleted immediately.
        </p>
      </section>

      <section id="choices">
        <h2>Choices and rights</h2>
        <p>People using Daylog can:</p>
        <ul>
          <li>export entries as CSV;</li>
          <li>deny or limit photo access;</li>
          <li>use Daylog without an account;</li>
          <li>sign out while retaining the account and its separate offline store; or</li>
          <li>delete the account and cloud data inside Settings.</li>
        </ul>
        <p>
          Email <a href="mailto:jaytat132@gmail.com">jaytat132@gmail.com</a> for
          privacy questions, access requests, or deletion help.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          This policy may be updated when Daylog&apos;s features or providers
          change. The effective date above will change when that happens.
        </p>
      </section>
    </article>
  );
}
