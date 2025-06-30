import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WppButtom() {
    return (
        <p>
            <Link
                target="_blank"
                href="https://wa.me/5491158947428?text=Hola%20Rexantec%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20sobre%3A%20%0AEstas%20son%20las%20fotos%20y/o%20videos%3A"
                className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold rounded-lg">
                <FaWhatsapp className="mr-3" />Chatear con Rexantec
            </Link>
        </p>
    )
};