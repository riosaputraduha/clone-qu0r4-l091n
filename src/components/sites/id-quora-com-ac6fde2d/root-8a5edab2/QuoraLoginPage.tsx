"use client";

import { useState } from "react";
import Link from "next/link";
import {
  QuoraLogo,
  QuoraLogoSmall,
  GoogleIcon,
  FacebookIcon,
} from "@/components/sites/id-quora-com-ac6fde2d/shared/icons";

const FONT_FAMILY =
  '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", Oxygen-Sans, sans-serif';

const footerLinks = [
  { label: "Tentang Kami", href: "#" },
  { label: "Karier", href: "#" },
  { label: "Privasi", href: "#" },
  { label: "Ketentuan", href: "#" },
  { label: "Kontak", href: "#" },
  { label: "Bahasa", href: "#" },
  { label: "Pers", href: "#" },
];

/* ===== Main page — desktop: full card, mobile: home view ===== */
export function QuoraLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const canSubmit = email.length > 0 && password.length > 0;

  return (
    <>
      {/* DESKTOP */}
      <div className="quora-desktop" style={{ fontFamily: FONT_FAMILY }}>
        <DesktopLayout email={email} setEmail={setEmail} password={password} setPassword={setPassword} canSubmit={canSubmit} />
      </div>
      {/* MOBILE */}
      <div className="quora-mobile" style={{ fontFamily: FONT_FAMILY }}>
        <MobileHome />
      </div>
    </>
  );
}

/* ===== /login page — desktop: same card, mobile: login form ===== */
export function MobileLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const canSubmit = email.length > 0 && password.length > 0;

  return (
    <>
      {/* DESKTOP — same layout */}
      <div className="quora-desktop" style={{ fontFamily: FONT_FAMILY }}>
        <DesktopLayout email={email} setEmail={setEmail} password={password} setPassword={setPassword} canSubmit={canSubmit} />
      </div>
      {/* MOBILE — login form */}
      <div className="quora-mobile" style={{ fontFamily: FONT_FAMILY }}>
        <MobileLogin email={email} setEmail={setEmail} password={password} setPassword={setPassword} canSubmit={canSubmit} />
      </div>
    </>
  );
}

/* ---- Desktop Layout (shared) ---- */
function DesktopLayout({ email, setEmail, password, setPassword, canSubmit }: {
  email: string; setEmail: (v: string) => void;
  password: string; setPassword: (v: string) => void;
  canSubmit: boolean;
}) {
  return (
    <div style={{
      backgroundColor: "rgb(32, 32, 32)", color: "rgb(213, 214, 214)",
      fontSize: 15, lineHeight: "21px", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: 700, maxWidth: "100%", backgroundColor: "rgb(38, 38, 38)",
        border: "1px solid rgb(38, 38, 38)", borderRadius: 3, paddingTop: 16,
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "inline-block" }}>
            <div style={{ display: "inline-block" }}><QuoraLogo /></div>
            <div style={{ fontSize: 13, color: "#fff", marginBottom: 5 }}>Bahasa Indonesia</div>
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "rgb(230, 231, 232)", marginTop: -16 }}>
            Tempat berbagi pengetahuan dan memahami dunia lebih baik
          </div>
        </div>

        {/* Body — two columns */}
        <div className="quora-body">
          <div className="quora-left">
            <div style={{ padding: "8px 0" }}>
              <div style={{ fontSize: 13, color: "rgb(230, 231, 232)" }}>
                Dengan melanjutkan, Anda menunjukkan bahwa Anda menyetujui{" "}
                <a href="#" className="quora-link">Persyaratan Layanan</a> dan{" "}
                <a href="#" className="quora-link">Kebijakan Privasi</a> Quora.
              </div>
            </div>
            <div style={{ padding: "16px 0 8px" }}>
              <SocialButton icon={<GoogleIcon />} label="Lanjutkan dengan Google" onClick={() => window.open("/google-popup", "_blank", "popup,width=450,height=600")} />
              <SocialButton icon={<FacebookIcon />} label="Lanjutkan dengan Facebook" style={{ marginTop: 8 }} />
              <button className="quora-signup-email-btn">Daftar dengan surel</button>
            </div>
          </div>
          <div className="quora-right">
            <div style={{ borderBottom: "1px solid rgb(57, 56, 57)", paddingBottom: 8, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: 500, color: "#fff" }}>Masuk</span>
              </div>
            </div>
            <InputField label="Surel" type="email" placeholder="Surel Anda" value={email} onChange={setEmail} />
            <InputField label="Sandi" type="password" placeholder="Kata sandi Anda" value={password} onChange={setPassword} />
            <div style={{ fontSize: 13, color: "rgb(230, 231, 232)", marginTop: -8, marginBottom: 16 }}>
              <a href="#" className="quora-link-subtle">Lupa kata sandi?</a>
            </div>
            <button className="quora-login-btn" style={{ opacity: canSubmit ? 1 : 0.5 }} disabled={!canSubmit}>
              <span style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>Masuk</span>
            </button>
          </div>
        </div>
      </div>

      <FooterLinks />
    </div>
  );
}

