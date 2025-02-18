'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  return (
    <body>
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <span className="menu-icon" onclick="toggleMenu()">☰</span> 로고
                </div>
                <div className="search">
                    <input type="text" placeholder="검색..."/>
                    <span className="search-icon">🔍</span>
                </div>
                <div className="header-icons">
                    <span>🔔</span>
                    <span>📩</span>
                    <span>⚙️</span>
                    <button className="logout">로그아웃</button>
                </div>
            </div>
        </div>
        <nav className="menu-bar">
            <a href="#">전체보기</a>
            <a href="#">인기글</a>
            <a href="#">즐겨찾기</a>
            <a href="#">유머</a>
            <a href="#">핫딜</a>
            <a href="#">정치</a>
            <a href="#">여행</a>
            <a href="#">게임</a>
            <a href="#">스포츠</a>
            <a href="#">일반</a>
            <a href="#">지역</a>
        </nav>
        <div className="side-menu">
            <div className="menu-title">로고</div>
            <ul>
                <li onclick="toggleSubmenu(event)">1Depth 메뉴1 <span className="submenu-icon">▶</span>
                    <ul className="submenu">
                        <li>2Depth 메뉴1</li>
                        <li className="has-submenu">2Depth 메뉴2 <span className="submenu-icon">▶</span>
                            <ul className="submenu">
                                <li>3Depth 메뉴1</li>
                                <li>3Depth 메뉴2</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li onclick="toggleSubmenu(event)">1Depth 메뉴2 <span className="submenu-icon">▶</span></li>
            </ul>
        </div>
    </body>
  );
}