//Sidebar with image and course group name

const Sidebar = ({ image, title }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '80px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        paddingRight: '20px',
      }}
    >
      <img
        src={image}
        alt="Sidebar Icon"
        style={{ marginRight: '20px', height: '60px', width: '60px' }}
      />
      <div style={{ fontWeight: '600', fontSize: '16px' }}>{title}</div>
    </div>
  );
};

export default Sidebar;
