import React,{ useState, useEffect, useRef} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert,Row, Typography, Tabs } from 'antd';
import { useIntl, FormattedMessage } from 'umi';

import { BillingTable } from './billing-Table';
// import { SurveyCreate } from './survey-Create';
// import { SurveyForm } from './survey-Form';

const { TabPane } = Tabs;

export default (): React.ReactNode => {

  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Billing" key="1">
          <BillingTable />
          </TabPane>
          {/* <TabPane tab="Create Survey" key="2">
            bbb
          </TabPane> */}
          {/* <TabPane tab="Servay Form" key="3">
            <SurveyForm />
          </TabPane> */}
        </Tabs>
      </Card>
    </PageContainer>
  );
};