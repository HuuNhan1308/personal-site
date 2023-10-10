function InfoDetail({ ...attrs }) {
  return (
    <div className="section-about relative pt-[25px] pb-[50px]" {...attrs}>
      <div className="relative p-[25px] divide-y lg:divide-y-0 lg:grid lg:grid-cols-12 gap-6 bg-[#FEFEFE] shadow-xl">
        {/* Info detail Column */}
        <div className="info-list col-span-5">
          <ul className="divide-y divide-dashed divide-primary-low">
            <li className="py-[14px]">
              <strong className="pr-0 md:pr-[14px] text-[#fefefe] font-normal text-[14px] w-[99px] md:w-[115px] inline-block">
                <span className="py-[2px] px-[5px] bg-primary">Age:</span>
              </strong>
              20 Years
            </li>
            <li className="py-[14px]">
              <strong className="pr-0 md:pr-[14px] text-[#fefefe] font-normal text-[14px] w-[99px] md:w-[115px] inline-block">
                <span className="py-[2px] px-[5px] bg-primary">Current state:</span>
              </strong>
              IT Junior student
            </li>
            <li className="py-[14px]">
              <strong className="pr-0 md:pr-[14px] text-[#fefefe] font-normal text-[14px] w-[99px] md:w-[115px] inline-block">
                <span className="py-[2px] px-[5px] bg-primary">Cityzenship:</span>
              </strong>
              Viet Nam
            </li>
            <li className="py-[14px]">
              <strong className="pr-0 md:pr-[14px] text-[#fefefe] font-normal text-[14px] w-[99px] md:w-[115px] inline-block">
                <span className="py-[2px] px-[5px] bg-primary">Address:</span>
              </strong>
              Ho Chi Minh, dist 8
            </li>
            <li className="py-[14px]">
              <strong className="pr-0 md:pr-[14px] text-[#fefefe] font-normal text-[14px] w-[99px] md:w-[115px] inline-block">
                <span className="py-[2px] px-[5px] bg-primary">Phone:</span>
              </strong>
              ..........
            </li>
            <li className="py-[14px]">
              <strong className="pr-0 md:pr-[14px] text-[#fefefe] font-normal text-[14px] w-[99px] md:w-[115px] inline-block">
                <span className="py-[2px] px-[5px] bg-primary">Email:</span>
              </strong>
              nhanhohuunhan7398@gmail.com
            </li>
          </ul>
        </div>

        {/* Info self-description Column */}
        <div className="info-description col-span-7 text-justify pt-4 mt-4 lg:mt-0 lg:pt-0">
          <p className="mb-[16px]">
            <strong>Hello! I'm Nhan</strong>
          </p>

          <p className="mb-[16px]">
            I'm 20 years old. My hobby is sleep, eat, hang out and sleep. I'm currently a senior IT
            student in HCMUTE university
          </p>

          <p className="mb-[16px]">
            This year, my goal is to get as high as possible mark in all subjects and try to get
            scholarships for this semester.
          </p>

          <p className="mb-[16px]">
            Although I'm a type of introvert person, I feel free to be friend and have more friend.
            However I always appreciate quality than quantity. Anyway, don't be afraid to contact
            me, because nobody know what will happen ^^
          </p>

          <p>
            <strong>
              "Pigs are unable to lift their heads, so they live their entire life staring at the
              ground. There is only one way for a pig to look up at the sky. It's to fall down.
              Falling down is a way for you to see another world, a world you have never seen
              before, both for pigs and people." - The Good Bad Mother
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoDetail;
