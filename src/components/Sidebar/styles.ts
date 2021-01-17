import styled from '@emotion/styled'
import { Layout } from 'antd';

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
    background: white;
    .ant-layout-sider-children {
        .ant-menu {
            display: flex;
            flex-direction: column;
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