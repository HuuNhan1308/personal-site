import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ShortInfoBar({ image, fullname, subtitle, icons = [], className, ...attrs }) {
  return (
    <div
      className={`-top-[80px] -mb-[80px] relative flex flex-col items-center ${className}`}
      {...attrs}
    >
      {/* Image */}
      <div className="Image w-[148px] h-[148px] overflow-hidden relative mt-0 mb-[15px] mx-auto rounded-[100%]">
        <img src={image} alt="hoho" />
      </div>

      {/* Title */}
      <div className="Title font-roboto font-thin text-[42px]">{fullname}</div>

      {/* Sub title */}
      <div className="Sub-Title">{subtitle}</div>

      {/* Quick Contact */}
      <div className="Quick-Contact my-[25px] flex">
        {icons.map((icon, index) => (
          <button
            key={index}
            type="button"
            class="mx-[10px] drop-shadow-xl text-white bg-primary-low hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[100%] text-sm w-[40px] h-[40px] text-center justify-center inline-flex items-center"
          >
            <a className="text-[18px]" href="https://www.facebook.com/hh.nhan1308/">
              <FontAwesomeIcon icon={icon} />
            </a>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ShortInfoBar;
