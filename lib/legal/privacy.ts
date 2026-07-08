// Privacy policy content (GDPR Art. 13/14), one markdown string per locale.
// The German version is the authoritative one; the English version is a
// convenience translation. Placeholders in [BRACKETS] must be filled in
// before launch.

export const PRIVACY_UPDATED = '2026-07-08';

const en = `
# Privacy Policy

*Last updated: 8 July 2026*

This privacy policy explains how Librea ("we", "us") processes personal data
when you use the Librea mobile app and this website, and what rights you have
under the EU General Data Protection Regulation (GDPR).

## 1. Controller

The controller responsible for data processing is:

**[FULL NAME]**
[STREET AND NUMBER]
[POSTAL CODE, CITY]
Germany
Email: [CONTACT EMAIL]

## 2. Overview

Librea is a marketplace for second-hand books. Depending on how you use the
app, we process the following categories of data:

- **Account data** — email address, password (stored only as a cryptographic
  hash), and optionally your phone number.
- **Profile data** — display name, profile picture, postal code (ZIP), and the
  languages and genres you select.
- **Book and activity data** — your bookshelf, listings, wishlist, reviews,
  ratings, reading sessions, and book club memberships.
- **Communication data** — messages you exchange with other users and
  transaction requests between users.
- **Location data** — your device location (only while using the app, and only
  with your permission) to show nearby books and readers on the map.
- **Contact data** — phone numbers from your address book (only with your
  permission) to find friends who already use Librea.
- **Device data** — a push notification token for your device, if you enable
  notifications.

## 3. Hosting and backend (Supabase)

Our database, authentication, and file storage run on Supabase, hosted in
the EU (AWS eu-central-1, Frankfurt, Germany). Supabase processes data
on our behalf under a data processing agreement (Art. 28 GDPR). Legal basis:
Art. 6(1)(b) GDPR (performance of the user contract) and Art. 6(1)(f) GDPR
(secure, reliable operation of the service).

## 4. Account and profile

To use Librea you create an account with your email address and a password.
Your phone number, if provided, is used only for friend matching (see
section 6) and is never shown to other users or exposed through the API.
Legal basis: Art. 6(1)(b) GDPR.

## 5. Location and map

With your consent (device permission), we use your location while the app is
open to show books and readers near you. Your exact location is never shown
to other users: pins on the map are randomly shifted within your postal code
area. You can revoke the permission at any time in your device settings; the
map then works with reduced functionality. Legal basis: Art. 6(1)(a) GDPR
(consent).

The map itself is provided by Google Maps (Google Ireland Ltd., Gordon House,
Barrow Street, Dublin 4, Ireland). When the map loads, your IP address and
approximate location are transmitted to Google. Google may transfer data to
the USA; Google LLC is certified under the EU-US Data Privacy Framework.
See [Google's privacy policy](https://policies.google.com/privacy).

## 6. Friend finding via contacts

If you choose to use the friend-finding feature, the app asks for permission
to access your address book. Phone numbers from your contacts are then
transmitted to our server **solely** to check whether a matching Librea
account exists. The numbers are used only for this comparison and are not
permanently stored or used for any other purpose. Please only use this
feature if you are confident your contacts would not object. Legal basis:
Art. 6(1)(a) GDPR (consent); for the matching itself Art. 6(1)(f) GDPR
(legitimate interest in connecting users). You can use Librea fully without
granting contacts access.

## 7. Camera and photos

With your permission, the app uses your camera to scan book barcodes (ISBN)
and to take photos for listings and your profile picture. Photos are uploaded
only when you actively choose to. Legal basis: Art. 6(1)(b) GDPR.

## 8. Messages and transactions

Messages you send to other users and transaction requests (e.g. buying or
reserving a book) are stored on our servers so we can deliver them and
display your history. They are visible only to the participants. Legal basis:
Art. 6(1)(b) GDPR.

## 9. Push notifications

If you enable notifications, we store a push token for your device and send
notifications (e.g. new messages, friend requests, transaction updates) via
Expo (Expo, Inc., USA). The token does not identify you personally to Expo.
Transfers to the USA are safeguarded by standard contractual clauses
(Art. 46(2)(c) GDPR). You can disable notifications at any time in your
device settings. Legal basis: Art. 6(1)(a) GDPR (consent).

## 10. Book search (Open Library)

When you search for book metadata, your search query is sent to the Open
Library API (Internet Archive, San Francisco, USA) to retrieve title, author,
and cover information. No account data is transmitted with the query beyond
what is technically necessary (IP address). Legal basis: Art. 6(1)(f) GDPR
(providing book metadata without maintaining our own catalogue).

## 11. Retention and deletion

We store your data for as long as your account exists. You can delete your
account at any time in the app settings; this deletes your account and the
personal data associated with it. Data we are legally required to retain
(e.g. under commercial or tax law, if applicable) is deleted after the
respective retention period expires.

## 12. Your rights

You have the right to:

- **Access** your stored data (Art. 15 GDPR)
- **Rectification** of inaccurate data (Art. 16 GDPR)
- **Erasure** (Art. 17 GDPR)
- **Restriction of processing** (Art. 18 GDPR)
- **Data portability** (Art. 20 GDPR)
- **Object** to processing based on legitimate interests (Art. 21 GDPR)
- **Withdraw consent** at any time with effect for the future (Art. 7(3) GDPR)

You also have the right to lodge a complaint with a supervisory authority,
in particular in the German federal state of your habitual residence
([COMPETENT STATE DATA PROTECTION AUTHORITY]).

To exercise your rights, contact us at [CONTACT EMAIL].

## 13. No automated decision-making

We do not use automated decision-making or profiling within the meaning of
Art. 22 GDPR.

## 14. Changes to this policy

We may update this policy when the app or legal requirements change. The
current version is always available at this address; material changes will
be announced in the app.
`;

