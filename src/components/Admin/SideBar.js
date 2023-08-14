import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaGithub } from 'react-icons/fa';
import sidebarBg from '../../Assets/bg2.jpg';
import { DiReact } from 'react-icons/di'
import { MdJoinLeft, MdJoinRight, MdOutlineFeaturedPlayList } from 'react-icons/md'
import { LuLayoutDashboard } from "react-icons/lu";


import './scss/SideBar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SideBar = (props) => {
    const { toggled, handleToggleSidebar } = props;

    const [collapsed, setCollapsed] = useState(false);

    return (
        <>

            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <div className={collapsed ? 'flex-center btn-open-close-side-bar' : 'btn-open-close-side-bar'}>
                    {collapsed ? <MdJoinLeft size={'2.5rem'} onClick={() => setCollapsed(!collapsed)} /> : <MdJoinRight size={'2.5rem'} onClick={() => setCollapsed(!collapsed)} />}
                </div>
                <SidebarHeader>
                    <div className={collapsed ? "pd-1 logo flex-center" : "logo flex-center"}>
                        <DiReact size={collapsed ? '4rem' : '3rem'} color={'00bfff'} />
                        {collapsed ? "" : <span >React Pro Sidebar</span>}
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<LuLayoutDashboard />}> <Link to='/admin' />DashBoard</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<MdOutlineFeaturedPlayList />} title="Features">
                            <MenuItem><Link to='/admin/manage-user' />Quản lý bài Users</MenuItem>
                            <MenuItem><Link to='/admin/manage-quiz' />Quản lý bài Quiz</MenuItem>
                            <MenuItem><Link to='/admin/manage-answer' />Quản lý câu hỏi</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;