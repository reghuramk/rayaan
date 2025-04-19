import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-row">
      {/* {hero-content} */}
      <div className="hero-content basis-2/5 flex flex-col items-center justify-center bg-white-500">
        {" "}
        <h1 className="text-2xl font-playwrite py-6">Simply Savory</h1>
        <h1 className="text-5xl tracking-wide font-opensans font">DELICIOUS LONDON</h1>
        <h1 className="text-5xl tracking-wide font-opensans">CUISINE</h1>
        <h1 className="text-base py-8 font-opensans">Savor the Spice of Life</h1>
        <Button className="font-opensans">Book A Table</Button>
      </div>
      {/* {hero-image} */}
      <div className="hero-image basis-3/5">
        <img
          className="w-full h-full object-cover"
          src="/hero-image.avif"
          alt="hero-image"
        />
      </div>{" "}
    </div>
  );
};

export default HeroSection;
