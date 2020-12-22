import React from 'react';
import { Layout, Menu } from 'antd';
import {
    AppstoreFilled,
    CarryOutFilled
} from '@ant-design/icons';
import styled from '@emotion/styled'
import SubMenu from 'antd/lib/menu/SubMenu';
import { useHistory } from 'react-router-dom';

const {Sider} = Layout;

const StyledSider = styled(Sider)`
    background: white;
    .ant-layout-sider-children {
        .ant-menu {
            padding: 1rem;
            .ant-menu-item-only-child {
                padding-left: 1rem !important;
            }
            span, li {
                font-weight: bold;
            }
            .ant-menu-item-selected {
                background: #1890ff;
                color: white;
                border-radius: 0.3rem;
            }
        }
    }
`;

interface Category {
    key: string;
    title: string;
}

const categories: Category[] = [
    {
        key: '/menu/pizzas',
        title: 'Pizzas',
    },
    {
        key: '/menu/starters',
        title: 'Entrantes'
    },
    {
        key: '/menu/desserts',
        title: 'Postres',
    }
]

export const Sidebar: React.FC = () => {
    const history = useHistory();
    const location = history.location.pathname;

    return (
        <StyledSider collapsible trigger={null}>
            <Menu
                className="sidebar-menu"
                mode="inline"
                defaultOpenKeys={["menu"]}
                defaultSelectedKeys={[location]}
            >
                <Menu.Item key="/orders" icon={<CarryOutFilled />} onClick={() => history.push('/orders')}>
                   Pedidos
                </Menu.Item>
                <SubMenu key="menu" icon={<AppstoreFilled />} title="Carta">
                    {
                        categories.map(({key, title}) => 
                            <Menu.Item onClick={() => history.push(key)} key={key}>
                                {title}
                            </Menu.Item>
                        )
                    }
                </SubMenu>
            </Menu>
        </StyledSider>
    )
}

