export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const generateSEOTitle = (productName: string, composition: string) => {
  return `${productName} | ${composition.split('+')[0].trim()} | SSV LIFECARE`;
};

export const generateSEODescription = (productName: string, composition: string) => {
  return `Explore ${productName} by SSV LIFECARE. Composition: ${composition}. View detailed product information and business enquiry options.`;
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{5})/, '+91-$1-$2-$3');
};