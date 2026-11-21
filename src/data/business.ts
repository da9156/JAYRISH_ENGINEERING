export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  supportingTagline: string;
  altTagline: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  workingHours: {
    days: string;
    timings: string;
    note: string;
  };
  googleBusinessProfileUrl: string;
  googleMapsEmbedUrl: string;
  trainingMode: string;
  durationStandard: string;
  certification: string;
}

export const businessInfo: BusinessInfo = {
  name: "JAYRISH ENGINEERING",
  legalName: "CNC & VMC Operating & Programming Classes by JAYRISH ENGINEERING",
  tagline: "From Engineering Knowledge to Industrial Skills",
  supportingTagline: "Professional CNC & VMC Operating and Programming Training",
  altTagline: "Learn. Practice. Excel.",
  phone: "+91 82374 97354",
  phoneFormatted: "+91 82374 97354",
  whatsappNumber: "918237497354",
  email: "info@jayrishengineering.com",
  address: {
    line1: "06 BLDG, FLAT NO. 64 / 6, Station Rd",
    line2: "SIDE COLONY, Pirojshanagar",
    area: "Vikhroli East",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400083",
    country: "India",
    fullAddress: "06 BLDG, FLAT NO, 64 /6, Station Rd, SIDE COLONY, Pirojshanagar, Vikhroli East, Mumbai, Maharashtra 400083, India."
  },
  workingHours: {
    days: "Monday to Sunday",
    timings: "9:00 AM – 9:30 PM",
    note: "Batch timings available across weekdays and weekends. Subject to holiday variations."
  },
  googleBusinessProfileUrl: "https://www.google.com/search?hl=en-IN&sca_esv=eb953f43518643e3&cs=0&output=search&kgmid=/g/11zf5lqw_y&q=CNC+%26+VMC+Operating+%26+Programming+Classes+by+JAYRISH+ENGINEERING",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0827292211516!2d72.92985!3d19.10072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c3c5c99999%3A0x11zf5lqw_y!2sPirojshanagar%2C%20Vikhroli%20East%2C%20Mumbai%2C%20Maharashtra%20400083!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  trainingMode: "Classroom / Offline",
  durationStandard: "Approximately 3 Months (varies by course)",
  certification: "Course Completion Certificate upon successful completion"
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Hello JAYRISH ENGINEERING, I am interested in your CNC and VMC training programs. Please share the course details, duration, fees, and available batches.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${text}`;
}

export function getCourseWhatsAppUrl(courseTitle: string): string {
  const message = `Hello JAYRISH ENGINEERING, I would like to enquire about the "${courseTitle}" course. Please share syllabus details, fees, and upcoming batch timings.`;
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
