import {
    Header,
    HeaderText,
    LayoutContainer,
    LayoutContent,
    LayoutHeader,
    LayoutMain,
    MainContainer,
    Container
} from './layout.styles';

const Layout = ({ children, title }) => {
    return (
        <MainContainer>
            <Container>
                <LayoutContainer>
                    <LayoutMain>
                        <LayoutContent>
                            <LayoutHeader>
                                <Header>
                                    <HeaderText>{title}</HeaderText>
                                </Header>
                            </LayoutHeader>
                            {children}
                        </LayoutContent>
                    </LayoutMain>
                </LayoutContainer>
            </Container>
        </MainContainer>
    );
};

export default Layout;
