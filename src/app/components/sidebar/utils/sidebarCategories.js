import {
  ClipboardDocumentListIcon,
  ClipboardIcon,
  ClockIcon,
  DocumentArrowUpIcon,
  DocumentChartBarIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
  InboxStackIcon,
  MapPinIcon,
  PhoneIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  SpeakerWaveIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const renderIcon = (IconComponent) => {
  return <IconComponent className="w-4 h-4 text-gray-500" />;
};

const categories = [
  { name: "Home", icon: renderIcon(HomeIcon) },
  { name: "Recent", icon: renderIcon(ClockIcon) },
  { name: "Pinned", icon: renderIcon(MapPinIcon) },
  {
    title: "My work",
    details: [
      {
        name: "Sales Accelerator",
        icon: renderIcon(RocketLaunchIcon),
      },
      {
        name: "Dasboards",
        icon: renderIcon(PresentationChartLineIcon),
      },
      {
        name: "Activities",
        icon: renderIcon(ClipboardIcon),
      },
    ],
  },
  {
    title: "Customers",
    details: [
      {
        name: "Accounts",
        icon: renderIcon(FolderIcon),
      },
      {
        name: "Sales",
        icon: renderIcon(PhoneIcon),
      },
    ],
  },
  {
    title: "Sales",
    details: [
      {
        name: "Leads",
        icon: renderIcon(DocumentArrowUpIcon),
      },
      {
        name: "Opportunities",
        icon: renderIcon(ClipboardIcon),
      },
      {
        name: "Competitors",
        icon: renderIcon(UserIcon),
      },
    ],
  },
  {
    title: "Collateral",
    details: [
      {
        name: "Quotes",
        icon: renderIcon(DocumentMagnifyingGlassIcon),
      },
      {
        name: "Orders",
        icon: renderIcon(DocumentChartBarIcon),
      },
      {
        name: "Invoices",
        icon: renderIcon(DocumentTextIcon),
      },
      {
        name: "Products",
        icon: renderIcon(InboxStackIcon),
      },
      {
        name: "Sales literature",
        icon: renderIcon(ClipboardDocumentListIcon),
      },
    ],
  },
  {
    title: "Marketing",
    details: [
      {
        name: "Marketing lists",
        icon: renderIcon(ClipboardDocumentListIcon),
      },
      {
        name: "Quick campaigns",
        icon: renderIcon(SpeakerWaveIcon),
      },
    ],
  },
];

export default categories;
