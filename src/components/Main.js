import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            메인페이지 입니다.
            <ul>
                <li><Link to="/product/1/shoes?search=productName&q=demo#test">1번상품</Link></li>
                <li><Link to="/product/2/notebook?search=productName&q=demo#test2">2번상품</Link></li>
            </ul>
        </div>
    );
};

export default Main;