const de = `
# Datenschutzerklärung

*Stand: 8. Juli 2026*

Diese Datenschutzerklärung informiert darüber, wie Librea („wir", „uns")
personenbezogene Daten bei der Nutzung der Librea-App und dieser Website
verarbeitet und welche Rechte Ihnen nach der Datenschutz-Grundverordnung
(DSGVO) zustehen.

## 1. Verantwortlicher

Verantwortlicher für die Datenverarbeitung ist:

**[VOLLSTÄNDIGER NAME]**
[STRASSE UND HAUSNUMMER]
[PLZ, ORT]
Deutschland
E-Mail: [KONTAKT-E-MAIL]

## 2. Überblick

Librea ist ein Marktplatz für gebrauchte Bücher. Je nach Nutzung der App
verarbeiten wir folgende Datenkategorien:

- **Kontodaten** — E-Mail-Adresse, Passwort (ausschließlich als
  kryptografischer Hash gespeichert) sowie optional Ihre Telefonnummer.
- **Profildaten** — Anzeigename, Profilbild, Postleitzahl sowie die von Ihnen
  gewählten Sprachen und Genres.
- **Buch- und Aktivitätsdaten** — Ihr Bücherregal, Inserate, Wunschliste,
  Rezensionen, Bewertungen, Lese-Sessions und Buchclub-Mitgliedschaften.
- **Kommunikationsdaten** — Nachrichten mit anderen Nutzern und
  Transaktionsanfragen zwischen Nutzern.
- **Standortdaten** — Ihr Gerätestandort (nur während der Nutzung der App und
  nur mit Ihrer Erlaubnis), um Bücher und Leser in Ihrer Nähe auf der Karte
  anzuzeigen.
- **Kontaktdaten** — Telefonnummern aus Ihrem Adressbuch (nur mit Ihrer
  Erlaubnis), um Freunde zu finden, die Librea bereits nutzen.
- **Gerätedaten** — ein Push-Token Ihres Geräts, sofern Sie Benachrichtigungen
  aktivieren.

## 3. Hosting und Backend (Supabase)

Unsere Datenbank, Authentifizierung und Dateispeicherung laufen bei Supabase
und werden in der EU gehostet (AWS eu-central-1, Frankfurt am Main). Supabase verarbeitet
Daten in unserem Auftrag auf Grundlage eines Auftragsverarbeitungsvertrags
(Art. 28 DSGVO). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des
Nutzungsvertrags) sowie Art. 6 Abs. 1 lit. f DSGVO (sicherer und zuverlässiger
Betrieb des Dienstes).

## 4. Konto und Profil

Zur Nutzung von Librea erstellen Sie ein Konto mit E-Mail-Adresse und
Passwort. Ihre Telefonnummer wird, sofern angegeben, ausschließlich für die
Freundesuche verwendet (siehe Ziffer 6) und weder anderen Nutzern angezeigt
noch über die API zugänglich gemacht. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
DSGVO.

## 5. Standort und Karte

Mit Ihrer Einwilligung (Geräteberechtigung) verwenden wir Ihren Standort
während der Nutzung der App, um Bücher und Leser in Ihrer Nähe anzuzeigen.
Ihr genauer Standort wird anderen Nutzern niemals angezeigt: Pins auf der
Karte werden innerhalb Ihres Postleitzahlgebiets zufällig versetzt. Sie
können die Berechtigung jederzeit in den Geräteeinstellungen widerrufen; die
Karte funktioniert dann mit eingeschränktem Umfang. Rechtsgrundlage:
Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).

Die Karte selbst wird von Google Maps bereitgestellt (Google Ireland Ltd.,
Gordon House, Barrow Street, Dublin 4, Irland). Beim Laden der Karte werden
Ihre IP-Adresse und Ihr ungefährer Standort an Google übermittelt. Google
kann Daten in die USA übertragen; Google LLC ist unter dem EU-US Data
Privacy Framework zertifiziert. Siehe
[Googles Datenschutzerklärung](https://policies.google.com/privacy).

## 6. Freundesuche über Kontakte

Wenn Sie die Freundesuche nutzen möchten, fragt die App die Berechtigung für
den Zugriff auf Ihr Adressbuch an. Telefonnummern aus Ihren Kontakten werden
dann **ausschließlich** an unseren Server übermittelt, um zu prüfen, ob ein
passendes Librea-Konto existiert. Die Nummern werden nur für diesen Abgleich
verwendet und weder dauerhaft gespeichert noch für andere Zwecke genutzt.
Bitte nutzen Sie diese Funktion nur, wenn Sie davon ausgehen können, dass
Ihre Kontakte damit einverstanden wären. Rechtsgrundlage: Art. 6 Abs. 1
lit. a DSGVO (Einwilligung); für den Abgleich selbst Art. 6 Abs. 1 lit. f
DSGVO (berechtigtes Interesse an der Vernetzung der Nutzer). Librea ist ohne
Kontaktzugriff uneingeschränkt nutzbar.

## 7. Kamera und Fotos

Mit Ihrer Erlaubnis verwendet die App Ihre Kamera, um Buch-Barcodes (ISBN) zu
scannen und Fotos für Inserate sowie Ihr Profilbild aufzunehmen. Fotos werden
nur hochgeladen, wenn Sie dies aktiv auslösen. Rechtsgrundlage: Art. 6 Abs. 1
lit. b DSGVO.

## 8. Nachrichten und Transaktionen

Nachrichten an andere Nutzer und Transaktionsanfragen (z. B. Kauf oder
Reservierung eines Buches) werden auf unseren Servern gespeichert, um sie
zuzustellen und Ihren Verlauf anzuzeigen. Sie sind nur für die Beteiligten
sichtbar. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

## 9. Push-Benachrichtigungen

Wenn Sie Benachrichtigungen aktivieren, speichern wir ein Push-Token Ihres
Geräts und versenden Benachrichtigungen (z. B. neue Nachrichten,
Freundschaftsanfragen, Transaktions-Updates) über Expo (Expo, Inc., USA).
Das Token identifiziert Sie gegenüber Expo nicht persönlich. Übermittlungen
in die USA sind durch Standardvertragsklauseln abgesichert (Art. 46 Abs. 2
lit. c DSGVO). Sie können Benachrichtigungen jederzeit in den
Geräteeinstellungen deaktivieren. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO
(Einwilligung).

## 10. Buchsuche (Open Library)

Bei der Suche nach Buchdaten wird Ihre Suchanfrage an die Open-Library-API
(Internet Archive, San Francisco, USA) gesendet, um Titel, Autor und Cover
abzurufen. Dabei werden über das technisch Notwendige (IP-Adresse) hinaus
keine Kontodaten übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
(Bereitstellung von Buchdaten ohne eigenen Katalog).

## 11. Speicherdauer und Löschung

Wir speichern Ihre Daten, solange Ihr Konto besteht. Sie können Ihr Konto
jederzeit in den App-Einstellungen löschen; damit werden Ihr Konto und die
damit verbundenen personenbezogenen Daten gelöscht. Daten, zu deren
Aufbewahrung wir gesetzlich verpflichtet sind (z. B. handels- oder
steuerrechtlich, soweit einschlägig), werden nach Ablauf der jeweiligen
Frist gelöscht.

## 12. Ihre Rechte

Sie haben das Recht auf:

- **Auskunft** über Ihre gespeicherten Daten (Art. 15 DSGVO)
- **Berichtigung** unrichtiger Daten (Art. 16 DSGVO)
- **Löschung** (Art. 17 DSGVO)
- **Einschränkung der Verarbeitung** (Art. 18 DSGVO)
- **Datenübertragbarkeit** (Art. 20 DSGVO)
- **Widerspruch** gegen Verarbeitungen auf Grundlage berechtigter Interessen
  (Art. 21 DSGVO)
- **Widerruf erteilter Einwilligungen** jederzeit mit Wirkung für die Zukunft
  (Art. 7 Abs. 3 DSGVO)

Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
beschweren, insbesondere in dem Bundesland Ihres gewöhnlichen Aufenthalts
([ZUSTÄNDIGE LANDESDATENSCHUTZBEHÖRDE]).

Zur Ausübung Ihrer Rechte wenden Sie sich an [KONTAKT-E-MAIL].

## 13. Keine automatisierte Entscheidungsfindung

Wir verwenden keine automatisierte Entscheidungsfindung und kein Profiling
im Sinne von Art. 22 DSGVO.

## 14. Änderungen dieser Erklärung

Wir passen diese Erklärung an, wenn sich die App oder rechtliche Vorgaben
ändern. Die aktuelle Fassung ist stets unter dieser Adresse abrufbar;
wesentliche Änderungen kündigen wir in der App an.
`;

export const privacyContent: Record<string, string> = { en, de };
