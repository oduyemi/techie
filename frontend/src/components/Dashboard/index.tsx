"use client"
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline';
import navigation from 'src/navigation/vertical/index';
import Trophy from 'src/views/dashboard/Trophy';
import StatisticsCard from 'src/views/dashboard/StatisticsCard';
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview';
import TotalEarning from 'src/views/dashboard/TotalEarning';
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import Table from 'src/views/dashboard/Table';
import SalesByCountries from 'src/views/dashboard/SalesByCountries';
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';
import Poll from 'mdi-material-ui/Poll';
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline';
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline';


export const Dashboard = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);


    const handleRouteChange = () => {
      if (window.location) {
        setCurrentPath(window.location.pathname);
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const currentNavItem = navigation().find((item) => item.path === currentPath);



  return (
    <ApexChartWrapper>
      <CssBaseline />
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
          <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
      </ApexChartWrapper>
  );
};

