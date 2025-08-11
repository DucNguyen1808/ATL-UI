export const columns: Array<{
    title: string;
    links: { label: string; href: string }[];
}> = [
        {
            title: "Products - Fish",
            links: [
                { label: "River Anchovies / Keski", href: "#" },
                { label: "Sea Anchovy", href: "#" },
                { label: "Black Tilapia", href: "#" },
                { label: "Red Tilapia", href: "#" },
                { label: "Red Pacu", href: "#" },
                { label: "Snake Headfish", href: "#" },
                { label: "Catfish", href: "#" },
            ],
        },
        {
            title: "Products - Shrimp & Seafood",
            links: [
                { label: "Vannamei Shrimp", href: "#" },
                { label: "Black Tiger Shrimp", href: "#" },
                { label: "Fish Spring Roll", href: "#" },
                { label: "India Mackerel", href: "#" },
                // ...
            ],
        },
        {
            title: "Products - Others",
            links: [
                { label: "Cantaloupe", href: "#" },
                { label: "Tapioca Starch", href: "#" },
                // ...
            ],
        },
        // {
        //     title: "Certifications",
        //     links: [
        //         { label: "HACCP", href: "#" },
        //         { label: "ISO 22000", href: "#" },
        //         { label: "BRC (British Retail Consortium)", href: "#" },
        //         { label: "IFS (International Featured Standards)", href: "#" },
        //         { label: "ASC (Aquaculture Stewardship Council)", href: "#" },
        //         { label: "MSC (Marine Stewardship Council)", href: "#" },
        //         { label: "Halal", href: "#" },
        //         { label: "FDA Approval", href: "#" },
        //     ],
        // },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#" },
                // { label: "Certifications", href: "#" },
                { label: "News", href: "#" },
                { label: "Environment", href: "#" },
                { label: "Plant Area", href: "#" },
                { label: "Gallery", href: "#" },
                { label: "Contact Us", href: "#" },
            ],
        },
    ];

export const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Sales and Refunds", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Site Map", href: "#" },
];

export const footerContent = {
    companyName: "HUNG THINH LONG XUYEN COMPANY LIMITED",
    address: "no. 9, street no. 13,\nbinh khanh 5 hamlet, binh khanh ward,\nlong xuyen city, an giang province, viet nam",
    email: "info@hungthinhlx.com",
    contactTitle: "Contact Us",
    followUsTitle: "Follow us",
}

export const linkHoverClass = "relative transition-colors duration-300 ease-in-out hover:text-[var(--secondary)] before:content-[''] before:absolute before:top-full before:w-full before:h-[3px] before:bg-[var(--secondary)] before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100";


