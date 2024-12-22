import { LiaUserSolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoDocumentsOutline, IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineTurnRight } from "react-icons/md";
const actions = [
  {
    instruction: "When",
    action: {
      label: "any vendor",
      icon: <LiaUserSolid />,
    },
    options: [
      {
        label: "any vendor",
        value: "any_vendor",
      },

      {
        label: "on-hand inventory",
        value: "on_hand_inventory",
      },
    ],
  },
  {
    instruction: "Sends an email with changes to",
    action: {
      label: "confirmed purchase orders",
      icon: <HiOutlineDocumentText />,
    },
    options: [
      {
        label: "confirmed purchase orders",
        value: "confirmed_purchase_orders",
      },
      {
        label: "open orders",
        value: "open_orders",
      },
      {
        label: "inventory levels",
        value: "inventory_levels",
      },
    ],
  },
  {
    instruction: "Check if the resulting ",
    action: {
      label: "on-hand inventory",
      icon: <IoReorderThreeOutline />,
    },
    options: [
      {
        label: "on-hand inventory",
        value: "on_hand_inventory",
      },
      {
        label: "sales orders",
        value: "sales_orders",
      },
      {
        label: "shipping statuses",
        value: "shipping_statuses",
      },
    ],
  },
  {
    instruction: "will allow",
    action: {
      label: "all sales orders",
      icon: <IoDocumentsOutline />,
    },
    options: [
      {
        label: "on-hand inventory",
        value: "on_hand_inventory",
      },
      {
        label: "sales orders",
        value: "sales_orders",
      },
      {
        label: "shipping statuses",
        value: "shipping_statuses",
      },
    ],
  },
  {
    instruction: "to ",
    action: {
      label: "ship out without delay",
      icon: <MdOutlineTurnRight />,
    },
    options: [
      {
        label: "on-hand inventory",
        value: "on_hand_inventory",
      },
      {
        label: "sales orders",
        value: "sales_orders",
      },
      {
        label: "shipping statuses",
        value: "shipping_statuses",
      },
    ],
  },
  {
    instruction: "if so, ",
    action: {
      label: "update the purchase order",
      icon: <MdOutlineTurnRight />,
    },
    options: [
      {
        label: "on-hand inventory",
        value: "on_hand_inventory",
      },
      {
        label: "sales orders",
        value: "sales_orders",
      },
      {
        label: "shipping statuses",
        value: "shipping_statuses",
      },
    ],
  },
];
export default actions;
