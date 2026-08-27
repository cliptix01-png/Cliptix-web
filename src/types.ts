export interface Partner {
  id: string;
  name: string;
  role?: string;
  icon?: string;
  logoUrl?: string;
  category?: string;
}

export interface Metric {
  label: string;
  value: string;
  sublabel: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  deliverables: string[];
  client: string;
  impact: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface ContactFormData {
  email: string;
  name?: string;
  message?: string;
  serviceType?: string;
  budget?: string;
}
