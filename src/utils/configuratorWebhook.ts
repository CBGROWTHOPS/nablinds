// Submit configurator form to GoHighLevel - same webhook as consultation form

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/pKgTEQf1DpuyRDPhTsOA/webhook-trigger/aVm43sDIMgzlnSoyZT6N';

function formatAustralianPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 9 && digits.startsWith('4')) return `+61${digits}`;
  if (digits.length === 11 && digits.startsWith('614')) return `+${digits}`;
  if (digits.length === 10 && digits.startsWith('0')) return `+61${digits.slice(1)}`;
  return phone;
}

export interface GroupConfig {
  areas: string[];
  category: string;
  productType: string;
  colour: string;
  customColour: string;
  control: string;
}

export interface ConfiguratorWebhookData {
  projectScope: string;
  room: string;
  windowCountRange: string;
  productVariation: string;
  groups: GroupConfig[];
  productCategory?: string;
  productType?: string;
  colour?: string;
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
  additionalNotes?: string;
}

export async function submitConfiguratorToWebhook(data: ConfiguratorWebhookData): Promise<boolean> {
  const formattedPhone = formatAustralianPhone(data.mobile);

  const useGrouping = data.productVariation === 'different' && data.groups.length > 1;

  const serviceType = useGrouping
    ? data.groups.map((g, i) => `Group ${i + 1}: ${g.category} - ${g.productType}`).join('; ')
    : `${data.productCategory || data.groups[0]?.category} - ${data.productType || data.groups[0]?.productType}`;

  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    phone: formattedPhone,
    email: data.email,
    source: 'Build Your Project Configurator',
    form_name: 'Window Covering Configurator',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    service_type: serviceType,
    project_location: data.suburb,
    project_scope: data.projectScope,
    room: data.room || '',
    window_count_range: data.windowCountRange,
    product_variation: data.productVariation,
    groups: JSON.stringify(data.groups.map((g) => ({
      areas: g.areas,
      category: g.category,
      product_type: g.productType,
      colour: g.colour,
      custom_colour: g.customColour || '',
      control: g.control,
    }))),
    product_category: data.productCategory || data.groups[0]?.category || '',
    product_type: data.productType || data.groups[0]?.productType || '',
    colour: data.colour || data.groups[0]?.colour || '',
    ...(data.customColour && { custom_colour: data.customColour }),
    ...(data.controlType && { control_type: data.controlType }),
    knows_dimensions: data.knowsDimensions,
    ...(data.widthCm && { width_cm: data.widthCm }),
    ...(data.heightCm && { height_cm: data.heightCm }),
    ...(data.additionalNotes && { additional_notes: data.additionalNotes }),
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
