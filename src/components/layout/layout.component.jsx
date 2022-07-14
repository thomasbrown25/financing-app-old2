import {
    Header,
    HeaderText,
    LayoutContainer,
    LayoutContent,
    LayoutHeader,
    LayoutMain
} from './layout.styles';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <LayoutMain>
                <LayoutContent>
                    <LayoutHeader>
                        <Header>
                            <HeaderText>Good evening, Thomas</HeaderText>
                        </Header>
                    </LayoutHeader>
                    {children}
                </LayoutContent>
            </LayoutMain>
        </LayoutContainer>
    );
};

export default Layout;
