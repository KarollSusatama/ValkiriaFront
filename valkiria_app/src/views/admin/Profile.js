import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import LocationOn from "@material-ui/icons/LocationOn";
import School from "@material-ui/icons/School";

// core components
import UserHeader from "components/Headers/UserHeader.js";

import componentStyles from "assets/theme/views/admin/profile.js";
import boxShadows from "assets/theme/box-shadow.js";

const useStyles = makeStyles(componentStyles);

function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <UserHeader />
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
            marginBottom="3rem"
            classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
          >
            <Card
              classes={{
                root: classes.cardRoot + " " + classes.cardRootSecondary,
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
                        Mi cuenta
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>
                <Box
                  component={Typography}
                  variant="h6"
                  color={theme.palette.gray[600] + "!important"}
                  paddingTop=".25rem"
                  paddingBottom=".25rem"
                  fontSize=".75rem!important"
                  letterSpacing=".04em"
                  marginBottom="1.5rem!important"
                  classes={{ root: classes.typographyRootH6 }}
                >
                  Información personal
                </Box>
                <div className={classes.plLg4}>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="Jessica Jones"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Correo Electronico</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="email"
                            defaultValue="jesse@gmail.com"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Número telefónico</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="number"
                            defaultValue="3197978806"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Cambiar Contraseña</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="password"
                            defaultValue="Jesse"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </div>
                <Box
                  component={Divider}
                  marginBottom="1.5rem!important"
                  marginTop="1.5rem!important"
                />
                <Box
                  component={Typography}
                  variant="h6"
                  color={theme.palette.gray[600] + "!important"}
                  paddingTop=".25rem"
                  paddingBottom=".25rem"
                  fontSize=".75rem!important"
                  letterSpacing=".04em"
                  marginBottom="1.5rem!important"
                  classes={{ root: classes.typographyRootH6 }}
                >
                  Información de contacto
                </Box>
                <div className={classes.plLg4}>
                  <Grid container>
                    <Grid item xs={12}>
                      <FormGroup>
                        <FormLabel>Dirección</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="Calle 30 #29-29, Ap 09"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} lg={4}>
                      <FormGroup>
                        <FormLabel>Ciudad</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="Bogotá"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <FormGroup>
                        <FormLabel>Departamento</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="Bogotá"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <FormGroup>
                        <FormLabel>PCódigo postal</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="11111"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </div>
                <Box
                  component={Divider}
                  marginBottom="1.5rem!important"
                  marginTop="1.5rem!important"
                />
                <Box
                  component={Typography}
                  variant="h6"
                  color={theme.palette.gray[600] + "!important"}
                  paddingTop=".25rem"
                  paddingBottom=".25rem"
                  fontSize=".75rem!important"
                  letterSpacing=".04em"
                  marginBottom="1.5rem!important"
                  classes={{ root: classes.typographyRootH6 }}
                >
                  Información sobre Jessica
                </Box>
                <div className={classes.plLg4}>
                  <Grid container>
                    <Grid item xs={12}>
                      <FormGroup>
                        <FormLabel>Información</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            multiline
                            defaultValue="Tiene pareja actualmente, Vive sola, Cuenta con empleo actualmente"
                            rows="4"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            xl={4}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.order1 + " " + classes.marginBottomXl0 }}
          >
            <Card classes={{ root: classes.cardRoot }}>
              <Box component={Grid} container justifyContent="center">
                <Grid item xs={12} lg={3}>
                  <Box position="relative">
                    <Box
                      component="img"
                      src={
                        require("assets/img/theme/team-4-800x800.jpg").default
                      }
                      alt="..."
                      maxWidth="180px"
                      borderRadius="50%"
                      position="absolute"
                      left="50%"
                      boxShadow={boxShadows.boxShadow + "!important"}
                      className={classes.profileImage}
                    />
                  </Box>
                </Grid>
              </Box>
              <Box
                component={CardHeader}
                border="0!important"
                textAlign="center"
                paddingBottom="0!important"
                paddingTop="8rem!important"
                classes={{ root: classes.cardHeaderRootProfile }}
              ></Box>
              <Box
                component={CardContent}
                classes={{ root: classes.ptMd4 }}
                paddingTop="0!important"
              >
                <Grid container>
                  <br></br>
                  <br></br>
                  <br></br>
                </Grid>
                <Box textAlign="center">
                  <Typography variant="h3">
                    Jessica Jones
                    <Box component="span" fontWeight="300">
                      , 27
                    </Box>
                  </Typography>
                  <Box
                    component={Typography}
                    variant="h5"
                    fontWeight="300!important"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      component={LocationOn}
                      width="1.25rem!important"
                      height="1.25rem!important"
                    ></Box>
                    Bogotá, Colombia
                  </Box>
                  
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="1rem"
                  >
                  </Box>
                  <Box
                    component={Divider}
                    marginTop="1.5rem!important"
                    marginBottom="1.5rem!important"
                  ></Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
