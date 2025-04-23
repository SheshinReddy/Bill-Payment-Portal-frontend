import BroadbandPostpaidIcon from "../assets/icons/service/BroadbandPostpaidIcon";
import ElectricityIcon from "../assets/icons/service/ElectricityIcon";
import MobilePostpaidIcon from "../assets/icons/service/MobilePostpaidIcon";
import LandlinePostpaidIcon from "../assets/icons/service/LandlinePostpaidIcon";
import WaterIcon from "../assets/icons/service/WaterIcon";
import BookACylinderIcon from "../assets/icons/service/BookACylinderIcon";
import PipedGasIcon from "../assets/icons/service/PipedGasIcon";
import EducationFeesIcon from "../assets/icons/service/EducationFeesIcon";
import FastagIcon from "../assets/icons/service/FastagIcon";
import CableTvIcon from "../assets/icons/service/CableTvIcon";
import DthIcon from "../assets/icons/service/DthIcon";
import InsuranceIcon from "../assets/icons/service/InsuranceIcon";
import LoanRepaymentIcon from "../assets/icons/service/LoanRepaymentIcon";
import SubscriptionIcon from "../assets/icons/service/SubscriptionIcon";
import HousingSocietyIcon from "../assets/icons/service/HousingSocietyIcon";
import CreditCardIcon from "../assets/icons/service/CreditCardIcon";
import MunicipalServicesIcon from "../assets/icons/service/MunicipalServicesIcon";
import RecurringDepositIcon from "../assets/icons/service/RecurringDepositIcon";
import HospitalIcon from "../assets/icons/service/HospitalIcon";
import NPSIcon from "../assets/icons/service/NPSIcon";
import ClubsAndAssociationsIcon from "../assets/icons/service/ClubsAndAssociationsIcon";
import PayBillsIcon from "../assets/icons/navigation/PayBillsIcon";
import TransactionsIcon from "../assets/icons/navigation/TransactionsIcon";
import ComplaintsIcon from "../assets/icons/navigation/ComplaintsIcon";
import SavedBillsIcon from "../assets/icons/navigation/SavedBillsIcon";

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

