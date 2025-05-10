export function openWhatsApp(phoneNumber: string = "+2348101366312") {
  // Format the phone number to remove any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, '');

  // Construct the WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}`;

  // Open the URL in a new tab or the same window
  window.open(whatsappUrl, '_blank');
}

export const handleWhatsAppClick = () => {
  openWhatsApp();
};