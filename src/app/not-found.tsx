import RoundedLink from "@/components/link/RoundedLink";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center text-center">
      <div>
        <h2 className="text-9xl font-semibold md:text-[240px]">404</h2>
        <p className="h2 font-semibold">Sorry! page did not found</p>
        <p className="l-text mx-auto mt-5 max-w-[309px] text-black-3">
          The page you are looking for doesnot exist or has been moved
        </p>
        <RoundedLink
          buttonText="Back To Home"
          link="/"
          className="smt60px mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;
