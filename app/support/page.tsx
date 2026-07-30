import { redirect } from 'next/navigation';

// Bare /support is the App Store / Google Play "Support URL". Librea is
// Germany-first and German-language, so send it to the German page.
export default function SupportRedirect() {
  redirect('/de/support');
}
