import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Images } from './assets/img';
import FixImg from './components/FixImg';
import ShortInfoBar from './components/ShortInfoBar';
import SkillBox from './components/SkillBox';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import InfoDetail from './components/InfoDetail';

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
          {/* Info detail */}
          <InfoDetail />

          {/* Skills */}
          <div className="section-skills py-[50px]">
            <div className="title relative h-[70px] text-[40px] font-thin text-center">Skills</div>

            {/* Skill Boxes */}
            <div className="grid grid-cols-12 gap-6">
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

          {/* My Projects */}
          <div className="section-projects py-[50px]">
            <div className="title relative h-[70px] text-[40px] font-thin text-center">
              My projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
