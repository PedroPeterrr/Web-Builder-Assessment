import { Icon1, Icon2, Icon3, Icon4, A1, A2, A3, C1, C2, C3, C4, C5, C6, C7 } from "../assets/assets";

interface IconItem  { logo: string; alt: string };

interface Service extends IconItem { desc: string, title: string};

export const CompanyIcons: IconItem[] = [
    { logo: Icon1, alt: "The Ridge Realty Group" },
    { logo: Icon2, alt: "Equal Housing Oppurtunity" },
    { logo: Icon3, alt: "REALTOR" },
    { logo: Icon4, alt: "Pahrump Valley" },
];

export const Photo: IconItem[] = [
    { logo: C1, alt:"Photo 1"},
    { logo: C2, alt:"Photo 2"},
    { logo: C3, alt:"Photo 3"},
    { logo: C4, alt:"Photo 4"},
    { logo: C5, alt:"Photo 5"},
    { logo: C6, alt:"Photo 6"},
    { logo: C7, alt:"Photo 7"}
];

export const serviceData: Service[] =  [
    {
        logo: A1,
        alt: 'Real Estate Done Right Picture',
        title: 'Real Estate Done Right',
        desc: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    },
    {
        logo: A2,
        alt: 'Commercial & Residential Picture',
        title: 'Commercial & Residential',
        desc: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    },
    {
        logo: A3,
        alt: 'Rely on Expertise Picture',
        title: 'Rely on Expertise',
        desc: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.',
    },
];
