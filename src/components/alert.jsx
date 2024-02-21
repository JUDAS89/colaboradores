const Alert = ({ message, variant }) => {
  if (!message) return null;

  return (
    <div className={`alert alert-${variant}`}>
      {message}
    </div>
  );
};

export default Alert;
