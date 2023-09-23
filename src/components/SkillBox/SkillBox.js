import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillBox({ icon, title, details = [] }) {
  return (
    <div className="skill-professional col-span-6 bg-[#FEFEFE] shadow-md p-[25px]">
      <div className="Skill-title -mt-[56px] flex flex-col items-center">
        <div className="Skill-icon mx-[10px] w-[62px] h-[62px] text-center justify-center inline-flex items-center drop-shadow-xl text-[24px] text-white bg-primary-low focus:outline-none rounded-[100%]">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="Skill-name my-[16px] text-[18px]">{title}</div>
      </div>

      <div className="Skills">
        <ul>
          {details.map((detail, index) => (
            <li key={index} className="py-[8px]">
              <div className="name text-[14px] text-[#363636] mb-[6px]">{detail.title}</div>
              <div className="progress relative h-[8px] w-[100%] mb-[6px] bg-[#0000001a]">
                <div
                  className={`percentage absolute start-0 h-[8px] bg-primary-low`}
                  style={{ width: `${detail.percentage}%` }}
                >
                  <span className="Skill-icon w-[26px] h-[26px] text-center justify-center inline-flex items-center drop-shadow-xl text-[16px] text-white bg-primary-low focus:outline-none rounded-[100%] absolute -right-[2px] -top-[9px]">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillBox;
