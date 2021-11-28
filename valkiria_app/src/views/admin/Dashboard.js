import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ciclo from "../../assets/img/theme/ciclo.png"
import mapa from "../../assets/img/theme/map.png"
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";

// core components
import Header from "components/Headers/Header.js";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import Cycle from "views/user/Calendar";
import RadialSeparators from "views/user/Calendar";
import { QuestionAnswer } from "@material-ui/icons";
import Question from "views/user/Question";
import MapGrafic from "./MapGrafic";
import Maps from "./Maps";

const useStyles = makeStyles(componentStyles);

function Dashboard(props) {
  let num =props.match.params.user_id
  console.log();
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const users = [{
    name: 'Admin',
    usertype: 1
  },
  {
    name: 'Prueba 2',
    usertype: 2
  }
  ]
  const userLogin = users[num];

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (index) => {
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header user={userLogin}/>
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot + " " + classes.cardRootBgGradient,
              }}
            >
              
              <CardContent style={{backgroundColor:"white"}}>
                <Box position="relative" height="350px">
                  {userLogin.usertype === 2 ?
                    <div  >
                      <img className="" src={ciclo} style={{width:"100%",height:"100%"}}/>
                      {/* <CircularProgressbarWithChildren
                        value={80}
                        text=""
                        strokeWidth={10}
                        styles={buildStyles({
                          strokeLinecap: "butt",
                          width: `${8}%`
                        })}
                      // style={{width:"50% !important"}}
                      >
                        <RadialSeparators
                          count={28}
                          todayDay={8}
                        />
                      </CircularProgressbarWithChildren> */}
                    </div>

                    :
                      // <MapGrafic />
                      // <Maps/>
                      <img src={mapa} style={{width:"100%",height:"100%"}} />
                  }
                  {/* <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  /> */}
                </Box>
                <Box>
                <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {userLogin.usertype === 2 ?
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h6"
                        letterSpacing=".0625rem"
                        marginBottom=".25rem!important"
                        className={classes.textUppercase}
                      >
                        <Box component="span" color={theme.palette.gray[400]}>
                          Tu ciclo mestrual
                        </Box>
                      </Box>
                      <Box
                        component={Typography}
                        variant="h2"
                        marginBottom="0!important"
                      >
                        <Box component="span" color={theme.palette.white.main}>
                          Ciclo Menstrual - Estas en la fase proliferativa (No fertil) 
                        </Box>
                      </Box>
                    </Grid> :
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h6"
                        letterSpacing=".0625rem"
                        marginBottom=".25rem!important"
                        className={classes.textUppercase}
                      >
                        <Box component="span" color={theme.palette.gray[400]}>
                          Mapa Coroplético
                        </Box>
                      </Box>
                      <Box
                        component={Typography}
                        variant="h2"
                        marginBottom="0!important"
                      >
                        <Box component="span" color={theme.palette.white.main}>
                        Mapa Coroplético
                      
                        </Box>
                      </Box>
                    </Grid>}
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        {/* <Button
                          variant="contained"
                          color="primary"
                          component={Box}
                          marginRight="1rem!important"
                          onClick={() => toggleNavs(1)}
                          classes={{
                            root:
                              activeNav === 1
                                ? ""
                                : classes.buttonRootUnselected,
                          }}
                        >
                          Month
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => toggleNavs(2)}
                          classes={{
                            root:
                              activeNav === 2
                                ? ""
                                : classes.buttonRootUnselected,
                          }}
                        >
                          Week
                        </Button> */}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                title={
                  <Box component="span" color={theme.palette.gray[600]}>
                  </Box>
                }

                subheader={userLogin.usertype === 2 ? "Pregunta del día"
                  : "Reporte por tipo de violencia"
                }
                classes={{ root: classes.cardHeaderRoot }}
                titleTypographyProps={{
                  component: Box,
                  variant: "h6",
                  letterSpacing: ".0625rem",
                  marginBottom: ".25rem!important",
                  classes: {
                    root: classes.textUppercase,
                  },
                }}
                subheaderTypographyProps={{
                  component: Box,
                  variant: "h2",
                  marginBottom: "0!important",
                  color: "initial",
                }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
                {
                userLogin.usertype === 2 ? 
                <Question/> : 
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                }
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            {
              userLogin.usertype !== 2?
              <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Visitas de usuarias
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
              <Line
                      data={chartExample1[chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={(e) => console.log(e)}
                    />
              </TableContainer>
            </Card>  
              :
              ""
            }
            
          </Grid>
          <Grid item xs={12} xl={4}>
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
