export const color = (Component) => {
  return function MyComp(props) {
    const getColor = () => {
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
    };
    return (
      <div style={{ color: getColor() }}>
        <Component {...props} />
      </div>
    );
  };
};
