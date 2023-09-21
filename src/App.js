import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Images } from './assets/img';
import FixImg from './components/FixImg';
import ShortInfoBar from './components/ShortInfoBar';
import ContentBox from './components/ContentBox/ContentBox';
import SkillBox from './components/SkillBox';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      {/* Top Fixed IMG  */}
      <div className="fixed top-0 left-0 w-[100%] h-[320px] bg-primary">
        <FixImg />
      </div>

      {/* App Container */}
      <div className="App-container relative bg-[#eeeeee] h-[500vh] font-roboto">
        {/* Short Info */}
        <div className="section-start relative mt-[320px]">
          <ShortInfoBar
            image={Images.hoho}
            fullname={'Ho Huu Nhan'}
            subtitle={'UX/UI Designer & Front-end Developer'}
            icons={[faFacebookF, faGithub, faInstagram]}
          />
        </div>

        {/* Main Info */}
        <div className="wrapper relative mx-auto max-w-[1100px]">
          <div className="section-about relative pt-[25px] pb-[50px]">
            <ContentBox className="relative p-[25px] grid grid-cols-12 gap-6 bg-[#FEFEFE] shadow-xl">
              {/* Info detail Column */}
              <div className="info-list col-span-5">
                <ul className="divide-y divide-dashed divide-primary-low">
                  <li className="py-[14px]">
                    <strong className="pr-[20px] text-[#fefefe] font-normal text-[14px] w-[115px] inline-block">
                      <span className="py-[2px] px-[5px] bg-primary">Age:</span>
                    </strong>
                    20 Years
                  </li>
                  <li className="py-[14px]">
                    <strong className="pr-[20px] text-[#fefefe] font-normal text-[14px] w-[115px] inline-block">
                      <span className="py-[2px] px-[5px] bg-primary">Current state:</span>
                    </strong>
                    IT Junior student
                  </li>
                  <li className="py-[14px]">
                    <strong className="pr-[20px] text-[#fefefe] font-normal text-[14px] w-[115px] inline-block">
                      <span className="py-[2px] px-[5px] bg-primary">Cityzenship:</span>
                    </strong>
                    Viet Nam
                  </li>
                  <li className="py-[14px]">
                    <strong className="pr-[20px] text-[#fefefe] font-normal text-[14px] w-[115px] inline-block">
                      <span className="py-[2px] px-[5px] bg-primary">Address:</span>
                    </strong>
                    Ho Chi Minh, dist 8
                  </li>
                  <li className="py-[14px]">
                    <strong className="pr-[20px] text-[#fefefe] font-normal text-[14px] w-[115px] inline-block">
                      <span className="py-[2px] px-[5px] bg-primary">Phone:</span>
                    </strong>
                    +84 928 312 747
                  </li>
                  <li className="py-[14px]">
                    <strong className="pr-[20px] text-[#fefefe] font-normal text-[14px] w-[115px] inline-block">
                      <span className="py-[2px] px-[5px] bg-primary">Email:</span>
                    </strong>
                    nhanhohuunhan7398@gmail.com
                  </li>
                </ul>
              </div>

              {/* Info self-description Column */}
              <div className="info-description col-span-7 text-justify">
                <p className="mb-[16px]">
                  <strong>Hello! I'm Nhan</strong>
                </p>

                <p className="mb-[16px]">
                  I'm 20 years old. My hobby is sleep, eat, hang out and sleep. I'm currently a
                  senior IT student in HCMUTE university
                </p>

                <p className="mb-[16px]">
                  This year, my goal is to get as high as possible mark in all subjects and try to
                  get scholarships for this semester.
                </p>

                <p className="mb-[16px]">
                  Although I'm a type of introvert person, I feel free to be friend and have more
                  friend. However I always appreciate quality than quantity. Anyway, don't be afraid
                  to contact me, because nobody know what will happen ^^
                </p>

                <p>
                  <strong>
                    "Pigs are unable to lift their heads, so they live their entire life staring at
                    the ground. There is only one way for a pig to look up at the sky. It's to fall
                    down. Falling down is a way for you to see another world, a world you have never
                    seen before, both for pigs and people." - The Good Bad Mother
                  </strong>
                </p>
              </div>
            </ContentBox>
          </div>

          <div className="section-skills py-[50px]">
            <div className="title relative h-[70px] text-[40px] font-thin text-center">Skills</div>
            <div className="grid grid-cols-12 gap-6">
              <div className="skill-professional col-span-6 bg-[#FEFEFE] shadow-md p-[25px]">
                <SkillBox
                  icon={faGear}
                  title="Professional"
                  details={[
                    { title: 'UI/UX Design', percentage: 70 },
                    { title: 'Web Application', percentage: 80 },
                    { title: 'Mobile Application', percentage: 60 },
                    { title: 'Writing', percentage: 65 },
                    { title: 'Photography', percentage: 68 },
                  ]}
                />
              </div>
              <div className="skill-professional col-span-6 bg-[#FEFEFE] shadow-md p-[25px]">
                <SkillBox
                  icon={faUser}
                  title="Personal"
                  details={[
                    { title: 'Communication', percentage: 70 },
                    { title: 'Team work', percentage: 80 },
                    { title: 'Leadership', percentage: 60 },
                    { title: 'Creativity', percentage: 65 },
                    { title: 'Language', percentage: 68 },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
