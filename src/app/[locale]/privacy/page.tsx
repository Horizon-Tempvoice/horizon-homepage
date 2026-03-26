import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy - Horizon",
  description: "Learn how Horizon collects, uses, and protects your data when you use our Discord bot.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Last updated: March 2025">
      <h2>Introduction</h2>
      <p>
        Welcome to Horizon. We are committed to protecting and respecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our Discord bot.
      </p>

      <h2>Information We Collect</h2>
      <p>When you use Horizon, we collect the following information:</p>
      <ol>
        <li>
          <strong>Guild ID</strong>: The unique identifier for the Discord
          server (guild) where the bot is active.
        </li>
        <li>
          <strong>Channel ID</strong>: The unique identifier for the specific
          channels where the bot is active.
        </li>
        <li>
          <strong>User ID</strong>: The unique identifier for users interacting
          with the bot.
        </li>
      </ol>

      <h2>How We Use Your Information</h2>
      <p>
        The information we collect is used solely for the purpose of providing
        and improving our services. Specifically, we use the collected data to:
      </p>
      <ul>
        <li>Generate statistics related to the usage of the bot.</li>
        <li>Improve the functionality and user experience of the bot.</li>
        <li>Diagnostics and troubleshooting to identify and fix issues.</li>
        <li>
          Ensure the proper operation of the bot within the Discord platform.
        </li>
      </ul>

      <h2>Data Storage and Security</h2>
      <p>
        We are committed to ensuring that your information is secure. To prevent
        unauthorized access or disclosure, we have put in place suitable
        physical, electronic, and managerial procedures to safeguard and secure
        the information we collect.
      </p>
      <ol>
        <li>
          <strong>Data Storage</strong>: Your data is stored securely and is
          only accessible by the bot developer for diagnostic purposes.
        </li>
        <li>
          <strong>Data Retention</strong>: We retain your data only for as long
          as necessary to fulfill the purposes outlined in this policy.
        </li>
      </ol>

      <h2>Sharing Your Information</h2>
      <p>
        We do not share, sell, or distribute your personal information with any
        third parties except in the following circumstances:
      </p>
      <ul>
        <li>
          To comply with legal obligations or respond to lawful requests by
          public authorities.
        </li>
        <li>To protect and defend the rights or property of Horizon.</li>
        <li>
          To prevent or investigate possible wrongdoing in connection with the
          bot.
        </li>
      </ul>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request the correction of any inaccurate information.</li>
        <li>Request the deletion of your data.</li>
        <li>Object to the processing of your data.</li>
      </ul>
      <p>
        If you wish to exercise any of these rights, please contact us at{" "}
        <a
          href="mailto:hello@horizon-bot.me"
          className="text-[#00A0FF] hover:underline"
        >
          hello@horizon-bot.me
        </a>{" "}
        or via our{" "}
        <a
          href="https://support.horizon-bot.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A0FF] hover:underline"
        >
          Support Server
        </a>
        .
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>
    </LegalLayout>
  );
}
