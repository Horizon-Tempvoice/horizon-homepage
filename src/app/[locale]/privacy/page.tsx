import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalLayout from "@/components/LegalLayout";
import RevealEmail from "@/components/RevealEmail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "de"
        ? "Datenschutzerklärung - Horizon"
        : "Privacy Policy - Horizon",
    description:
      locale === "de"
        ? "Erfahre, welche Daten Horizon erhebt, wie sie verwendet werden und welche Rechte dir zustehen."
        : "Learn how Horizon collects, uses, and protects your data when you use our Discord bot.",
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "de") {
    return (
      <LegalLayout title="Datenschutzrichtlinie" subtitle="Horizon Discord-Bot">
        <p>
          Der Horizon Discord-Bot (Anwendungs-ID: 1463545589907197996) wird von
          Fabian Thomys entwickelt und betrieben. Mit der Nutzung von Horizon –
          sei es durch das Hinzufügen zu einem Server oder durch direkte
          Interaktion mit dem Bot – wird diese Datenschutzrichtlinie akzeptiert.
          Sie legt fest, welche Daten erhoben werden, wie mit ihnen umgegangen
          wird und welche Rechte Nutzern zustehen. Wer dieser Richtlinie nicht
          zustimmt, darf Horizon nicht verwenden.
        </p>

        <h2>1. Erhobene Daten</h2>
        <p>
          Der Bot speichert nur das, was für seinen Betrieb tatsächlich benötigt
          wird. Dazu gehören:
        </p>
        <ul>
          <li>
            <strong>Discord-Benutzer-IDs:</strong> Werden benötigt, um
            Berechtigungen zu prüfen und temporäre Sprachkanäle korrekt
            zuzuordnen.
          </li>
          <li>
            <strong>Serverdaten:</strong> Dazu zählen die Server-ID, der
            Servername, der Server-Avatar, Kanal- und Rollen-IDs sowie alle
            Einstellungen, die für den Betrieb des Bots auf dem jeweiligen
            Server konfiguriert wurden.
          </li>
          <li>
            <strong>Kanalkonfigurationen:</strong> Gespeichert werden
            Kanalnamen, eingestellte Nutzerlimits sowie Zugriffslisten
            (Whitelist/Blacklist), soweit diese für die automatische
            Wiederherstellung von Kanälen erforderlich sind.
          </li>
        </ul>

        <h2>2. Zweck der Datenverarbeitung</h2>
        <p>Die gespeicherten Daten werden ausschließlich dazu verwendet, um:</p>
        <ul>
          <li>
            den Bot und seine Funktionen auf Discord-Servern bereitzustellen und
            zu betreiben.
          </li>
          <li>
            eingehende Befehle und Nutzerinteraktionen korrekt zu verarbeiten.
          </li>
          <li>
            serverspezifische Konfigurationen dauerhaft zu speichern und
            anzuwenden.
          </li>
          <li>
            Missbrauch des Bots frühzeitig zu erkennen und zu unterbinden.
          </li>
          <li>
            Partner- oder verifizierte Server, sofern vorhanden, auf der Website{" "}
            <a
              href="https://horizon-bot.me"
              className="text-[#00A0FF] hover:underline"
            >
              horizon-bot.me
            </a>{" "}
            darzustellen.
          </li>
        </ul>
        <p>
          Eine Weitergabe personenbezogener Daten an Dritte zu kommerziellen
          oder werblichen Zwecken findet nicht statt.
        </p>

        <h2>3. Speicherung und Aufbewahrungsdauer</h2>
        <ul>
          <li>
            Alle Daten werden auf gesicherten Servern des Entwicklers
            gespeichert. Die Aufbewahrung erfolgt nur so lange, wie der Betrieb
            des Bots es erfordert oder gesetzliche Vorgaben eine längere
            Speicherung vorschreiben.
          </li>
          <li>
            Nutzer sowie Serveradministratoren können die Löschung ihrer
            gespeicherten Daten jederzeit schriftlich beantragen (siehe
            Abschnitt 5).
          </li>
        </ul>

        <h2>4. Datensicherheit</h2>
        <p>
          Zum Schutz der gespeicherten Daten vor unberechtigtem Zugriff,
          Veränderung oder Verlust werden geeignete technische und
          organisatorische Sicherheitsmaßnahmen getroffen. Da sich
          Sicherheitsrisiken bei digitalen Diensten nie vollständig ausschließen
          lassen, kann eine absolute Datensicherheit nicht zugesichert werden.
        </p>

        <h2>5. Rechte der Nutzer</h2>
        <p>Jeder Nutzer hat das Recht:</p>
        <ul>
          <li>
            Auskunft darüber zu verlangen, welche Daten der Bot zu seiner Person
            gespeichert hat.
          </li>
          <li>
            die Berichtigung unzutreffender oder die vollständige Löschung
            gespeicherter Daten zu beantragen.
          </li>
          <li>
            die dem Bot erteilten Berechtigungen jederzeit über die
            Discord-Servereinstellungen zu entziehen.
          </li>
        </ul>
        <p>
          Anfragen zu diesen Rechten können per E-Mail an{" "}
          <RevealEmail email="hello@horizon-bot.me" /> gestellt werden.
        </p>

        <h2>6. Einhaltung der Discord-Richtlinien</h2>
        <p>
          Horizon wird vollständig im Einklang mit den{" "}
          <a
            href="https://discord.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A0FF] hover:underline"
          >
            Discord-Nutzungsbedingungen
          </a>{" "}
          sowie den{" "}
          <a
            href="https://discord.com/developers/docs/policies-and-agreements/developer-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A0FF] hover:underline"
          >
            Discord-Entwicklerrichtlinien
          </a>{" "}
          betrieben. Es werden keine Daten erhoben oder gespeichert, die über
          das für den Betrieb des Bots notwendige Maß hinausgehen.
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Privacy Policy" subtitle="Horizon Discord Bot">
      <p>
        The Horizon Discord Bot (Application ID: 1463545589907197996) is
        developed and operated by Fabian Thomys. By using Horizon – whether by
        adding it to a server or interacting with it directly – you agree to
        this Privacy Policy. It outlines what data is collected, how it is
        handled, and what rights users have. If you do not agree to this policy,
        you may not use Horizon.
      </p>

      <h2>1. Data Collected</h2>
      <p>
        The bot only stores what is strictly necessary for its operation. This
        includes:
      </p>
      <ul>
        <li>
          <strong>Discord User IDs:</strong> Required to verify permissions and
          correctly assign temporary voice channels.
        </li>
        <li>
          <strong>Server Data:</strong> This includes the server ID, server
          name, server avatar, channel and role IDs, as well as all settings
          configured for the bot on the respective server.
        </li>
        <li>
          <strong>Channel Configurations:</strong> Channel names, configured
          user limits, and access lists (whitelist/blacklist), to the extent
          required for the automatic restoration of channels.
        </li>
      </ul>

      <h2>2. Purpose of Data Processing</h2>
      <p>The stored data is used exclusively to:</p>
      <ul>
        <li>
          provide and operate the bot and its features on Discord servers.
        </li>
        <li>correctly process incoming commands and user interactions.</li>
        <li>persistently store and apply server-specific configurations.</li>
        <li>detect and prevent misuse of the bot at an early stage.</li>
        <li>
          display partner or verified servers, where applicable, on the website{" "}
          <a
            href="https://horizon-bot.me"
            className="text-[#00A0FF] hover:underline"
          >
            horizon-bot.me
          </a>
          .
        </li>
      </ul>
      <p>
        Personal data is not shared with third parties for commercial or
        advertising purposes.
      </p>

      <h2>3. Storage and Retention</h2>
      <ul>
        <li>
          All data is stored on secured servers maintained by the developer. It
          is retained only for as long as the operation of the bot requires, or
          as long as legal obligations demand.
        </li>
        <li>
          Users and server administrators may request the deletion of their
          stored data at any time in writing (see Section 5).
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        Appropriate technical and organizational security measures are in place
        to protect stored data from unauthorized access, alteration, or loss. As
        with any digital service, absolute security cannot be guaranteed.
      </p>

      <h2>5. User Rights</h2>
      <p>Every user has the right to:</p>
      <ul>
        <li>
          request information about what data the bot has stored about them.
        </li>
        <li>
          request the correction of inaccurate data or the complete deletion of
          stored data.
        </li>
        <li>
          revoke the permissions granted to the bot at any time through the
          Discord server settings.
        </li>
      </ul>
      <p>
        Requests regarding these rights can be submitted by email to{" "}
        <RevealEmail email="hello@horizon-bot.me" />.
      </p>

      <h2>6. Discord Policy Compliance</h2>
      <p>
        Horizon is operated in full compliance with the{" "}
        <a
          href="https://discord.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A0FF] hover:underline"
        >
          Discord Terms of Service
        </a>{" "}
        and the{" "}
        <a
          href="https://discord.com/developers/docs/policies-and-agreements/developer-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A0FF] hover:underline"
        >
          Discord Developer Policy
        </a>
        . No data is collected or stored beyond what is necessary for the bot's
        operation.
      </p>
    </LegalLayout>
  );
}
