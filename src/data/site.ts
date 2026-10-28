// Central contact config — update here and it changes everywhere.
// Public numbers are the ones on the current live site. Newer numbers
// (6397202114, +91 93890 13067) are NOT used until the client confirms them.
export const SITE = {
  name: "Trishul Treks",
  phoneDisplay: "+91 63972 05114",
  phoneE164: "+916397205114",
  whatsapp: "916397205114",
  email: "trishultreks@gmail.com",
  base: "Sankri, Uttarakhand, India",
  pickup: "Prince Chowk, Dehradun",
};

export const telLink = `tel:${SITE.phoneE164}`;
export const mailLink = (subject = "Trek enquiry", body = "") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
export const waLink = (text = "Hello Trishul Treks, I'd like to plan a trek.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
