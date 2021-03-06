import { FC } from 'react';
import Experience from '@src/components/experience';
import SectionTitle from '@src/components/section-title';
import { internship, work } from '@src/info';

const WorkExperience: FC = () => (
  <div className="work-experience">
    <SectionTitle title="工作经历" />
    <Experience info={work} />
    <Experience info={internship} />
  </div>
);

export default WorkExperience;
