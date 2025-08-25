
import Link from "next/link";
import React from "react";

const navigation = [
    { name: "About Me", href: " " },
    { name: "Skills", href: " " },
    { name: "Projects", href: " " },
    { name: "Contact Me", href: " " },
]

export default function Home() {
    return (
        <div>
            <nav>
                <ul>
                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className=""
                    >
                        {item.name}
                    </Link>
                ))}
                </ul>
            </nav>
        </div>
    )
}