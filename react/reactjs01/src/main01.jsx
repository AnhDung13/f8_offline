import React from "react";
import ReactDOM from "react-dom/client";

const root = document.querySelector("#root");

//Tạo React Element

// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//     id: "title",
//   },
//   "Học ReactJS không khó"
// );
// const h2 = React.createElement(
//   "h2",
//   {
//     className: "sub-title",
//   },
//   "Học React khó",
//   React.createElement(
//     "a",
//     {
//       href: "https://fullstack.edu.vn",
//       target: "_blank",
//       style: {
//         color: "red",
//       },
//     },
//     "Fullstack-F8"
//   )
// );

// const liEls = [];
// for (let i = 1; i <= 100; i++) {
//   const li = React.createElement(
//     "li",
//     null,
//     `Học ReactJS - ${i < 10 ? "0" + i : i}`
//   );
//   liEls.push(li);
// }
// const ul = React.createElement("ul", null, ...liEls);
// const element = React.createElement(React.Fragment, null, h1, ul, h2);
const title = 'Hoàng An F8'
const subTitle = <h3>Ok?</h3>
const users = ['User 1', 'User 2', "User 3"]
const getProduct = () => <h2>Sản phẩm 1</h2>
const Product = ()=> <h2>Sản phẩm 2</h2>
class User extends React.Component{
    render(){
        return <h2>Ok chưa?</h2>
    }
}
const element = 
<div>
    <h1 className="title" id="title">Học ReactJS</h1>
    <h2>Học React không khó</h2>
    {getProduct()}
    <Product/>
    <User/>
    <h2>{title}</h2>
    {subTitle}
    <ul>
        {users.map((user, index) => <li key ={index}>{user}</li>)}
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores quae adipisci numquam nisi, ipsam error laudantium! Deserunt doloribus asperiores iusto, perspiciatis enim et repellat laboriosam, quae corporis, sunt earum.</p>
</div>;

//JSX (JavaScript XML) --> Javascript Complier (SWC, Babel) --> React Element --> HTML

//Render
ReactDOM.createRoot(root).render(element);

/*
Bài tập:
Tạo cặp thẻ html sau
<ul>
    <li>Học ReactJS - 01</li>
    <li>Học ReactJS - 02</li>
    <li>Học ReactJS - 03</li>
    <li>Học ReactJS - 04</li>
    ...
    <li>Học ReactJS - 100</li>
</ul>
*/
