import DaylogShell from "@/components/daylog/DaylogShell";

export const metadata = {
  title: {
    default: "Daylog — Rate the day. Notice the life.",
    template: "%s — Daylog",
  },
  description:
    "A private nightly journal for rating each day from 0 to 10 and noticing the patterns over time.",
  alternates: {
    canonical: "/daylog",
  },
  openGraph: {
    title: "Daylog — Rate the day. Notice the life.",
    description:
      "A quiet nightly ritual that turns one score a day into a personal map.",
    url: "/daylog",
    siteName: "Daylog",
    type: "website",
  },
};

export default function DaylogLayout({ children }) {
  return <DaylogShell>{children}</DaylogShell>;
}
