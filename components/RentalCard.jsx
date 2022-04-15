import Link from "next/link";
import Image from "next/image";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import baseImg from "../assets/trnava-university-CtKO4NGiEhE-unsplash.jpg";

function RentalCard() {
  return (
    <div className="relative bg-secondary rounded-lg max-h-72 before:w-full before:h-full before:bg-black/40 before:absolute before:z-10 before:top-0 before:left-0 before:rounded-lg">
      <div className="rounded-lg h-full w-full overflow-hidden">
        <Image src={baseImg} alt="house" />
      </div>
      <h3 className="absolute top-0 left-0 z-20 text-white text-lg md:text-xl p-5 w-4/5 font-semibold">
        3 bedroom flat in Ekosodin
      </h3>
      <Link href="/" passHref={true}>
        <a className="absolute bottom-2 z-30 right-2 bg-white rounded-full p-2 text-primary hover:animate-bounce">
          <ChevronRightRoundedIcon />
        </a>
      </Link>
    </div>
  );
}

export default RentalCard;
