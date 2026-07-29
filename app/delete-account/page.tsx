import { redirect } from 'next/navigation';

// Bare /delete-account is the URL pasted into the Google Play Data safety form.
// Redirect to the default locale, mirroring the root `/` -> `/en` redirect.
export default function DeleteAccountRedirect() {
  redirect('/en/delete-account');
}
