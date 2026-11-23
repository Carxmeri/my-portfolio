import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
    href: string;
    text: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
    rounded?: boolean;
    download?: boolean;
    variant?: "primary" | "outline";
}

export default function LinkButton({
    href,
    text,
    icon: Icon,
    iconPosition = "right",
    rounded = false,
    download = false,
    variant = "primary"
}: LinkButtonProps) {

    const baseStyle = `relative px-6 py-3 font-medium ${
        rounded ? "rounded-full" : "rounded-md"
    } inline-flex items-center justify-center gap-2 overflow-hidden border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`;

    const variants = {
        primary: "bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600",
        outline: "bg-transparent text-text border-border hover:text-green-500 hover:border-green-500 hover:bg-green-500/10"
    };

    return (
        <Link
            href={href}
            download={download || undefined}
            className={`${baseStyle} ${variants[variant]}`}
        >
            {Icon && iconPosition === "left" && (
                <Icon className="w-5 h-5" />
            )}

            <span>{text}</span>

            {Icon && iconPosition === "right" && (
                <Icon className="w-5 h-5" />
            )}
        </Link>
    );
}