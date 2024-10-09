// import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import User from "./components/User";
export default function App(){
    // const handleClick = (e)=>{
    //     console.log('Clicked');
    // }
    // const handleClick2 = (title)=>{
    //     console.log(title);
    // }
    // const jsx = <>
    //     <h2>Hello</h2>
    //     <h2>Hello</h2>
    // </>
    const users = [
        {
            name: 'User 1',
            email: 'user1@mail.com'
        },
        {
            name: 'User 2',
            email: 'user2@mail.com'
        },
        {
            name: 'User 3',
            email: 'user3@mail.com'
        },
        {
            name: 'User 4',
            email: 'user4@mail.com'
        }
    ]

    return (
    <>
        {/* <Header/>
        <main>
            <h1>Trang chủ</h1>
            {jsx}
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2('hello')}>Click me 2</button>
        </main>
        <Footer/> */}
        {/* <User name='Hoang An' email="hoangan.web@gmail.com" onClick={handleClick}>
            <Avatar src={'https://picsum.photos/200'}></Avatar>
        </User> */}
        {/* <User name='Hoang An 1' email="hoangan1.web@gmail.com"/> */}
        {users.map((user ,index) => <User key={index} {...user}/>)}
    </>
    )
}
