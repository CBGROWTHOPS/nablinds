interface ConsultationWebhookPayload {
  first_name: string;
  phone: string;
  email: string;
  preferred_call_time: string;
  service_type: string;
  motorized_interest: string;
  project_location: string;
  installation_timeline: string;
  property_type: string;
  window_count: string;
  project_priority: string;
  priority_flag?: string;
  source: string;
  form_name: string;
  page_url: string;
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

export async function submitConsultationToWebhook(data: {
  firstName: string;
  phone: string;
  email: string;
  preferredCallTime: string;
  serviceType: string;
  motorizedInterest: string;
  projectLocation: string;
  installationTimeline: string;
  propertyType: string;
  windowCount: string;
  projectPriority: string;
  priorityFlag?: string;
}): Promise<boolean> {
  const formattedPhone = formatPhoneE164(data.phone);

  const payload: ConsultationWebhookPayload = {
    first_name: data.firstName,
    phone: formattedPhone,
    email: data.email || '',
    preferred_call_time: data.preferredCallTime,
    service_type: data.serviceType,
    motorized_interest: data.motorizedInterest,
    project_location: data.projectLocation,
    installation_timeline: data.installationTimeline,
    property_type: data.propertyType,
    window_count: data.windowCount,
    project_priority: data.projectPriority,
    ...(data.priorityFlag && { priority_flag: data.priorityFlag }),
    source: 'Google Ads → Consultation Funnel',
    form_name: 'Consultation Funnel',
    page_url: window.location.href,
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
