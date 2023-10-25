import Link from "next/link";
import { SiKibana } from "react-icons/si";


const KibanaDropdown = ({
    isSideBarOpen,
}) => {

    return (
        <Link
            className="flex items-center p-2 text-sm group hover:cursor-pointer gap-x-4"
            href={process.env.KIBANA_URL}
            target="_blank"
            rel="noopener noreferrer"
        >
            <SiKibana className="w-6 h-6 text-white group-hover:text-cyan-300" />
            {isSideBarOpen ? <span className="pl-1">Kibana</span> : null}
        </Link>
    );
};

export default KibanaDropdown;