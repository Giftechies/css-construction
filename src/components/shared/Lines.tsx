const Lines = () => {
  return (
    <div className="over hidden overflow-hidden md:block">
      <div className="lines">
        <div className="line absolute left-[10%] top-0 -z-10 h-full w-px bg-white-3/30"></div>
        <div className="line absolute right-[calc(100%-50%)] top-0 -z-10 h-full w-px bg-white-3/30"></div>
        <div className="line-alt absolute left-[30%] top-0 -z-10 h-full w-px bg-white-3/30"></div>
        <div className="line-alt absolute right-[calc(30%)] top-0 -z-10 h-full w-px bg-white-3/30"></div>
        <div className="line absolute right-[10%] top-0 -z-10 h-full w-px bg-white-3/30"></div>
      </div>
    </div>
  );
};

export default Lines;
