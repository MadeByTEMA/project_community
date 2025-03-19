'use client';

import { useState, useEffect } from 'react';

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // 🔹 DB에서 메뉴 데이터 가져오기 (POST 방식으로 변경)
    async function fetchMenu() {
      try {
        const response = await fetch('/api/menu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}), // 기본적으로 모든 메뉴 가져오기
        });
        
        const data = await response.json();
        setMenuData(buildMenuTree(data));
      } catch (error) {
        console.error('메뉴 데이터를 불러오는 중 오류 발생:', error);
      }
    }
    fetchMenu();
  }, []);

  // 🔹 트리 구조 변환 (upper_menu_id 기반으로 계층 구조 생성)
  function buildMenuTree(menuList) {
    console.log(menuList);
    const menuMap = {};
    menuList.forEach(menu => menuMap[menu.menu_id] = { ...menu, children: [] });
    const rootMenus = [];
    menuList.forEach(menu => {
      if (menu.upper_menu_id) {
        menuMap[menu.upper_menu_id].children.push(menuMap[menu.menu_id]);
      } else {
        rootMenus.push(menuMap[menu.menu_id]);
      }
    });
    return rootMenus;
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const toggleSubmenu = (menuId) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <div>
      {/* 🔹 배경 오버레이 */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* 🔹 헤더 */}
      <div className="header-container">
        <div className="header">
          <div className="logo">
            <span className="menu-icon" onClick={toggleMenu}>☰</span> 로고
          </div>
          <div className="search">
            <input type="text" placeholder="검색..." />
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

      {/* 🔹 메뉴바 */}
      <nav className="menu-bar">
        {menuData.map(menu => (
          <a key={menu.menu_id} href="#">{menu.menu_name}</a>
        ))}
      </nav>

      {/* 🔹 사이드 메뉴 */}
      <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-title">
          로고
          <span className="close-menu" onClick={toggleMenu}>✖</span>
        </div>
        <ul>
          {menuData.map(menu => (
            <MenuItem key={menu.menu_id} menu={menu} toggleSubmenu={toggleSubmenu} openSubmenus={openSubmenus} />
          ))}
        </ul>
      </div>
      {/* 🔹 CSS 적용 */}
      <style jsx>{`
        .side-menu {
          position: fixed;
          left: -340px;
          top: 0;
          width: 300px;
          height: 100%;
          background: #222;
          color: white;
          transition: 0.3s;
          padding: 20px;
          overflow-y: auto;
        }
        .side-menu.active {
          left: 0;
        }
        .menu-title {
          display: flex;
          justify-content: space-between;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .close-menu {
          cursor: pointer;
          font-size: 20px;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          padding: 10px;
          cursor: pointer;
          position: relative;
          border-bottom: 1px solid #555;
          transition: background 0.2s;
        }
        li:hover {
          background: #444;
        }
        .submenu {
          padding-left: 20px;
        }
        .submenu-icon {
          float: right;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: none;
        }
        .overlay.active {
          display: block;
        }
      `}</style>
    </div>
  );
}

function MenuItem({ menu, toggleSubmenu, openSubmenus }) {
  return (
    <li onClick={(event) => {
        event.stopPropagation();
        toggleSubmenu(menu.menu_id);
      }
    }>
      {menu.menu_name} <span className="submenu-icon">{openSubmenus[menu.menu_id] ? '▼' : '▶'}</span>
      {openSubmenus[menu.menu_id] && menu.children.length > 0 && (
        <ul className="submenu">
          {menu.children.map(submenu => (
            <MenuItem key={submenu.menu_id} menu={submenu} toggleSubmenu={toggleSubmenu} openSubmenus={openSubmenus} />
          ))}
        </ul>
      )}
    </li>
  );
}