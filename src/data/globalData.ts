export type billerFormFieldType = {
    name: string;
    placeholder: string;
}

export type billerFormType = {
    fields: billerFormFieldType[];
}

export type billerType = {
    name: string;
    iconSource: string;
    form: billerFormType;
}

export type ServiceItemType = {
    name: string;
    iconSource: string;
    billers?: billerType[];
};

export type ServiceCategoryType = {
    categoryName: string;
    items: ServiceItemType[];
};

export type ServicesType = ServiceCategoryType[];

export const services: ServicesType = [
    {
        categoryName: "Utilities",
        items: [
            {
                name: "Electricity",
                iconSource: "src/assets/service-icons/electricity.svg",
                billers: [
                    
                ]
            },
            { name: "Broadband Postpaid", iconSource: "src/assets/service-icons/broadband-postpaid.svg" },
            { name: "Mobile Postpaid", iconSource: "src/assets/service-icons/mobile-postpaid.svg" },
            { name: "Landline Postpaid", iconSource: "src/assets/service-icons/landline-postpaid.svg" },
            { name: "Water", iconSource: "src/assets/service-icons/water.svg" },
            { name: "Book a Cylinder", iconSource: "src/assets/service-icons/book-a-cylinder.svg" },
            { name: "Piped Gas", iconSource: "src/assets/service-icons/piped-gas.svg" },
            { name: "Education Fees", iconSource: "src/assets/service-icons/education-fees.svg" }
        ]
    },
    {
        categoryName: "Recharges and Bills",
        items: [
            { name: "FASTag", iconSource: "src/assets/service-icons/fastag.svg" },
            { name: "Cable TV", iconSource: "src/assets/service-icons/cable-tv.svg" },
            { name: "DTH", iconSource: "src/assets/service-icons/dth.svg" }
        ]
    },
    {
        categoryName: "Finance and Tax",
        items: [
            { name: "Insurance", iconSource: "src/assets/service-icons/insurance.svg" },
            { name: "Loan Repayment", iconSource: "src/assets/service-icons/loan-repayment.svg" },
            { name: "Recurring Deposit", iconSource: "src/assets/service-icons/recurring-deposit.svg" },
            { name: "Municipal Services", iconSource: "src/assets/service-icons/municipal-services.svg" },
            { name: "Credit Card", iconSource: "src/assets/service-icons/credit-card.svg" },
            { name: "NPS", iconSource: "src/assets/service-icons/nps.svg" }
        ]
    },
    {
        categoryName: "Others",
        items: [
            { name: "Subscription", iconSource: "src/assets/service-icons/subscription.svg" },
            { name: "Housing Society", iconSource: "src/assets/service-icons/housing-society.svg" },
            { name: "Clubs & Associations", iconSource: "src/assets/service-icons/clubs-and-associations.svg" },
            { name: "Hospital", iconSource: "src/assets/service-icons/hospital.svg" },
            { name: "Rental", iconSource: "src/assets/service-icons/rental.svg" },
            { name: "Donation", iconSource: "src/assets/service-icons/donation.svg" }
        ]
    }
];

type navBarCategoryType = {
    icon: string;
    text: string;
}

export const sideBarCategories: navBarCategoryType[] = [
    {
        icon: "src/assets/navigation-icons/pay-bills.svg",
        text: "Pay Bills",
    },
    {
        icon: "src/assets/navigation-icons/transactions.svg",
        text: "Transactions",
    },
    {
        icon: "src/assets/navigation-icons/complaints.svg",
        text: "Complaints",
    },
    {
        icon: "src/assets/navigation-icons/saved-bills.svg",
        text: "Saved Bills",
    },
];

