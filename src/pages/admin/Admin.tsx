import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === menuId ? null : menuId));
  };

  return (
    <div>
      <div className="wrapper">
        {/* Sidebar */}
        <div className="sidebar" data-background-color="dark">
          <div className="sidebar-logo">
            {/* Logo Header */}
            <div className="logo-header" data-background-color="dark">
              <Link to="/index" className="logo">
                <img
                  src="assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height="20"
                />
              </Link>
              <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                  <i className="gg-menu-right"></i>
                </button>
                <button className="btn btn-toggle sidenav-toggler">
                  <i className="gg-menu-left"></i>
                </button>
              </div>
              <button className="topbar-toggler more">
                <i className="gg-more-vertical-alt"></i>
              </button>
            </div>
            {/* End Logo Header */}
          </div>
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <ul className="nav nav-secondary">
                <li className="nav-item active">
                  <a
                    href="#dashboard"
                    onClick={() => toggleMenu("dashboard")}
                    className={openMenu === "dashboard" ? "" : "collapsed"}
                    aria-expanded={openMenu === "dashboard"}
                  >
                    <i className="fas fa-home"></i>
                    <p>Dashboard</p>
                    <span className="caret"></span>
                  </a>
                  <div
                    className={
                      openMenu === "dashboard" ? "collapse show" : "collapse"
                    }
                    id="dashboard"
                  >
                    <ul className="nav nav-collapse">
                      <li>
                        <Link to="/admin">
                          <span className="sub-item">Dashboard 1</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-section">
                  <span className="sidebar-mini-icon">
                    <i className="fa fa-ellipsis-h"></i>
                  </span>
                  <h4 className="text-section">Components</h4>
                </li>
                <li className="nav-item">
                  <a
                    href="#base"
                    onClick={() => toggleMenu("base")}
                    className={openMenu === "base" ? "" : "collapsed"}
                    aria-expanded={openMenu === "base"}
                  >
                    <i className="fas fa-layer-group"></i>
                    <p>Base</p>
                    <span className="caret"></span>
                  </a>
                  <div
                    className={
                      openMenu === "base" ? "collapse show" : "collapse"
                    }
                    id="base"
                  >
                    <ul className="nav nav-collapse">
                      <li>
                        <Link to="components/avatars">
                          <span className="sub-item">Avatars</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="components/buttons">
                          <span className="sub-item">Buttons</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="components/gridsystem">
                          <span className="sub-item">Grid System</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="components/panels">
                          <span className="sub-item">Panels</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    href="#sidebarLayouts"
                    onClick={() => toggleMenu("sidebarLayouts")}
                    className={openMenu === "sidebarLayouts" ? "" : "collapsed"}
                    aria-expanded={openMenu === "sidebarLayouts"}
                  >
                    <i className="fas fa-th-list"></i>
                    <p>Sidebar Layouts</p>
                    <span className="caret"></span>
                  </a>
                  <div
                    className={
                      openMenu === "sidebarLayouts"
                        ? "collapse show"
                        : "collapse"
                    }
                    id="sidebarLayouts"
                  >
                    <ul className="nav nav-collapse">
                      <li>
                        <Link to="sidebar-style-2">
                          <span className="sub-item">Sidebar Style 2</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="icon-menu">
                          <span className="sub-item">Icon Menu</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    href="#forms"
                    onClick={() => toggleMenu("forms")}
                    className={openMenu === "forms" ? "" : "collapsed"}
                    aria-expanded={openMenu === "forms"}
                  >
                    <i className="fas fa-pen-square"></i>
                    <p>Forms</p>
                    <span className="caret"></span>
                  </a>
                  <div
                    className={
                      openMenu === "forms" ? "collapse show" : "collapse"
                    }
                    id="forms"
                  >
                    <ul className="nav nav-collapse">
                      <li>
                        <Link to="forms/forms">
                          <span className="sub-item">Basic Form</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    href="#tables"
                    onClick={() => toggleMenu("tables")}
                    className={openMenu === "tables" ? "" : "collapsed"}
                    aria-expanded={openMenu === "tables"}
                  >
                    <i className="fas fa-table"></i>
                    <p>Tables</p>
                    <span className="caret"></span>
                  </a>
                  <div
                    className={
                      openMenu === "tables" ? "collapse show" : "collapse"
                    }
                    id="tables"
                  >
                    <ul className="nav nav-collapse">
                      <li>
                        <Link to="tables/tables">
                          <span className="sub-item">Basic Table</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="tables/datatables">
                          <span className="sub-item">Datatables</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Sidebar */}
      </div>
    </div>
  );
};

export default Admin;