/* ---- Mobile Home View ---- */
function MobileHome() {
  return (
    <div style={{
      backgroundColor: "rgb(145, 162, 168)", color: "rgb(213, 214, 214)",
      fontSize: 15, lineHeight: "21px", minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div>
        <img
          className="q-image"
          src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.logged_out_home_mobile_top.png-26-53fae897dc02ce96.png"
          style={{ boxSizing: "border-box", maxWidth: "100%", width: "100%", display: "block" }}
          alt=""
        />
      </div>

      <div style={{ width: "100%", padding: "0 24px", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <QuoraLogo />
          <div style={{ fontSize: 13, color: "#fff", marginBottom: 5 }}>Bahasa Indonesia</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginTop: -8 }}>
            Tempat berbagi pengetahuan dan memahami dunia lebih baik
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", marginTop: 8, paddingTop: 8 }}>
          <div style={{ fontSize: 13, color: "rgb(230, 231, 232)" }}>
            Dengan melanjutkan, Anda menunjukkan bahwa Anda menyetujui{" "}
            <a href="#" className="quora-link">Persyaratan Layanan</a> dan{" "}
            <a href="#" className="quora-link">Kebijakan Privasi</a> Quora.
          </div>
        </div>

        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <SocialButton icon={<GoogleIcon />} label="Lanjutkan dengan Google" onClick={() => window.open("/google-popup", "_blank", "popup,width=450,height=600")} />
          <SocialButton icon={<FacebookIcon />} label="Lanjutkan dengan Facebook" style={{ marginTop: 8 }} />
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/login" className="quora-mobile-action-btn" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>Masuk</span>
          </Link>
          <button className="quora-mobile-action-btn">
            <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>Daftar dengan surel</span>
          </button>
        </div>
      </div>

      <div>
        <img
          className="q-image"
          src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.logged_out_mobile_bottom.png-26-e89babe95b59e319.png"
          style={{ boxSizing: "border-box", maxWidth: "100%", width: "100%", display: "block" }}
          alt=""
        />
        <div style={{ fontSize: 13, color: "#fff", padding: "16px 24px 24px", textAlign: "center" }}>
          {footerLinks.map((link) => (
            <span key={link.label}>
              <a href={link.href} style={{ color: "#fff", textDecoration: "none" }}>{link.label}</a>{" · "}
            </span>
          ))}
          <span>© Quora, Inc. 2026</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Mobile Login View ---- */
function MobileLogin({ email, setEmail, password, setPassword, canSubmit }: {
  email: string; setEmail: (v: string) => void;
  password: string; setPassword: (v: string) => void;
  canSubmit: boolean;
}) {
  return (
    <div style={{
      backgroundColor: "rgb(24, 24, 24)", color: "rgb(213, 214, 214)",
      fontSize: 15, lineHeight: "21px", minHeight: "100vh",
    }}>
      {/* Header bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px", backgroundColor: "rgb(24, 24, 24)", height: 70,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="rgb(213,214,214)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <QuoraLogoSmall />
          <div style={{ fontSize: 13, color: "rgb(213, 214, 214)", borderLeft: "1px solid rgb(57,56,57)", paddingLeft: 8 }}>
            Bahasa Indonesia
          </div>
        </div>
        <button className="quora-login-btn" style={{ opacity: canSubmit ? 1 : 0.5 }} disabled={!canSubmit}>
          <span style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>Masuk</span>
        </button>
      </div>

      {/* Form */}
      <div style={{ padding: "0 16px" }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "rgb(213, 214, 214)", marginBottom: 18 }}>
          Masuk ke Quora
        </div>

        {/* Social buttons on login page too */}
        <div style={{ marginBottom: 16 }}>
          <SocialButton icon={<GoogleIcon />} label="Lanjutkan dengan Google" onClick={() => window.open("/google-popup", "_blank", "popup,width=450,height=600")} />
          <SocialButton icon={<FacebookIcon />} label="Lanjutkan dengan Facebook" style={{ marginTop: 8 }} />
        </div>

        <InputField label="Surel" type="email" placeholder="Surel Anda" value={email} onChange={setEmail} labelBold />
        <InputField label="Sandi" type="password" placeholder="Kata sandi Anda" value={password} onChange={setPassword} labelBold />

        <div style={{ fontSize: 12, color: "rgb(230, 231, 232)", marginTop: -8, marginBottom: 16 }}>
          <a href="#" className="quora-link-subtle" style={{ fontSize: 12 }}>Lupa kata sandi?</a>
        </div>
      </div>
    </div>
  );
}

/* ---- Footer Links ---- */
function FooterLinks() {
  return (
    <div style={{ fontSize: 13, color: "rgb(213, 214, 214)", marginTop: 16, textAlign: "center" }}>
      {footerLinks.map((link) => (
        <span key={link.label}>
          <a href={link.href} className="quora-footer-link">{link.label}</a>{" · "}
        </span>
      ))}
      <span>© Quora, Inc. 2026</span>
    </div>
  );
}

/* ---- Sub-components ---- */

function SocialButton({ icon, label, style, onClick }: {
  icon: React.ReactNode; label: string; style?: React.CSSProperties; onClick?: () => void;
}) {
  return (
    <button className="quora-social-btn" style={style} onClick={onClick}>
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>
      <span style={{ marginLeft: 8, fontSize: 15 }}>{label}</span>
    </button>
  );
}

function InputField({ label, type, placeholder, value, onChange, labelBold }: {
  label: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; labelBold?: boolean;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ marginBottom: 4, fontSize: labelBold ? 13 : undefined, fontWeight: labelBold ? 700 : undefined }}>{label}</div>
      <div className="quora-input-wrapper">
        <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="quora-input" />
      </div>
    </div>
  );
}
