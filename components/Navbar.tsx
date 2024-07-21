import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";

const Nabvar = () => {
    return (
        <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="hilink-logo.svg" alt="logo" width={84} height={29}/>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                          className="regular-15 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button type="button" title="Login" variant="btn_dark_green" icon="/user.svg"   />
            </div>
            <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
        </nav>
    );
};

export default Nabvar;