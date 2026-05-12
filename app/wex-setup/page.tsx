import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect Your WEX Card — FleetExpedite",
  description:
    "5-minute setup guide to connect your WEX/EFS card with FleetExpedite. Automatic fuel reports, IFTA, and settlements.",
  openGraph: {
    title: "Connect Your WEX Card — FleetExpedite",
    description:
      "5-minute setup guide to connect your WEX/EFS card with FleetExpedite.",
    type: "website",
  },
};

export default function WexSetupPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
        padding: "32px 20px 64px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        color: "#1f2937",
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          background: "white",
          borderRadius: 24,
          padding: "40px 28px",
          boxShadow: "0 10px 40px rgba(30, 64, 175, 0.08)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 18,
            borderBottom: "2px solid #1E40AF",
            marginBottom: 24,
          }}
        >
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#1E40AF",
              margin: 0,
            }}
          >
            FleetExpedite
          </h1>
          <span style={{ fontSize: 13, color: "#6B7280" }}>
            🚛 AI for Owner-Operators
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#1E40AF",
            marginTop: 8,
            marginBottom: 6,
          }}
        >
          Connect Your WEX Card
        </h2>
        <p style={{ color: "#6B7280", fontSize: 15, marginTop: 0 }}>
          Setup guide · 5 minutes · 5 simple steps
        </p>

        {/* Intro */}
        <p style={{ marginTop: 20 }}>
          Thank you for signing up with <strong>FleetExpedite</strong>! 🙏
        </p>
        <p>
          To enable your WEX/EFS card to work inside our app (automatic fuel
          reports, IFTA, settlements), you'll need to complete{" "}
          <strong>5 simple steps</strong> on the WEX website. It takes 5
          minutes.
        </p>
        <p>
          After that, WEX will activate the integration within{" "}
          <strong>1–5 business days</strong>, and everything will start working
          automatically.
        </p>

        {/* Before You Start */}
        <SectionHeader>Before You Start</SectionHeader>

        <Box variant="success">
          <strong>You'll need:</strong>
          <br />
          ✅ Your WEX/EFS <strong>User ID</strong> and <strong>password</strong>
          <br />
          ✅ Your account must be <strong>Company Admin</strong> (business
          owner = yes)
          <br />
          ✅ 5 minutes of your time
        </Box>

        <Box variant="warning">
          <strong>⚠️ Important:</strong> If you don't have a User ID/password
          or aren't the Admin — call WEX right away:
          <br />
          <br />
          <a
            href="tel:8888247378"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#92400E",
              textDecoration: "none",
            }}
          >
            📞 888-824-7378
          </a>
        </Box>

        {/* Steps */}
        <SectionHeader>The Steps — Just Follow Along</SectionHeader>

        {/* Step 1 */}
        <StepTitle>Step 1 — Open the WEX Website</StepTitle>
        <p>
          Open this link in your <strong>web browser</strong> (Chrome, Safari,
          Edge):
        </p>
        <Box variant="info" centered>
          👉{" "}
          <a
            href="https://www.efsllc.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#1E40AF",
              textDecoration: "none",
            }}
          >
            www.efsllc.com
          </a>
        </Box>

        {/* Step 2 */}
        <StepTitle>Step 2 — Log In</StepTitle>
        <ol style={{ paddingLeft: 22 }}>
          <li>
            In the top-right corner, click <strong>LOGIN</strong>
          </li>
          <li>
            From the dropdown menu, choose:
            <ul style={{ marginTop: 6 }}>
              <li>
                <strong>"EFS eManager"</strong> — if you have an{" "}
                <strong>EFS</strong> card
              </li>
              <li>
                <strong>"Fleet One eManager"</strong> — if you have a{" "}
                <strong>Fleet One</strong> card
              </li>
            </ul>
          </li>
          <li>
            Enter your <strong>User ID</strong> and <strong>Password</strong>
          </li>
          <li>
            Click <strong>"Logon"</strong>
          </li>
        </ol>
        <Box variant="tip">
          <strong>💡 Tip:</strong> Not sure which card you have? Check your
          physical card — it will say <strong>"EFS"</strong> or{" "}
          <strong>"Fleet One"</strong> on it.
        </Box>

        {/* Step 3 */}
        <StepTitle>Step 3 — Open Data Sharing</StepTitle>
        <ol style={{ paddingLeft: 22 }}>
          <li>
            In the top-right corner, <strong>hover your mouse</strong> over{" "}
            <strong>"Select Program"</strong>
          </li>
          <li>
            From the menu, click <strong>"Data Sharing Preferences"</strong>
          </li>
        </ol>
        <Box variant="warning">
          <strong>⚠️ Important:</strong> If you <strong>DO NOT SEE</strong>{" "}
          "Data Sharing Preferences" in the menu — call WEX (
          <a
            href="tel:8888247378"
            style={{ color: "#92400E", fontWeight: 700 }}
          >
            📞 888-824-7378
          </a>
          ) and tell them:
          <br />
          <br />
          <em>"Please add Data Sharing Preferences to my account."</em>
        </Box>

        {/* Step 4 */}
        <StepTitle>Step 4 — Add FleetExpedite as a Partner</StepTitle>
        <ol style={{ paddingLeft: 22 }}>
          <li>
            You'll see a field called <strong>"Data Share Partner"</strong>{" "}
            with a dropdown list
          </li>
          <li>Click the dropdown to open the list</li>
          <li>
            Find and select <strong>FleetExpedite</strong>
          </li>
          <li>
            Click the <strong>"Add"</strong> button
          </li>
        </ol>
        <Box variant="success">
          ✅ A legal disclaimer will appear. This is standard — it's
          automatically accepted when you click Add.
        </Box>

        {/* Step 5 */}
        <StepTitle>Step 5 — Verify It's Added</StepTitle>
        <p>
          At the <strong>bottom of the page</strong>, in the table, you should
          see:
        </p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "12px 0 16px",
            fontSize: 14,
          }}
        >
          <thead>
            <tr style={{ background: "#1E40AF", color: "white" }}>
              <th style={tableCellHeader}>Partner</th>
              <th style={tableCellHeader}>User</th>
              <th style={tableCellHeader}>Date Added</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: "#D1FAE5" }}>
              <td style={tableCell}>FleetExpedite</td>
              <td style={tableCell}>(your name)</td>
              <td style={tableCell}>(today's date)</td>
            </tr>
          </tbody>
        </table>

        <Box variant="success" centered>
          <span
            style={{ fontSize: 18, fontWeight: 700, color: "#065F46" }}
          >
            🎉 If you see this — you're done!
          </span>
        </Box>

        {/* After Steps */}
        <SectionHeader>After the Steps — WEX Confirmation Email</SectionHeader>
        <p>
          Within <strong>1–2 days</strong>, you'll receive an{" "}
          <strong>email from WEX</strong> asking you to confirm the request.
          Reply ASAP with this message:
        </p>
        <Box variant="quote">
          <em>"Yes, I confirm the Data Share request for FleetExpedite."</em>
        </Box>
        <Box variant="warning">
          <strong>⚠️ Important:</strong> This step is{" "}
          <strong>very important</strong> — without your reply, WEX won't
          activate the integration. Without activation, your card won't work
          inside the app.
        </Box>

        {/* Timeline */}
        <SectionHeader>What Happens Next?</SectionHeader>
        <div style={{ background: "#F3F4F6", borderRadius: 12, padding: 16 }}>
          <TimelineRow icon="⏱️" title="1–5 business days">
            WEX processes your request
          </TimelineRow>
          <TimelineRow icon="📧" title="Email from WEX">
            A second email confirming activation
          </TimelineRow>
          <TimelineRow
            icon="✅"
            title="Inside FleetExpedite app"
            isLast
          >
            Green checkmark — your card is connected!
          </TimelineRow>
        </div>
        <p style={{ marginTop: 16 }}>
          In the meantime, you can <strong>use the app freely</strong> — load
          search, settlements, dispatching — everything works. Only WEX fuel
          tracking is waiting for activation.
        </p>

        {/* Contact */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #D1D5DB",
            margin: "32px 0 16px",
          }}
        />
        <SectionHeader>Questions? We're Here to Help.</SectionHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <strong>📱 WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/381641227738"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E40AF", textDecoration: "none" }}
            >
              Open chat
            </a>
          </div>
          <div>
            <strong>✉️ Email:</strong>{" "}
            <a
              href="mailto:contact@fleetexpedite.com"
              style={{ color: "#1E40AF", textDecoration: "none" }}
            >
              contact@fleetexpedite.com
            </a>
          </div>
          <div>
            <strong>🌐 Web:</strong>{" "}
            <a
              href="https://fleetexpedite.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E40AF", textDecoration: "none" }}
            >
              fleetexpedite.com
            </a>
          </div>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #E5E7EB",
            margin: "24px 0 12px",
          }}
        />
        <p
          style={{
            fontSize: 12,
            color: "#6B7280",
            textAlign: "center",
            margin: 0,
          }}
        >
          FleetExpedite · AI-native SaaS for owner-operator drivers · IVART
          LLC, Wyoming
        </p>
      </div>
    </main>
  );
}

