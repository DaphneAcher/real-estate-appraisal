const cities = [
  "West Palm Beach",
  "Palm Beach",
  "Palm Beach Gardens",
  "Lake Worth",
  "Lantana",
  "Hypoluxo",
  "Boynton Beach",
  "Delray Beach",
  "Boca Raton",
  "Deerfield Beach",
  "Hillsboro Beach",
  "Pompano Beach",
  "Lighthouse Point",
  "Coconut Creek",
  "Coral Springs",
  "Margate",
  "Tamarac",
  "North Lauderdale",
  "Oakland Park",
  "Wilton Manors",
  "Fort Lauderdale",
  "Dania Beach",
  "Hollywood",
  "Hallandale Beach",
  "Pembroke Pines",
  "Miramar",
  "Davie",
  "Cooper City",
  "Plantation",
  "Sunrise",
  "Lauderhill",
  "Lauderdale Lakes",
  "North Miami",
  "North Miami Beach",
  "Miami Shores",
  "Miami"
];

export default cities;

export const citySlugs = cities.map(city =>
  city.toLowerCase().replace(/\s+/g, "-")
);
