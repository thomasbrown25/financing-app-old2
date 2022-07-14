import Card from '../../components/card/card.component';
import { DashboardContainer } from '../../components/dashboard/dashboard.styles';
import Layout from '../../components/layout/layout.component';
import { MainColumn, SideColumn } from '../../components/layout/layout.styles';

const Dashboard = () => {
    return (
        <Layout>
            <DashboardContainer>
                <MainColumn>
                    <div>main column</div>
                    <Card header='card header' body='card body'></Card>
                </MainColumn>
                <SideColumn>
                    <div>Side column</div>
                </SideColumn>
            </DashboardContainer>
        </Layout>
    );
};

export default Dashboard;
