import Child from "../Child";

export default function Parents() {
  console.log("parents");
  return (
    <>
      <div>parents</div>
      <Child />
    </>
  );
}
