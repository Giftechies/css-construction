import Counter from "@/components/shared/scroll-top/Counter";
import SecondCounter from "@/components/shared/scroll-top/SecondCounter";

const HomeOneInfo = () => {
  return (
    <section className="spy120px bg-white-4">
      <div className="container flex flex-wrap items-center justify-center gap-10 max-sm:text-center sm:justify-between">
        <div className="info-card fade-top">
          <div className="text-outline d2 theme-transition-3 font-medium">
            <Counter value={120} /> +
          </div>
          <p className="xl-text  mt-4 text-black-3">Partner with us</p>
        </div>
        <div className="info-card fade-top">
          <div className="text-outline d2 theme-transition-3 font-medium">
            $<Counter value={1.3} />+
          </div>
          <p className="xl-text  mt-4 text-black-3">
            Cumulative trading volume
          </p>
        </div>
        <div className="info-card fade-top">
          <div className="text-outline d2 theme-transition-3 font-medium">
            {/* <Counter value={705.37} /> */}
            <SecondCounter value={745.37} />
            K+
          </div>
          <p className="xl-text  mt-4 text-black-3">Successful Projects</p>
        </div>
        <div className="info-card fade-top">
          <div className="text-outline d2 theme-transition-3 font-medium">
            <Counter value={575} />K
          </div>
          <p className="xl-text  mt-4 text-black-3">Active Banking Accounts</p>
        </div>
      </div>
    </section>
  );
};

export default HomeOneInfo;