/* -------- Helper components -------- */

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 19,
        fontWeight: 700,
        color: "#1E40AF",
        marginTop: 28,
        marginBottom: 10,
      }}
    >
      {children}
    </h3>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        fontSize: 16,
        fontWeight: 700,
        color: "#1E40AF",
        marginTop: 22,
        marginBottom: 8,
      }}
    >
      {children}
    </h4>
  );
}

type BoxVariant = "success" | "warning" | "info" | "tip" | "quote";

function Box({
  children,
  variant,
  centered = false,
}: {
  children: React.ReactNode;
  variant: BoxVariant;
  centered?: boolean;
}) {
  const styles: Record<BoxVariant, React.CSSProperties> = {
    success: {
      background: "#D1FAE5",
      border: "1px solid #10B981",
      color: "#065F46",
    },
    warning: {
      background: "#FEF3C7",
      border: "1px solid #F59E0B",
      color: "#92400E",
    },
    info: {
      background: "#DBEAFE",
      border: "1px solid #3B82F6",
      color: "#1E40AF",
    },
    tip: {
      background: "#DBEAFE",
      border: "1px solid #3B82F6",
      color: "#1F2937",
    },
    quote: {
      background: "#F3F4F6",
      border: "1px solid #9CA3AF",
      color: "#1F2937",
    },
  };

  return (
    <div
      style={{
        ...styles[variant],
        borderRadius: 12,
        padding: "14px 16px",
        margin: "12px 0",
        textAlign: centered ? "center" : "left",
      }}
    >
      {children}
    </div>
  );
}

function TimelineRow({
  icon,
  title,
  children,
  isLast = false,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        padding: "10px 0",
        borderBottom: isLast ? "none" : "1px solid #D1D5DB",
      }}
    >
      <div style={{ fontSize: 22, minWidth: 30 }}>{icon}</div>
      <div style={{ minWidth: 130, fontWeight: 700 }}>{title}</div>
      <div style={{ fontSize: 14, color: "#374151" }}>{children}</div>
    </div>
  );
}

const tableCellHeader: React.CSSProperties = {
  padding: "10px 12px",
  textAlign: "center",
  fontWeight: 700,
  border: "1px solid #1E40AF",
};

const tableCell: React.CSSProperties = {
  padding: "10px 12px",
  textAlign: "center",
  border: "1px solid #D1D5DB",
};
