import { IconAddressBook, IconHeadset, IconMessage } from "@tabler/icons-react";
import Link from "next/link";

const ContactUsForm = () => {
  return (
    <section className="spy120px fade-wrapper relative" id="scrollPosition">
      <div className="container">
        <div className="flex justify-between gap-6 max-md:flex-col">
          <h3 className="d2 title-animation font-medium sm:max-w-[416px]">
            Let’s Get in Touch
          </h3>
          <p className="l-text fade-top text-black-3 sm:max-w-[332px]">
            Great! We&apos;re excited to hear from you and let&apos;s start
            something special togerter. call us for any inquery.
          </p>
        </div>
        <div className="spt60px grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 md:col-end-6 xl:col-end-4">
            <div className="flex gap-6">
              <div className="w-fit rounded-full bg-primary/5 p-5">
                <IconHeadset stroke={1} className="size-10" />{" "}
              </div>
              <div>
                <h4 className="h4 font-medium">Help & Support</h4>

                <Link
                  href="supports@babuZ.com"
                  className="m-text m-text mt-3 text-black-3"
                >
                  supports@babuZ.com
                </Link>
              </div>
            </div>
            <div className="spt60px spb60px flex gap-6">
              <div className="w-fit rounded-full bg-primary/5 p-5">
                <IconMessage stroke={1} className="size-10" />{" "}
              </div>
              <div>
                <h4 className="h4 font-medium">Sales</h4>
                <Link
                  href="sales@babuZ.com"
                  className="m-text m-text mt-3 text-black-3"
                >
                  sales@babuZ.com
                </Link>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-fit rounded-full bg-primary/5 p-5">
                <IconAddressBook stroke={1} className="size-10" />{" "}
              </div>
              <div>
                <h4 className="h4 font-medium">Media & Press</h4>
                <Link
                  href="media@babuZ.com"
                  className="m-text m-text mt-3 text-black-3"
                >
                  media@babuZ.com
                </Link>
              </div>
            </div>
          </div>
          <form className="col-start-1 col-end-13 max-md:mt-6 md:col-start-6 xl:col-start-7">
            <div className="mb-6 flex items-center gap-6 max-xl:flex-col">
              <input
                type="text"
                placeholder="First Name"
                className="placeholder:m-text w-full bg-white-4 px-5 py-3 placeholder:text-black-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="placeholder:m-text w-full bg-white-4 px-5 py-3 placeholder:text-black-3"
              />
            </div>
            <div className="mb-6 flex items-center gap-6 max-xl:flex-col ">
              <input
                type="email"
                placeholder="Email"
                className="placeholder:m-text w-full bg-white-4 px-5 py-3 placeholder:text-black-3"
              />
              <input
                type="number"
                placeholder="Phone"
                className="placeholder:m-text w-full bg-white-4 px-5 py-3 placeholder:text-black-3"
              />
            </div>
            <textarea
              placeholder="Message"
              className="placeholder:m-text w-full bg-white-4 px-5 py-3 outline-none placeholder:text-black-3"
              rows={2}
            />
            <div className="smt60px">
              <button className="alter-btn btn-anim group/link m-text relative z-10 inline-flex size-[140px] items-center justify-center gap-4 overflow-hidden rounded-full border border-black-3 bg-inherit font-semibold text-black-4 hover:border-accent-3">
                send message
                <span className="pointer-events-none absolute z-[-1] h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-accent-3 duration-700 group-hover/link:w-[calc(100%*2.25)] group-hover/link:pt-[calc(100%*2.25)]"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
