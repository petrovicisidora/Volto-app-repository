//Breadcrumb

import { Breadcrumb } from 'semantic-ui-react';

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <div
        style={{
          width: '100%',
          backgroundColor: 'white',
          paddingLeft: '10px',
          lineHeight: '40px',
        }}
      >
        Home Page &gt; e-learning Courses
      </div>
      <div
        style={{
          width: '30%',
          backgroundColor: '#595256f5',
          color: 'white',
          lineHeight: '40px',
          textAlign: 'start',
          paddingLeft: '20px',
        }}
      >
        admin
      </div>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
