import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service - Horizon",
  description:
    "Read the Terms of Service for using Horizon, the Discord bot for temporary voice channels.",
};

export default async function TosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <LegalLayout title="Terms of Service" subtitle="Last updated: March 2025">
      <h2>Introduction</h2>
      <p>
        Welcome to Horizon. By using our Discord bot, you agree to comply with
        and be bound by the following terms and conditions. Please review these
        Terms of Service carefully before using our bot.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing and using Horizon, you accept and agree to be bound by
        these terms. If you do not agree to these terms, you should not use the
        bot.
      </p>

      <h2>Description of Service</h2>
      <p>
        Horizon provides various features and functionalities to enhance your
        experience on Discord. These may include, but are not limited to,
        generating statistics, managing server activities, and interacting with
        users.
      </p>

      <h2>User Responsibilities</h2>
      <p>When using Horizon, you agree to:</p>
      <ol>
        <li>
          <strong>Compliance with Laws</strong>: Use the bot in compliance with
          all applicable local, state, national, and international laws and
          regulations.
        </li>
        <li>
          <strong>Respectful Behavior</strong>: Interact with the bot and other
          users respectfully and refrain from any behavior that is abusive,
          harassing, or otherwise inappropriate.
        </li>
        <li>
          <strong>Accurate Information</strong>: Provide accurate information
          when required and refrain from impersonating others.
        </li>
      </ol>

      <h2>Prohibited Activities</h2>
      <p>
        You agree not to engage in any of the following prohibited activities:
      </p>
      <ol>
        <li>
          <strong>Unauthorized Access</strong>: Attempting to gain unauthorized
          access to the bot, its servers, or any related systems or networks.
        </li>
        <li>
          <strong>Exploitation</strong>: Using the bot for any commercial
          purposes without prior written consent from Horizon.
        </li>
        <li>
          <strong>Malicious Activities</strong>: Distributing malware, viruses,
          or any other harmful software through the bot.
        </li>
      </ol>

      <h2>Data Collection and Privacy</h2>
      <p>
        Our{" "}
        <a href="/privacy" className="text-[#00A0FF] hover:underline">
          Privacy Policy
        </a>{" "}
        outlines how we collect, use, and protect your information. By using the
        bot, you consent to the data practices described in the Privacy Policy.
      </p>

      <h2>Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to Horizon at
        any time, without prior notice or liability, for any reason, including
        if you breach these Terms of Service.
      </p>

      <h2>Modifications to Terms</h2>
      <p>
        Horizon reserves the right to modify these Terms of Service at any time.
        We will notify you of any changes by posting the new Terms of Service on
        this page. You are advised to review these Terms of Service periodically
        for any changes. Continued use of the bot after any such changes shall
        constitute your consent to such changes.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Horizon shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits or revenues, whether incurred directly
        or indirectly, or any loss of data, use, goodwill, or other intangible
        losses resulting from your use or inability to use the bot.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance
        with the laws of Germany, without regard to its conflict of law
        principles.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at{" "}
        <a
          href="mailto:hello@horizon-bot.me"
          className="text-[#00A0FF] hover:underline"
        >
          hello@horizon-bot.me
        </a>
        .
      </p>
    </LegalLayout>
  );
}
