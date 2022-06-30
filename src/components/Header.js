import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                {/* a태그 사용하면 새로고침처럼 페이지가 이동됨 */}
                {/* <li><a href='/'>메인페이지</a></li> */}
                {/* active가 아닌 okay가 붙음 */}
                {/* NavLink사용하면 active가 자동으로 생성 active가 있으면 okay가 */}
                <li><NavLink to='/' className={({isActive})=>isActive? "okay" : ""}>메인페이지</NavLink></li>
                <li><NavLink to='/product/*/*' className={({isActive})=>"green " + (isActive? "okay" : "")}>상품페이지</NavLink></li>
                <li><NavLink to='/detail' className={({isActive})=>isActive? "okay" : ""}>상품 자세히보기</NavLink></li>
                <li><NavLink to='/detail/detail1' className={({isActive})=>isActive? "okay" : ""}>1번 상품 자세히보기</NavLink></li>
                <li><NavLink to='/detail/detail2' className={({isActive})=>isActive? "okay" : ""}>2번 상품 자세히보기</NavLink></li>
                <li><NavLink to='/info' className={({isActive})=>isActive? "okay" : ""}>정보보기</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;