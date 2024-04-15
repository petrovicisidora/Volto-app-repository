//Content component that contains image and its children

const Content = ({ image, children }) => {
  return (
    <div
      style={{
        width: 'auto',
        backgroundColor: 'white',
        padding: '16px',
        marginBottom: '20px',
      }}
    >
      <img
        src={image}
        alt="Content Img"
        style={{
          width: '55px',
          height: '55px',
          float: 'left',
          marginRight: '15px',
        }}
      />
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Content;
