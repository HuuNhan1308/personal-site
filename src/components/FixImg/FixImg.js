import { Images } from '~/assets/img';

function FixImg() {
  return (
    <div
      className="w-[100%] h-[100%] bg-center bg-no-repeat bg-cover opacity-50"
      style={{ backgroundImage: `url(${Images.TopFixedIMG})` }}
    ></div>
  );
}

export default FixImg;
