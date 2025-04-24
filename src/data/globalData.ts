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
  billerPlaceholder: string;
};

export type billerType = {
  billerName: string;
  billerId?: string;
  billerIcon: React.FC;
  billerForm?: billerFormFieldType[];
  billerPath?: string;
};

export type ServiceItemType = {
  serviceName: string;
  serviceIcon: React.FC;
  serviceBillers?: billerType[];
  servicePath?: string;
};

export type ServiceCategoryType = {
  categoryName: string;
  categoryServices: ServiceItemType[];
};

export type ServicesType = ServiceCategoryType[];

export const allServices: ServicesType = [
  {
    categoryName: "Utilities",
    categoryServices: [
      {
        serviceName: "Electricity",
        serviceIcon: ElectricityIcon,
        serviceBillers: [
          {
            billerName: "Assam Power Distribution Company Ltd",
            billerIcon: ElectricityIcon,
            billerForm: [
                {
                    billerPlaceholder: "13 Digit Service Connection Number",
                }
            ]
          },
          {
            billerName: "Brihanmumbai Electric Supply and Transport (BEST)",
            billerIcon: ElectricityIcon,
            billerForm: [
                {
                    billerPlaceholder: "13 Digit Service Connection Number",
                },
                {
                    billerPlaceholder: "Enter Amount",
                }
            ]
          },
          {
            billerName: "BSES Rajdhani Power Limited",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "BSES Yamuna Power Limited",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Chhattisgarh State Power Distribution Company Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Dakshin Gujarat Vij Company Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Dakshin Haryana Bijli Vitran Nigam",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Goa Electricity Department",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Gujarat Electricity Board",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Hubli Electricity Supply Company Ltd (HESCOM)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "India Power Corporation Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Jodhpur Vidyut Vitran Nigam Limited (JVVNL)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Jaipur Vidyut Vitran Nigam Ltd (JVVNL)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Jammu and Kashmir Power Development Department",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Jharkhand Bijli Vitran Nigam Limited",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Kanpur Electricity Supply Company (KESCO)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Kerala State Electricity Board Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Madhya Pradesh Poorv Kshetra Vidyut Vitaran Co. Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName:
              "Maharashtra State Electricity Distribution Co. Ltd (MSEDCL)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Manipur State Power Distribution Company Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Meghalaya Power Distribution Corporation Limited",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "North Bihar Power Distribution Company Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Paschim Gujarat Vij Company Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Punjab State Power Corporation Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Rajasthan Vidyut Vitran Nigam Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "South Bihar Power Distribution Company Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Southern Power Distribution Company of Telangana Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName:
              "Tamil Nadu Generation and Distribution Corporation Limited (TANGEDCO)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Torrent Power - Ahmedabad",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Torrent Power - Bhiwandi",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Torrent Power - Surat",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Tripura State Electricity Corporation Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Uttar Gujarat Vij Company Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Uttar Haryana Bijli Vitran Nigam",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Uttar Pradesh Power Corporation Ltd (UPPCL)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "West Bengal State Electricity Distribution Co. Ltd",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Western Electricity Supply Company of Odisha (WESCO)",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Tata Power Delhi Distribution Limited",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Tata Power Mumbai",
            billerIcon: ElectricityIcon,
          },
        ],
      },
      {
        serviceName: "Broadband Postpaid",
        serviceIcon: BroadbandPostpaidIcon,
        serviceBillers: [
          { billerName: "Airtel Broadband", billerIcon: ElectricityIcon },
          { billerName: "ACT Fibernet", billerIcon: ElectricityIcon },
          { billerName: "Hathway Broadband", billerIcon: ElectricityIcon },
          { billerName: "BSNL Broadband", billerIcon: ElectricityIcon },
          { billerName: "JioFiber", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Mobile Postpaid",
        serviceIcon: MobilePostpaidIcon,
        serviceBillers: [
          { billerName: "Airtel Postpaid", billerIcon: ElectricityIcon },
          { billerName: "Vodafone Idea Postpaid", billerIcon: ElectricityIcon },
          { billerName: "BSNL Mobile Postpaid", billerIcon: ElectricityIcon },
          { billerName: "Jio Postpaid", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Landline Postpaid",
        serviceIcon: LandlinePostpaidIcon,
        serviceBillers: [
          { billerName: "Airtel Landline", billerIcon: ElectricityIcon },
          { billerName: "BSNL Landline", billerIcon: ElectricityIcon },
          { billerName: "MTNL Mumbai", billerIcon: ElectricityIcon },
          { billerName: "MTNL Delhi", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Water",
        serviceIcon: WaterIcon,
        serviceBillers: [
          { billerName: "Delhi Jal Board", billerIcon: ElectricityIcon },
          {
            billerName: "Bangalore Water Supply and Sewerage Board",
            billerIcon: ElectricityIcon,
          },
          { billerName: "Chennai Metro Water", billerIcon: ElectricityIcon },
          {
            billerName: "Hyderabad Metropolitan Water Supply",
            billerIcon: ElectricityIcon,
          },
        ],
      },
      {
        serviceName: "Book a Cylinder",
        serviceIcon: BookACylinderIcon,
        serviceBillers: [
          { billerName: "HP Gas", billerIcon: ElectricityIcon },
          { billerName: "Bharat Gas", billerIcon: ElectricityIcon },
          { billerName: "Indane Gas", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Piped Gas",
        serviceIcon: PipedGasIcon,
        serviceBillers: [
          { billerName: "Adani Gas", billerIcon: ElectricityIcon },
          { billerName: "Gujarat Gas", billerIcon: ElectricityIcon },
          { billerName: "Mahanagar Gas", billerIcon: ElectricityIcon },
          { billerName: "Indraprastha Gas", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Education Fees",
        serviceIcon: EducationFeesIcon,
        serviceBillers: [
          { billerName: "Anurag University", billerIcon: ElectricityIcon },
          {
            billerName: "SRM Institute of Science and Technology",
            billerIcon: ElectricityIcon,
          },
          { billerName: "VIT University", billerIcon: ElectricityIcon },
          {
            billerName: "Manipal Academy of Higher Education",
            billerIcon: ElectricityIcon,
          },
          { billerName: "Shiv Nadar University", billerIcon: ElectricityIcon },
        ],
      },
    ],
  },
  {
    categoryName: "Recharges and Bills",
    categoryServices: [
      {
        serviceName: "FASTag",
        serviceIcon: FastagIcon,
        serviceBillers: [
          { billerName: "Axis Bank FASTag", billerIcon: ElectricityIcon },
          { billerName: "ICICI Bank FASTag", billerIcon: ElectricityIcon },
          { billerName: "HDFC Bank FASTag", billerIcon: ElectricityIcon },
          { billerName: "IDFC FIRST Bank FASTag", billerIcon: ElectricityIcon },
          { billerName: "SBI FASTag", billerIcon: ElectricityIcon },
          {
            billerName: "Paytm Payments Bank FASTag",
            billerIcon: ElectricityIcon,
          },
        ],
      },
      {
        serviceName: "Cable TV",
        serviceIcon: CableTvIcon,
        serviceBillers: [
          { billerName: "Den Networks", billerIcon: ElectricityIcon },
          { billerName: "GTPL Hathway", billerIcon: ElectricityIcon },
          { billerName: "Siti Cable", billerIcon: ElectricityIcon },
          { billerName: "In Digital", billerIcon: ElectricityIcon },
          { billerName: "Fastway Transmissions", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "DTH",
        serviceIcon: DthIcon,
        serviceBillers: [
          { billerName: "Tata Play", billerIcon: ElectricityIcon },
          { billerName: "Dish TV", billerIcon: ElectricityIcon },
          { billerName: "d2h", billerIcon: ElectricityIcon },
          { billerName: "Airtel Digital TV", billerIcon: ElectricityIcon },
          { billerName: "Sun Direct", billerIcon: ElectricityIcon },
        ],
      },
    ],
  },
  {
    categoryName: "Finance and Tax",
    categoryServices: [
      {
        serviceName: "Insurance",
        serviceIcon: InsuranceIcon,
        serviceBillers: [
          { billerName: "LIC of India", billerIcon: ElectricityIcon },
          { billerName: "HDFC Life Insurance", billerIcon: ElectricityIcon },
          { billerName: "ICICI Prudential Life", billerIcon: ElectricityIcon },
          { billerName: "SBI Life Insurance", billerIcon: ElectricityIcon },
          { billerName: "Bajaj Allianz Life", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Loan Repayment",
        serviceIcon: LoanRepaymentIcon,
        serviceBillers: [
          { billerName: "HDFC Bank Loans", billerIcon: ElectricityIcon },
          { billerName: "ICICI Bank Loans", billerIcon: ElectricityIcon },
          { billerName: "Bajaj Finserv Loans", billerIcon: ElectricityIcon },
          { billerName: "Tata Capital Loans", billerIcon: ElectricityIcon },
          { billerName: "SBI Personal Loan", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Recurring Deposit",
        serviceIcon: RecurringDepositIcon,
        serviceBillers: [
          {
            billerName: "India Post Recurring Deposit",
            billerIcon: ElectricityIcon,
          },
          { billerName: "SBI RD", billerIcon: ElectricityIcon },
          { billerName: "HDFC Bank RD", billerIcon: ElectricityIcon },
          { billerName: "ICICI Bank RD", billerIcon: ElectricityIcon },
          { billerName: "Axis Bank RD", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Municipal Services",
        serviceIcon: MunicipalServicesIcon,
        serviceBillers: [
          {
            billerName: "Greater Hyderabad Municipal Corporation",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Municipal Corporation of Delhi",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Bruhat Bengaluru Mahanagara Palike",
            billerIcon: ElectricityIcon,
          },
          { billerName: "Chennai Corporation", billerIcon: ElectricityIcon },
          {
            billerName: "Pune Municipal Corporation",
            billerIcon: ElectricityIcon,
          },
        ],
      },
      {
        serviceName: "Credit Card",
        serviceIcon: CreditCardIcon,
        serviceBillers: [
          { billerName: "HDFC Bank Credit Card", billerIcon: ElectricityIcon },
          { billerName: "ICICI Bank Credit Card", billerIcon: ElectricityIcon },
          { billerName: "Axis Bank Credit Card", billerIcon: ElectricityIcon },
          { billerName: "SBI Card", billerIcon: ElectricityIcon },
          {
            billerName: "Kotak Mahindra Bank Credit Card",
            billerIcon: ElectricityIcon,
          },
        ],
      },
      {
        serviceName: "NPS",
        serviceIcon: NPSIcon,
        serviceBillers: [
          { billerName: "NSDL NPS", billerIcon: ElectricityIcon },
          { billerName: "Karvy NPS", billerIcon: ElectricityIcon },
          { billerName: "Protean eGov NPS", billerIcon: ElectricityIcon },
          { billerName: "HDFC Pension Fund NPS", billerIcon: ElectricityIcon },
          {
            billerName: "ICICI Prudential Pension Fund NPS",
            billerIcon: ElectricityIcon,
          },
        ],
      },
    ],
  },
  {
    categoryName: "Others",
    categoryServices: [
      {
        serviceName: "Subscription",
        serviceIcon: SubscriptionIcon,
        serviceBillers: [
          { billerName: "Amazon Prime", billerIcon: ElectricityIcon },
          { billerName: "Netflix", billerIcon: ElectricityIcon },
          { billerName: "Disney+ Hotstar", billerIcon: ElectricityIcon },
          { billerName: "Zee5", billerIcon: ElectricityIcon },
          { billerName: "Sony LIV", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Housing Society",
        serviceIcon: HousingSocietyIcon,
        serviceBillers: [
          { billerName: "Prestige Group Housing", billerIcon: ElectricityIcon },
          { billerName: "DLF Residents Welfare", billerIcon: ElectricityIcon },
          {
            billerName: "Godrej Properties Maintenance",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "Sobha Limited Apartments",
            billerIcon: ElectricityIcon,
          },
          { billerName: "Raheja Housing Society", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Clubs & Associations",
        serviceIcon: ClubsAndAssociationsIcon,
        serviceBillers: [
          { billerName: "Rotary Club India", billerIcon: ElectricityIcon },
          { billerName: "Lions Club", billerIcon: ElectricityIcon },
          { billerName: "Gymkhana Club", billerIcon: ElectricityIcon },
          { billerName: "Bengal Club", billerIcon: ElectricityIcon },
          { billerName: "Delhi Golf Club", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Hospital",
        serviceIcon: HospitalIcon,
        serviceBillers: [
          { billerName: "Apollo Hospitals", billerIcon: ElectricityIcon },
          { billerName: "Fortis Healthcare", billerIcon: ElectricityIcon },
          { billerName: "Max Healthcare", billerIcon: ElectricityIcon },
          { billerName: "AIIMS New Delhi", billerIcon: ElectricityIcon },
          { billerName: "Narayana Health", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Rental",
        serviceIcon: ElectricityIcon,
        serviceBillers: [
          { billerName: "NestAway Rentals", billerIcon: ElectricityIcon },
          { billerName: "NoBroker Rent Payments", billerIcon: ElectricityIcon },
          { billerName: "Stanza Living", billerIcon: ElectricityIcon },
          { billerName: "Colive", billerIcon: ElectricityIcon },
          { billerName: "Zolo Stays", billerIcon: ElectricityIcon },
        ],
      },
      {
        serviceName: "Donation",
        serviceIcon: ElectricityIcon,
        serviceBillers: [
          {
            billerName: "CRY - Child Rights and You",
            billerIcon: ElectricityIcon,
          },
          { billerName: "GiveIndia", billerIcon: ElectricityIcon },
          {
            billerName: "Akshaya Patra Foundation",
            billerIcon: ElectricityIcon,
          },
          {
            billerName: "ISKCON Temple Donations",
            billerIcon: ElectricityIcon,
          },
          { billerName: "PM CARES Fund", billerIcon: ElectricityIcon },
        ],
      },
    ],
  },
];

type navBarCategoryType = {
  icon: React.FC;
  text: string;
  path?: string
};

export const sideBarCategories: navBarCategoryType[] = [
  {
    icon: PayBillsIcon,
    text: "Pay Bills",
    path: "/"
  },
  {
    icon: TransactionsIcon,
    text: "Transactions",
    path: "/transactions"
  },
  {
    icon: ComplaintsIcon,
    text: "Complaints",
    path: "/complaints"
  },
  {
    icon: SavedBillsIcon,
    text: "Saved Bills",
    path: "/saved-bills"
  },
];
