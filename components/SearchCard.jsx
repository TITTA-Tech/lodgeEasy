import Image from "next/image";
import Link from "next/link";
import demoImg from "../assets/demoImg.svg";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

function SearchCard() {
  return (
    <div className="w-full h-fit py-5 relative border-t-[1px] border-text-gray">
      <button className="absolute top-3 right-3 z-10 rounded-full hover:bg-white text-primary p-2 hover:shadow-md transition-all">
        <FavoriteBorderRoundedIcon />
      </button>
      <Link href="/" passHref={true}>
        <a>
          <div className="flex justify-start items-start flex-wrap">
            <Image src={demoImg} alt="demo image" className="rounded-lg" />
            <div className="p-2 md:w-2/5">
              <h4 className="font-semibold text-lg">A Room Self-Contain</h4>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sed tempora eius laboriosam praesentium id eum, neque rerum
                error non deleniti reprehenderit placeat animi magnam nesciunt
                repellat culpa? Laudantium, tempore!
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
        </a>
      </Link>
    </div>
  );
}

export default SearchCard;
