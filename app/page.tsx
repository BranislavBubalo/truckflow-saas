"use client";

import { useEffect } from "react";

// ============================================================================
// FleetExpedite.com — Corporate landing page
//
// Design language: matches fleetexpedite.io (Satoshi font, midnight navy,
// orange accent, hybrid Apple-clean + brand identity).
//
// Audience: investors, partners, press, talent (NOT drivers — drivers go to .io).
//
// Sections: Hero • What we build • Trust • About • Contact
// ============================================================================

export default function HomePage() {
  // Fade-in scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ===== Satoshi font (matches .io) ===== */}
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        :root {
          --navy-900: #060b1a;
          --navy-800: #0a1428;
          --navy-700: #0f1a3a;
          --navy-600: #15224a;
          --navy-500: #1e2d5c;
          --orange: #ff7a2d;
          --orange-2: #ff9356;
          --orange-d: #e85f0e;
          --ink-100: #ffffff;
          --ink-200: #e8ebf5;
          --ink-300: #b8c0d4;
          --ink-400: #8089a0;
          --ink-500: #5a6280;
          --line-1: rgba(255, 255, 255, 0.08);
          --line-2: rgba(255, 255, 255, 0.14);
          --glass: rgba(255, 255, 255, 0.04);
          --glass-2: rgba(255, 255, 255, 0.07);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

        body {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont,
            "SF Pro Text", "Helvetica Neue", sans-serif;
          background: var(--navy-800);
          color: var(--ink-100);
          line-height: 1.45;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a { color: inherit; text-decoration: none; }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.035;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }

        .reveal { opacity: 0; transform: translateY(36px); transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .reveal.in { opacity: 1; transform: translateY(0); }
      `}</style>

      <main style={{ position: "relative", zIndex: 2 }}>
        {/* ============================= NAV ============================= */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            height: 64,
            backdropFilter: "saturate(180%) blur(18px)",
            WebkitBackdropFilter: "saturate(180%) blur(18px)",
            background: "rgba(10, 20, 40, 0.6)",
            borderBottom: "1px solid var(--line-1)",
          }}
        >
          <div
            style={{
              maxWidth: 1240,
              margin: "0 auto",
              height: "100%",
              padding: "0 28px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: "-0.02em",
                color: "var(--ink-100)",
              }}
            >
              <img src="/images/logo.jpg" alt="FleetExpedite" style={{ height: 44, width: "auto", display: "block", borderRadius: 6 }} />
              <span>FleetExpedite</span>
            </a>
            <a
              href="#contact"
              style={{
                padding: "9px 18px",
                background: "var(--orange)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 999,
                letterSpacing: "-0.005em",
              }}
            >
              Contact
            </a>
          </div>
        </nav>

        {/* ============================= HERO ============================= */}
        <section
          style={{
            position: "relative",
            padding: "160px 28px 80px",
            maxWidth: 1240,
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -150,
              right: -200,
              width: 700,
              height: 700,
              filter: "blur(120px)",
              opacity: 0.18,
              background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 200,
              left: -300,
              width: 800,
              height: 800,
              filter: "blur(120px)",
              opacity: 0.15,
              background: "radial-gradient(circle, #4a6bff 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 14px",
              background: "var(--glass)",
              border: "1px solid var(--line-2)",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: "var(--ink-300)",
              marginBottom: 28,
              position: "relative",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--orange)",
                boxShadow: "0 0 12px var(--orange)",
              }}
            />
            <span>IVART LLC · Sheridan, Wyoming</span>
          </div>

          <h1
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(56px, 10vw, 138px)",
              letterSpacing: "-0.045em",
              lineHeight: 0.96,
              maxWidth: 1100,
              marginBottom: 32,
              position: "relative",
            }}
          >
            AI-native trucking{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--orange) 0%, var(--orange-2) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
              }}
            >
              platform.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 1.7vw, 22px)",
              fontWeight: 400,
              color: "var(--ink-300)",
              maxWidth: 640,
              lineHeight: 1.45,
              letterSpacing: "-0.01em",
              marginBottom: 40,
              position: "relative",
            }}
          >
            Building the next decade of fleet operations — load matching,
            real-time fuel intelligence, and connected financial workflows for
            modern trucking companies.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", position: "relative" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 26px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: "-0.01em",
                background: "var(--orange)",
                color: "#fff",
              }}
            >
              Talk to us <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
            </a>
            <a
              href="https://fleetexpedite.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 26px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: "-0.01em",
                background: "var(--glass)",
                color: "var(--ink-100)",
                border: "1px solid var(--line-2)",
              }}
            >
              For drivers — fleetexpedite.io
            </a>
          </div>
        </section>

        {/* ============================= TRUCK BAND ============================= */}
        <section
          className="reveal"
          style={{
            position: "relative",
            margin: "40px auto",
            maxWidth: 1240,
            padding: "0 28px",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              height: "clamp(280px, 45vh, 480px)",
              backgroundImage:
                "linear-gradient(180deg, transparent 0%, transparent 70%, rgba(10, 20, 40, 0.85) 100%), url('/images/truck-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "70% center",
              backgroundColor: "#1a2548",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(10, 20, 40, 0.6) 0%, transparent 25%, transparent 75%, rgba(10, 20, 40, 0.6) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </section>

        {/* ============================= WHAT WE BUILD ============================= */}
        <section
          className="reveal"
          style={{
            padding: "120px 28px",
            maxWidth: 1240,
            margin: "0 auto",
          }}
        >
          <div style={{ maxWidth: 760, marginBottom: 64 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: 18,
              }}
            >
              What we build
            </div>
            <h2
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(44px, 6.5vw, 92px)",
                letterSpacing: "-0.045em",
                lineHeight: 1.0,
                margin: 0,
              }}
            >
              Two pillars.{" "}
              <span style={{ color: "var(--ink-400)" }}>One platform.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {/* AI Dispatch */}
            <div
              style={{
                background: "var(--glass)",
                border: "1px solid var(--line-2)",
                borderRadius: 24,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "var(--ink-400)",
                  marginBottom: 16,
                }}
              >
                01 · AI DISPATCH
              </div>
              <h3
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  margin: "0 0 14px 0",
                }}
              >
                Load intelligence at scale.
              </h3>
              <p
                style={{
                  color: "var(--ink-300)",
                  fontSize: 15,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Multi-board search, profitability scoring, automated rate
                negotiation drafts, and one-tap rate confirmation signing.
              </p>
            </div>

            {/* Mobile-first */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 122, 45, 0.08) 0%, rgba(255, 122, 45, 0.02) 100%)",
                border: "1px solid rgba(255, 122, 45, 0.3)",
                borderRadius: 24,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "var(--orange)",
                  marginBottom: 16,
                }}
              >
                03 · MOBILE
              </div>
              <h3
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  margin: "0 0 14px 0",
                }}
              >
                Built for the cab, not the desk.
              </h3>
              <p
                style={{
                  color: "var(--ink-300)",
                  fontSize: 15,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Native iOS for owner-operators and company drivers. Voice AI,
                hands-free dispatch, multilingual support.
              </p>
            </div>
          </div>
        </section>

        {/* ============================= TRUST ============================= */}
        <section
          className="reveal"
          style={{
            padding: "100px 28px",
            maxWidth: 1240,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-400)",
              marginBottom: 40,
              fontWeight: 500,
            }}
          >
            Integrations & partnerships
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "clamp(28px, 5vw, 64px)",
              opacity: 0.85,
            }}
          >
            {["Apex Capital", "EFS", "Stripe", "Plaid"].map(
              (name) => (
                <span
                  key={name}
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 1.6vw, 22px)",
                    letterSpacing: "-0.015em",
                    color: "var(--ink-200)",
                  }}
                >
                  {name}
                </span>
              )
            )}
          </div>
        </section>

        {/* ============================= ABOUT ============================= */}
        <section
          className="reveal"
          style={{
            padding: "120px 28px",
            position: "relative",
            background:
              "radial-gradient(ellipse at center, rgba(255, 122, 45, 0.08) 0%, transparent 60%)",
          }}
        >
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: 18,
                textAlign: "center",
              }}
            >
              About
            </div>
            <h2
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(36px, 5vw, 64px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              Three decades of turning complexity into clarity.
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 1.5vw, 21px)",
                color: "var(--ink-200)",
                lineHeight: 1.65,
                margin: "0 auto 24px",
                maxWidth: 760,
                textAlign: "center",
              }}
            >
              FleetExpedite is built by{" "}
              <strong style={{ color: "#fff" }}>Branislav Bubalo</strong>,
              founder of IVART LLC. With nearly thirty years leading
              high-impact programs across technology and finance, Branislav
              directed cross-functional teams at Apple through flagship
              launches including{" "}
              <strong style={{ color: "#fff" }}>iTunes Radio</strong> and{" "}
              <strong style={{ color: "#fff" }}>AppleCare Support</strong>.
            </p>

            {/* Founder avatar — quiet, premium */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                margin: "32px auto 32px",
                padding: "16px 24px",
                background: "var(--glass)",
                border: "1px solid var(--line-1)",
                borderRadius: 999,
                width: "fit-content",
              }}
            >
              <img
                src="/images/founder.jpg"
                alt="Branislav Bubalo"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  border: "2px solid rgba(255, 122, 45, 0.3)",
                  display: "block",
                }}
              />
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  Branislav Bubalo
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--ink-400)",
                    letterSpacing: "0.04em",
                    marginTop: 2,
                  }}
                >
                  Founder &amp; CEO
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "clamp(16px, 1.4vw, 19px)",
                color: "var(--ink-300)",
                lineHeight: 1.65,
                margin: "0 auto",
                maxWidth: 760,
                textAlign: "center",
              }}
            >
              That same discipline — global coordination, agile execution, and
              relentless focus on measurable outcomes — now powers the platform
              we&apos;re building for the next generation of trucking.
            </p>

            <div
              style={{
                marginTop: 56,
                display: "flex",
                justifyContent: "center",
                gap: 32,
                flexWrap: "wrap",
                fontSize: 13,
                color: "var(--ink-400)",
                letterSpacing: "0.02em",
              }}
            >
              <span>Founded 2024</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>IVART LLC</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>Sheridan, Wyoming</span>
            </div>
          </div>
        </section>

        {/* ============================= CONTACT ============================= */}
        <section
          className="reveal"
          id="contact"
          style={{
            padding: "120px 28px 80px",
            maxWidth: 1240,
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: 18,
              }}
            >
              Get in touch
            </div>
            <h2
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 6vw, 72px)",
                letterSpacing: "-0.045em",
                lineHeight: 1.0,
                margin: 0,
              }}
            >
              Let&apos;s talk.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            {[
              {
                label: "PRESS & MEDIA",
                desc: "Stories, interviews, embargoes.",
                email: "press@fleetexpedite.com",
              },
              {
                label: "PARTNERSHIPS",
                desc: "Integrations, vendor programs, channel.",
                email: "partnerships@fleetexpedite.com",
              },
              {
                label: "GENERAL",
                desc: "Anything else — we read every email.",
                email: "contact@fleetexpedite.com",
              },
            ].map((card) => (
              <a
                key={card.label}
                href={`mailto:${card.email}`}
                style={{
                  background: "var(--glass)",
                  border: "1px solid var(--line-2)",
                  borderRadius: 24,
                  padding: "32px 28px",
                  display: "block",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "var(--ink-400)",
                    marginBottom: 14,
                  }}
                >
                  {card.label}
                </div>
                <div
                  style={{
                    color: "var(--ink-200)",
                    fontSize: 15,
                    lineHeight: 1.5,
                    marginBottom: 18,
                  }}
                >
                  {card.desc}
                </div>
                <div
                  style={{
                    color: "var(--orange)",
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, monospace",
                  }}
                >
                  {card.email} →
                </div>
              </a>
            ))}
          </div>

          {/* For drivers — quiet redirect */}
          <div
            style={{
              marginTop: 56,
              padding: "24px 28px",
              background: "var(--glass)",
              border: "1px solid var(--line-1)",
              borderRadius: 16,
              maxWidth: 720,
              margin: "56px auto 0",
              textAlign: "center",
            }}
          >
            <span style={{ color: "var(--ink-300)", fontSize: 14 }}>
              Are you a driver looking for the app?{" "}
            </span>
            <a
              href="https://fleetexpedite.io"
              style={{
                color: "var(--orange)",
                fontSize: 14,
                fontWeight: 600,
                marginLeft: 4,
              }}
            >
              fleetexpedite.io →
            </a>
          </div>
        </section>

        {/* ============================= FOOTER ============================= */}
        <footer
          style={{
            padding: "60px 28px 40px",
            borderTop: "1px solid var(--line-1)",
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            <img src="/images/logo.jpg" alt="" style={{ height: 36, borderRadius: 5 }} />
            <span>FleetExpedite</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-400)" }}>
            © 2026 IVART LLC · Sheridan, Wyoming
            <a
              href="mailto:contact@fleetexpedite.com"
              style={{ color: "var(--ink-300)", marginLeft: 18 }}
            >
              Contact
            </a>
            <a
              href="https://fleetexpedite.io"
              style={{ color: "var(--ink-300)", marginLeft: 18 }}
            >
              For drivers
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
