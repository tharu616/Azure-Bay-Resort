export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
};

export const menu: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Crab Cake", desc: "Mirissa crab, curry leaf aioli, lime.", price: 2800 },
    { name: "Coconut Prawn Skewers", desc: "Tiger prawns, sambol glaze.", price: 3200, tag: "Popular" },
    { name: "Tuna Tartare", desc: "Yellowfin, avocado, sesame, soy.", price: 3000 },
    { name: "Pumpkin Soup", desc: "Roasted pumpkin, coconut cream, toasted seeds.", price: 1800, tag: "Vegan" },
  ],
  Mains: [
    { name: "Grilled Lobster", desc: "Garlic butter, lemon, herb rice.", price: 9800, tag: "Signature" },
    { name: "Catch of the Day", desc: "Pan-seared, tempered spices, mango salsa.", price: 5200 },
    { name: "Black Pork Curry", desc: "Slow-cooked, roasted curry powder, yellow rice.", price: 4600 },
    { name: "Jackfruit Kottu", desc: "Vegetable kottu with fresh herbs.", price: 3400, tag: "Vegan" },
  ],
  Desserts: [
    { name: "Watalappan", desc: "Coconut custard, jaggery, cardamom.", price: 1600, tag: "Local" },
    { name: "Chocolate Fondant", desc: "Warm centre, vanilla ice cream.", price: 2100 },
    { name: "Mango Panna Cotta", desc: "Fresh mango coulis, mint.", price: 1900 },
  ],
};

export const specials = [
  { name: "Chef's Tasting Menu", desc: "Six courses of island flavours with wine pairing.", price: 14500, image: "/images/dining-1.jpg" },
  { name: "Sunset Seafood Platter", desc: "Lobster, prawns, calamari and crab for two.", price: 18900, image: "/images/dining-2.jpg" },
];