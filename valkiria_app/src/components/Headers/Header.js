import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PhoneAndroid";

// core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const users = [{
    name: 'Admin',
    usertype: 1
  },
  {
    name: 'Prueba 2',
    usertype: 2
  }]
  const userLogin = users[1];


  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>

            {
              userLogin.usertype === 2 ?
                <Grid container>
                  <Grid item xl={3} lg={6} xs={12}>
                    <CardStats
                      subtitle="Días para la menstruación"
                      title="Faltan 20 días"
                      icon={PieChart}
                      color="bgError"
                      footer={
                        <>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color={theme.palette.error.main}
                            marginRight=".5rem"
                            display="flex"
                            alignItems="center"
                          >
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                  <Grid item xl={3} lg={6} xs={12}>
                    <CardStats
                      subtitle="Días no fertiles"
                      title="Te quedan 3 días"
                      icon={PieChart}
                      color="bgWarning"
                      footer={
                        <>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color={theme.palette.error.main}
                            marginRight=".5rem"
                            display="flex"
                            alignItems="center"
                          >
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                  <Grid item xl={3} lg={6} xs={12}>
                    <CardStats
                      subtitle="Días fertiles"
                      title="Faltan 4 días"
                      icon={GroupAdd}
                      color="bgWarningLight"
                      footer={
                        <>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color={theme.palette.warning.main}
                            marginRight=".5rem"
                            display="flex"
                            alignItems="center"
                          >
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                  <Grid item xl={3} lg={6} xs={12}>
                    <CardStats
                      title="Recuerda tomarte las pastillas de placebo en 20 días"
                      icon={EmojiEvents}
                      color="bgInfo"
                      footer={
                        <>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color={theme.palette.success.main}
                            marginRight=".5rem"
                            display="flex"
                            alignItems="center"
                          >
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                </Grid>

                :
                <Grid container>
                  <Grid item xl={3} lg={6} xs={12}>
                    <CardStats
                      subtitle="New users"
                      title="2,356"
                      icon={PieChart}
                      color="bgWarning"
                      footer={
                        <>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color={theme.palette.error.main}
                            marginRight=".5rem"
                            display="flex"
                            alignItems="center"
                          >
                            <Box
                              component={ArrowDownward}
                              width="1.5rem!important"
                              height="1.5rem!important"
                            />{" "}
                            3.48%
                          </Box>
                          <Box component="span" whiteSpace="nowrap">
                            Since last week
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                  <Grid item xl={3} lg={6} xs={12}>
                    <CardStats
                      subtitle="Sales"
                      title="924"
                      icon={GroupAdd}
                      color="bgWarningLight"
                      footer={
                        <>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color={theme.palette.warning.main}
                            marginRight=".5rem"
                            display="flex"
                            alignItems="center"
                          >
                            <Box
                              component={ArrowDownward}
                              width="1.5rem!important"
                              height="1.5rem!important"
                            />{" "}
                            1.10%
                          </Box>
                          <Box component="span" whiteSpace="nowrap">
                            Since yesterday
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                  <Grid item xl={3} lg={6} xs={12}>
                    <CardStats
                      subtitle="Performance"
                      title="49,65%"
                      icon={EmojiEvents}
                      color="bgInfo"
                      footer={
                        <>
                          <Box
                            component="span"
                            fontSize=".875rem"
                            color={theme.palette.success.main}
                            marginRight=".5rem"
                            display="flex"
                            alignItems="center"
                          >
                            <Box
                              component={ArrowUpward}
                              width="1.5rem!important"
                              height="1.5rem!important"
                            />{" "}
                            10%
                          </Box>
                          <Box component="span" whiteSpace="nowrap">
                            Since last month
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                </Grid>
            }

          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
