import { Images } from '~/assets/img';

function ShortInfoBar() {
  return (
    <>
      <div className="-top-[80px] -mb-[80px] relative flex flex-col items-center">
        {/* Image */}
        <div className="Image w-[148px] h-[148px] overflow-hidden relative mt-0 mb-[15px] mx-auto rounded-[100%]">
          <img src={Images.hoho} alt="hoho" />
        </div>

        {/* Title */}
        <div className="Title font-roboto font-thin text-[42px]">Ho Huu Nhan</div>

        {/* Sub title */}
        <div className="Sub-Title">UX/UI Designer & Front-end Developer</div>

        {/* Quick Contact */}
        <div className="Quick-Contact"></div>
      </div>
    </>
  );
}

export default ShortInfoBar;
