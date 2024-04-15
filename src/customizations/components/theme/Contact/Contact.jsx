const Contact = ({ title, name, email }) => {
  return (
    <div style={{ width: '100%', paddingLeft: '20px', marginBottom: '30px' }}>
      <h2
        style={{
          fontWeight: 'bold',
          fontSize: '14px',
          color: 'gray',
          margin: '5px 0',
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: '12px', color: 'gray', margin: '5px 0' }}>{name}</p>
      <p style={{ fontSize: '12px', margin: '5px 0' }}>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};

export default Contact;
