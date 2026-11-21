export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  supportingTagline: string;
  altTagline: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  // email: string;
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
  googlePlaceUrl: string;
  googleMapsEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
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
  // email: "info@jayrishengineering.com",
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
  googleBusinessProfileUrl: "https://www.google.com/maps/place/CNC+%26+VMC+Operating+%26+Programming+Classes+by+JAYRISH+ENGINEERING/@19.1049046,72.9321797,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c72203353a3d:0x60ecbda6d9298097!8m2!3d19.1049046!4d72.9321797!16s%2Fg%2F11zf5lqw_y?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  googlePlaceUrl: "https://www.google.com/maps/place/CNC+%26+VMC+Operating+%26+Programming+Classes+by+JAYRISH+ENGINEERING/@19.1049046,72.9321797,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c72203353a3d:0x60ecbda6d9298097!8m2!3d19.1049046!4d72.9321797!16s%2Fg%2F11zf5lqw_y?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.016335123985!2d72.9296048!3d19.1049046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c72203353a3d%3A0x60ecbda6d9298097!2sCNC%20%26%20VMC%20Operating%20%26%20Programming%20Classes%20by%20JAYRISH%20ENGINEERING!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  coordinates: {
    lat: 19.1049046,
    lng: 72.9321797
  },
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
