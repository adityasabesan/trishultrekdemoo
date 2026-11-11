// Central contact config — update here and it changes everywhere.
// Client-confirmed: +91 93890 13067 is a second CALL number; calls and
// WhatsApp both work on +91 63972 05114. 6397202114 remains unconfirmed.
export const SITE = {
  name: "Trishul Treks",
  phoneDisplay: "+91 63972 05114",
  phoneE164: "+916397205114",
  phone2Display: "+91 93890 13067",
  phone2E164: "+919389013067",
  whatsapp: "916397205114",
  email: "trishultreks@gmail.com",
  base: "Sankri, Uttarakhand, India",
  pickup: "Prince Chowk, Dehradun",
};

// Company figures explicitly confirmed by the client.
export const HOME_STATS = [
  { value: "5K+", label: "Trekkers" },
  { value: "100+", label: "Trips Completed" },
] as const;

export const telLink = `tel:${SITE.phoneE164}`;
export const telLink2 = `tel:${SITE.phone2E164}`;
export const mailLink = (subject = "Trek enquiry", body = "") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
export const waLink = (text = "Hello Trishul Treks, I'd like to plan a trek.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
