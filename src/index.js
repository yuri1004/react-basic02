import React from 'react';
import ReactDOM from 'react-dom/client';

import Test12 from './component/Test12';
// import Header from './component/Header';
// import Main from './component/Main';
// import Footer from './component/Footer';
// import Test01 from './component/Test01';
// import Test02 from './component/Test02';
// import Test03 from './component/Test03';
// import Test04 from './component/Test04';
// import Test05 from './component/Test05';
// import Test06 from './component/Test06';
// import Test07 from './component/Test07';
// import Test08 from './component/Test08';
// import Test09 from './component/Test09';
// import Test10 from './component/Test10';
// import Test11 from './component/Test11';

// // 나머지 컴포넌트
// function Header(){
//   return(
//     <h1>welcome</h1>
//   )
// }
// function Main(){
//   return(
//     <div>main</div>
//   )
// }
// function Footer(){
//   return(
//     <footer>footer</footer>
//   )
// }


// app 컴포넌트
function App(){
  return(
    <div>
      <Test12 />
      {/* <Test01 /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  )
}

// export
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

