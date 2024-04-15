//Content Detail component with detailed information about each course

import { renderCircles } from './helper';
const ContentDetail = ({ title, time, text, progress }) => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '15px',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          flex: '3.5',
          color: '#303330a6',
          fontSize: '18px',
          fontWeight: '550',
        }}
      >
        {title}
      </div>
      <div style={{ flex: '0.8', textAlign: 'start', color: '#303330a6' }}>
        <div>{time}</div>
        <div>To be done by:</div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {renderCircles(progress)}
        </div>
        <div style={{ color: '#303330a6' }}>{text}</div>
      </div>
    </div>
  );
};

export default ContentDetail;
