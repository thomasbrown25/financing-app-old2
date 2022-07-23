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

const Layout = ({ children }) => {
    return (
        <MainContainer>
            <Container>
                <LayoutContainer>
                    <LayoutMain>
                        <LayoutContent>
                            <LayoutHeader>
                                <Header>
                                    <HeaderText>
                                        Good evening, Thomas
                                    </HeaderText>
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
