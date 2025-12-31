import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fleet Management for Owner Operators",
  description: "Purpose-built trucking software for owner operators. Track loads, manage expenses, maximize profits. Mobile app included. $25/month.",
  keywords: "owner operator software, independent trucker app, trucking expense tracking, owner operator management",
  openGraph: {
    title: "FleetExpedite - Owner Operator Software",
    description: "Purpose-built trucking software for owner operators",
    url: "https://fleetexpedite.com/owner-operator-app",
  },
}

export default function OwnerOperatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
