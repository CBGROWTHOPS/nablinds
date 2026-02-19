import { useState } from 'react';
import { Mail } from 'lucide-react';
import { submitToWebhook } from '../utils/webhook';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'submitting') return;

    setStatus('submitting');

    const ok = await submitToWebhook({
      name: 'Newsletter Subscriber',
      email: email.trim(),
      phone: '',
      message: 'Newsletter signup — 15% off incentive',
    });

    if (ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <p className="text-warm-dark font-medium">Thanks! Check your email for your 15% off code.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        disabled={status === 'submitting'}
        className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-warm-dark disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="px-6 py-3 bg-navy text-white rounded font-medium hover:bg-navy/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        <Mail className="w-5 h-5" />
        {status === 'submitting' ? 'Sending...' : 'Get 15% Off'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 col-span-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
