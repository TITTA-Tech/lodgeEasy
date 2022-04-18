import Image from "next/image";
import Link from "next/link";
import demoImg from "../assets/demoImg.svg";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { useState } from "react";

function SearchCard() {
  const [addToWishList, setAddToWishList] = useState(false);
  const handle = () => {
    setAddToWishList(true);
  };
  return (
    <div className="h-fit py-5 relative border-t-[1px] border-text-gray">
      <button
        className="absolute top-7 right-3 z-10 rounded-full bg-white text-primary p-2 shadow-md"
        onClick={handle}
      >
        {addToWishList ? (
          <FavoriteIcon className="text-red-500" />
        ) : (
          <FavoriteBorderRoundedIcon />
        )}
      </button>
      <div className="flex justify-start items-start flex-wrap">
        <div className="h-full w-64 mr-9">
          <Image
            src={demoImg}
            alt="demo image"
            className="rounded-lg mx-auto"
            layout="fixed"
          />
        </div>
        <div className="p-2 md:w-2/5">
          <Link href="/" passHref={true}>
            <a>
              <h4 className="font-semibold text-lg hover:text-primary focus:text-primary">
                A Room Self-Contain
              </h4>
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
          <p className="text-text-gray text-sm mb-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            tempora eius laboriosam praesentium id eum, neque rerum error non
            Laudantium, tempore!
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

export default SearchCard;
