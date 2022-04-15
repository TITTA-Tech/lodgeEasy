import blob from "../assets/blob.svg";
import lady from "../assets/lady-with-houses.svg";
import humaan from "../assets/humaan.svg";
import doodle from "../assets/doodle.svg";
import rentalGuy from "../assets/rentalGuy.svg";
import Image from "next/image";
import Link from "next/link"
import { SearchForm, RentalCard, Card } from "../components";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const NextBtn = ({ onClick }) => {
  return <button onClick={onClick} className="shadow-md absolute top-1/2 -right-3 z-10 -translate-y-1/2 bg-primary/40 rounded-full p-2 text-primary">
    <ChevronRightRoundedIcon />
  </button>
}

const PrevBtn = ({ onClick }) => {
  return <button onClick={onClick} className="shadow-md absolute top-1/2 -left-3 z-10 -translate-y-1/2 bg-primary/40 rounded-full p-2 text-primary">
    <ChevronLeftRoundedIcon />
  </button>
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        }
      }
    ]
  };
  return (
    <>
      <div className="w-screen min-h-auto md:min-h-[90vh] relative lg:flex justify-between items-start md:px-10 lg:pt-10">
        <div className="absolute top-0 z-0 right-0 md:w-auto">
          <Image src={blob} alt="blob rectangle" />
        </div>
        <div className="p-5 relative z-10">
          <h1 className="text-[2.5rem] lg:text-6xl font-semibold mb-4 lg:mb-6 leading-tight">Few <span className="text-primary">clicks</span> away from your new <span className="text-primary">home</span></h1>
          <p className="text-text-gray mb-5 lg:w-4/6">We&apos;re creating a seamless online experience from shopping on the largest rental network, to applying, to paying rent.</p>
          <div className="lg:w-4/6">
            <SearchForm />
          </div>
        </div>
        <div className="relative z-10">
          <Image src={lady} alt="lady with searching fo houses" />
        </div>
        <div className="hidden xl:block absolute bottom-0 left-[45%] -translate-x-[45%] z-10">
          <Image src={humaan} alt="lady with searching fo houses" height={350} className="object-center object-contain" />
        </div>
      </div>
      <div className="mt-16 px-5 md:px-10">
        <h2 className="text-2xl md:text-4xl text-center font-semibold mb-4 leading-tight">Explore <span className="text-primary">rentals</span> on Lodge <span className="text-primary">Easy</span></h2>
        <p className="text-text-gray text-center mb-4 lg:mx-auto lg:w-1/2">Take a deep dive and browse homes or apartments for rent and local insights to find what is right for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full min-h-80 py-5 gap-8">
          {Array(4).fill().map((_, i) => {
            return <RentalCard key={i} />
          })}
        </div>
      </div>
      <div className="mt-16 px-5 md:px-10">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4 leading-tight">You have no saved homes</h2>
        <p className="text-text-gray text-center mb-6 lg:mx-auto lg:w-1/2">You have no saved homes. Start saving to add to wishlists or create one now.</p>
        <div className="w-fit mx-auto mb-6">
          <Image src={doodle} alt="create a wishlist" />
        </div>
        <Link href="/" passHref={true}>
          <a className="rounded-lg block w-fit text-center font-semibold bg-secondary px-5 py-2 mx-auto"><AddRoundedIcon /> Create wishlist</a>
        </Link>
      </div>
      <div className="mt-16 p-5 md:px-10 w-screen min-h-72 relative">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-6 leading-tight">Newly listed rentals</h2>
        <Slider {...settings}>
          {Array(10).fill().map((_, i) => {
            return <Card key={i} />
          })}
        </Slider>
      </div>
      <div className="my-16 px-5 md:px-10">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4 leading-tight">See how Lodge Easy can help</h2>
        <p className="text-text-gray text-center mb-6 lg:mx-auto lg:w-1/2">Rent a home with 25+ filters and custom keyword search, Lodge Easy can help you easily find a home or aprartment for rent that you’ll love.</p>
        <div className="w-fit mx-auto mb-6">
          <Image src={rentalGuy} alt="create a wishlist" />
        </div>
        <Link href="/" passHref={true}>
          <a className="rounded-lg block w-fit text-center font-semibold bg-secondary px-5 py-2 mx-auto">Find a rental</a>
        </Link>
      </div>
    </>
  )
}
