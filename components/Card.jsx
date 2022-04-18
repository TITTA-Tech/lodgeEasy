import Image from "next/image";
import Link from "next/link";
import demoImg from "../assets/demoImg.svg";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { useState } from "react";

function Card() {
  const [addToWishList, setAddToWishList] = useState(false);
  const handle = () => {
    setAddToWishList(!addToWishList);
  };
  return (
    <div className="bg-white rounded-lg w-64 min-h-72 mx-2 relative">
      <button
        className="absolute top-3 right-3 z-10 rounded-full bg-white text-primary p-2 shadow-md"
        onClick={handle}
      >
        {addToWishList ? (
          <FavoriteIcon className="text-red-500" />
        ) : (
          <FavoriteBorderRoundedIcon />
        )}
      </button>
      <div>
        <Image
          src={demoImg}
          alt="demo image"
          className="rounded-t-lg"
          layout="responsive"
        />
        <div className="p-2">
          <Link href="/" passHref={true}>
            <a>
              <h4 className="font-semibold text-lg hover:text-primary focus:text-primary">
                A Room Self-Contain
              </h4>{" "}
            </a>
          </Link>
          <span className="flex justify-between items-center mb-1">
            <span className="flex justify-between items-center">
              <h5 className="text-sm mr-1 font-semibold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "NGN",
                }).format(5000)}
              </h5>
              <h6 className="text-xs text-text-gray line-through">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "NGN",
                }).format(4000)}
              </h6>
            </span>
            <h5 className="text-off-primary bg-off-secondary rounded-lg p-1 font-semibold text-xs">
              10% off
            </h5>
          </span>
          <p className="text-text-gray text-sm mb-1">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <span className="flex justify-between items-center font-bold">
            <p className="flex justify-start items-center text-xs">
              <StarRateRoundedIcon className="text-amber-400" />
              5.0&nbsp;<span>(34)</span>&nbsp; Category
            </p>
            <h5 className="text-new-primary bg-new-secondary rounded-lg p-1 font-semibold text-xs">
              New
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
