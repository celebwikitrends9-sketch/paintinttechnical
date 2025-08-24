"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  iconOnly?: boolean
}

// export default function WhatsAppButton({
//   phoneNumber,
//   message = "Hello, I'm interested in your services.",
//   className = "",
//   iconOnly = false,
// }: WhatsAppButtonProps) {
//   const handleClick = () => {
//     const encodedMessage = encodeURIComponent(message)
//     window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`, "_blank")
//   }

//   return (
//     <button
//       onClick={handleClick}
//       className={`${
//         iconOnly
//           ? "bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
//           : "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 flex items-center gap-2"
//       } ${className}`}
//       aria-label="Contact us on WhatsApp"
//     >
//       <MessageCircle className={iconOnly ? "w-6 h-6" : "w-5 h-5"} />
//       {!iconOnly && <span>WhatsApp</span>}
//     </button>
//   )
// }
export default function WhatsAppButton({
  phoneNumber,
  message = "Hello, I'm interested in your services.",
  className = "",
  iconOnly = false,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const href = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        iconOnly
          ? "bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          : "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 flex items-center gap-2"
      } ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className={iconOnly ? "w-6 h-6" : "w-5 h-5"} />
      {!iconOnly && <span>WhatsApp</span>}
    </a>
  );
}
