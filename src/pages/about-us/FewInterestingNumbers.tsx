import Lines from "@/components/shared/Lines";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import Counter from "@/components/shared/scroll-top/Counter";

const FewInterestingNumbers = () => {
  return (
    <section className="spy120px fade-wrapper relative overflow-hidden bg-white-1">
      <div className="container">
        <SectionTitle
          text="Few Interesting Numbers"
          className="h2 text-center"
        />
        <SectionText
          text="Numbers that speak about banking service."
          className="fade-top mt-3 text-center"
        />
        <div className="spt60px flex flex-wrap items-center justify-center gap-10 max-sm:text-center sm:justify-between">
          <div className="info-card">
            <div className="d2 theme-transition-3 font-semibold">
              <Counter value={120} />+
            </div>
            <p className="xl-text  mt-4 text-black-3">Partner with us</p>
          </div>
          <div className="info-card">
            <div className="d2 theme-transition-3 font-semibold">
              $<Counter value={1.3} />+
            </div>
            <p className="xl-text  mt-4 text-black-3">
              Cumulative trading volume
            </p>
          </div>
          <div className="info-card">
            <div className="d2 theme-transition-3 font-semibold">
              <Counter value={705} />
              K+
            </div>
            <p className="xl-text  mt-4 text-black-3">Successful Projects</p>
          </div>
          <div className="info-card">
            <div className="d2 theme-transition-3 font-semibold">
              <Counter value={575} />K
            </div>
            <p className="xl-text  mt-4 text-black-3">
              Active Banking Accounts
            </p>
          </div>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default FewInterestingNumbers;
