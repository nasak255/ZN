import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Verity AI', description: 'AI Platform' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html><body>{children}</body></html>); }
