interface WebhookPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  page_url: string;
  form_name: string;
  source: string;
}

function formatPhoneE164(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length === 10) {
    return `+1${digitsOnly}`;
  }

  if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    return `+${digitsOnly}`;
  }

  return digitsOnly;
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/);

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }

  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');

  return { firstName, lastName };
}

export async function submitToWebhook(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  address?: string;
}): Promise<boolean> {
  const { firstName, lastName } = splitName(data.name);
  const formattedPhone = formatPhoneE164(data.phone);

  const payload: WebhookPayload = {
    first_name: firstName,
    last_name: lastName,
    email: data.email,
    phone: formattedPhone,
    message: `${data.message}${data.address ? `\n\nAddress: ${data.address}` : ''}`,
    page_url: window.location.href,
    form_name: 'Free Consultation',
    source: 'Website',
  };

  try {
    const response = await fetch(
      'https://services.leadconnectorhq.com/hooks/pKgTEQf1DpuyRDPhTsOA/webhook-trigger/aVm43sDIMgzlnSoyZT6N',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.error('Webhook submission failed:', response.status, response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Webhook submission error:', error);
    return false;
  }
}
