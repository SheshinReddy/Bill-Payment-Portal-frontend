import BroadbandPostpaidIcon from "../assets/service-icons/BroadbandPostpaidIcon";
import ElectricityIcon from "../assets/service-icons/ElectricityIcon";
import MobilePostpaidIcon from "../assets/service-icons/MobilePostpaidIcon";
import LandlinePostpaidIcon from "../assets/service-icons/LandlinePostpaidIcon";
import WaterIcon from "../assets/service-icons/WaterIcon";
import BookACylinderIcon from "../assets/service-icons/BookACylinderIcon";
import PipedGasIcon from "../assets/service-icons/PipedGasIcon";
import EducationFeesIcon from "../assets/service-icons/EducationFeesIcon";
import FastagIcon from "../assets/service-icons/FastagIcon";
import CableTvIcon from "../assets/service-icons/CableTvIcon";
import DthIcon from "../assets/service-icons/DthIcon";
import InsuranceIcon from "../assets/service-icons/InsuranceIcon";
import LoanRepaymentIcon from "../assets/service-icons/LoanRepaymentIcon";
import SubscriptionIcon from "../assets/service-icons/SubscriptionIcon";
import HousingSocietyIcon from "../assets/service-icons/HousingSocietyIcon";
import CreditCardIcon from "../assets/service-icons/CreditCardIcon";
import MunicipalServicesIcon from "../assets/service-icons/MunicipalServicesIcon";
import RecurringDepositIcon from "../assets/service-icons/RecurringDepositIcon";
import HospitalIcon from "../assets/service-icons/HospitalIcon";
import NPSIcon from "../assets/service-icons/NPSIcon";
import ClubsAndAssociationsIcon from "../assets/service-icons/ClubsAndAssociationsIcon";
import PayBillsIcon from "../assets/navigation-icons/PayBillsIcon";
import TransactionsIcon from "../assets/navigation-icons/TransactionsIcon";
import ComplaintsIcon from "../assets/navigation-icons/ComplaintsIcon";
import SavedBillsIcon from "../assets/navigation-icons/SavedBillsIcon";

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
    icon: React.FC;
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
                icon: ElectricityIcon,
                billers: []
            },
            { name: "Broadband Postpaid", icon: BroadbandPostpaidIcon },
            { name: "Mobile Postpaid", icon: MobilePostpaidIcon },
            { name: "Landline Postpaid", icon: LandlinePostpaidIcon },
            { name: "Water", icon: WaterIcon },
            { name: "Book a Cylinder", icon: BookACylinderIcon },
            { name: "Piped Gas", icon: PipedGasIcon },
            { name: "Education Fees", icon: EducationFeesIcon }
        ]
    },
    {
        categoryName: "Recharges and Bills",
        items: [
            { name: "FASTag", icon: FastagIcon },
            { name: "Cable TV", icon: CableTvIcon },
            { name: "DTH", icon: DthIcon }
        ]
    },
    {
        categoryName: "Finance and Tax",
        items: [
            { name: "Insurance", icon: InsuranceIcon },
            { name: "Loan Repayment", icon: LoanRepaymentIcon },
            { name: "Recurring Deposit", icon: RecurringDepositIcon },
            { name: "Municipal Services", icon: MunicipalServicesIcon },
            { name: "Credit Card", icon: CreditCardIcon },
            { name: "NPS", icon: NPSIcon }
        ]
    },
    {
        categoryName: "Others",
        items: [
            { name: "Subscription", icon: SubscriptionIcon },
            { name: "Housing Society", icon: HousingSocietyIcon },
            { name: "Clubs & Associations", icon: ClubsAndAssociationsIcon },
            { name: "Hospital", icon: HospitalIcon },
            { name: "Rental", icon: ElectricityIcon },
            { name: "Donation", icon: ElectricityIcon }
        ]
    }
];


type navBarCategoryType = {
    icon: React.FC;
    text: string;
}

export const sideBarCategories: navBarCategoryType[] = [
    {
        icon: PayBillsIcon,
        text: "Pay Bills",
    },
    {
        icon: TransactionsIcon,
        text: "Transactions",
    },
    {
        icon: ComplaintsIcon,
        text: "Complaints",
    },
    {
        icon: SavedBillsIcon,
        text: "Saved Bills",
    },
];

