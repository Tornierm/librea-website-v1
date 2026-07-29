// Public account-deletion instructions (app package dev.librea.app).
// Linked from the Google Play store listing to satisfy the Data safety
// form's account-deletion requirement, so the page must stay publicly
// reachable at /delete-account and indexable.

const en = `
# Delete your Librea account

This page explains how to delete your Librea account (Android app package
\`dev.librea.app\`) and what happens to your data. Deleting your account is
permanent and cannot be undone.

## How to delete your account

1. Open the Librea app and sign in.
2. Go to the **Profile** tab.
3. Open **Settings**.
4. Scroll to the **Danger Zone** and tap **Delete account**.
5. Type the word **delete** to confirm, then tap **Delete**.

**Note:** Your account is deleted immediately, you are signed out, and the
action is permanent — it cannot be undone.

## What data is deleted

When you delete your account, the following personal data is permanently removed:

- Your profile and account login
- Your bookshelf and marketplace listings
- Reviews, comments and replies, and likes
- Messages and conversations
- Friendships, follows and ratings
- Notifications and push-notification tokens
- Uploaded images (profile and book photos)

## What is kept

- Shared book catalogue data — title, author, cover and genre, identified by
  ISBN. This is general reference data shared across the app, not personal to
  you, and is retained.

## Data retention

Personal data is deleted immediately when you confirm. Residual copies that
remain in our routine encrypted backups are removed within 30 days.

## Need help or can't access the app?

If you cannot access the app, email us at
[support@librea-marketplace.com](mailto:support@librea-marketplace.com) and we
will delete your account and associated data on your behalf.
`;

const de = `
# Librea-Konto löschen

Diese Seite erklärt, wie du dein Librea-Konto (Android-App-Paket
\`dev.librea.app\`) löschst und was mit deinen Daten passiert. Das Löschen deines
Kontos ist dauerhaft und kann nicht rückgängig gemacht werden.

## So löschst du dein Konto

1. Öffne die Librea-App und melde dich an.
2. Gehe zum Tab **Profil**.
3. Öffne die **Einstellungen**.
4. Scrolle zur **Gefahrenzone (Danger Zone)** und tippe auf **Konto löschen**.
5. Gib das Wort **delete** ein, um zu bestätigen, und tippe dann auf **Löschen**.

**Hinweis:** Dein Konto wird sofort gelöscht, du wirst abgemeldet, und die
Aktion ist dauerhaft — sie kann nicht rückgängig gemacht werden.

## Welche Daten gelöscht werden

Beim Löschen deines Kontos werden die folgenden personenbezogenen Daten dauerhaft entfernt:

- Dein Profil und dein Konto-Login
- Dein Bücherregal und deine Marktplatz-Anzeigen
- Bewertungen, Kommentare und Antworten sowie Likes
- Nachrichten und Konversationen
- Freundschaften, Follows und Ratings
- Benachrichtigungen und Push-Benachrichtigungs-Tokens
- Hochgeladene Bilder (Profil- und Buchfotos)

## Was aufbewahrt wird

- Gemeinsame Katalogdaten zu Büchern — Titel, Autor, Cover und Genre,
  identifiziert über die ISBN. Dies sind allgemeine Referenzdaten, die appweit
  geteilt werden, nicht personenbezogen, und werden aufbewahrt.

## Datenaufbewahrung

Personenbezogene Daten werden sofort bei deiner Bestätigung gelöscht.
Restkopien, die in unseren routinemäßigen verschlüsselten Backups verbleiben,
werden innerhalb von 30 Tagen entfernt.

## Hilfe benötigt oder kein Zugriff auf die App?

Wenn du keinen Zugriff auf die App hast, schreibe uns an
[support@librea-marketplace.com](mailto:support@librea-marketplace.com), und wir
löschen dein Konto und die zugehörigen Daten für dich.
`;

export const deleteAccountContent: Record<string, string> = { en, de };
