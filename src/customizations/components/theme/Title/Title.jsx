//Title component

const Title = ({ title }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '20px',
        backgroundColor: '#c4c4c4a3',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '15px',
      }}
    >
      <span
        style={{ fontWeight: 'bolder', paddingLeft: '10px', fontSize: '15px' }}
      >
        {title}
      </span>
    </div>
  );
};

export default Title;
