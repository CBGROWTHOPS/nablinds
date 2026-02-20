// Submit configurator form to GoHighLevel - same webhook as consultation form

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/pKgTEQf1DpuyRDPhTsOA/webhook-trigger/aVm43sDIMgzlnSoyZT6N';

function formatAustralianPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 9 && digits.startsWith('4')) return `+61${digits}`;
  if (digits.length === 11 && digits.startsWith('614')) return `+${digits}`;
  if (digits.length === 10 && digits.startsWith('0')) return `+61${digits.slice(1)}`;
  return phone;
}

export async function submitConfiguratorToWebhook(data: {
  room: string;
  productCategory: string;
  productType: string;
  colour: string;
  customColour?: string;
  controlType?: string;
  knowsDimensions: boolean;
  widthCm?: string;
  heightCm?: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  suburb: string;
}): Promise<boolean> {
  const formattedPhone = formatAustralianPhone(data.mobile);

  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    phone: formattedPhone,
    email: data.email,
    source: 'Build Your Project Configurator',
    form_name: 'Window Covering Configurator',
    page_url: window.location.href,
    service_type: `${data.productCategory} - ${data.productType}`,
    project_location: data.suburb,
    room: data.room,
    product_category: data.productCategory,
    product_type: data.productType,
    colour: data.colour,
    ...(data.customColour && { custom_colour: data.customColour }),
    ...(data.controlType && { control_type: data.controlType }),
    knows_dimensions: data.knowsDimensions,
    ...(data.widthCm && { width_cm: data.widthCm }),
    ...(data.heightCm && { height_cm: data.heightCm }),
  };

  try {
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Configurator webhook failed:', response.status, response.statusText);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Configurator webhook error:', error);
    return false;
  }
}
