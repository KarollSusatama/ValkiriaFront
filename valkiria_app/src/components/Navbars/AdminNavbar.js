import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import SearchIcon from "@material-ui/icons/Search";
import { SentimentSatisfiedAlt, SentimentVeryDissatisfied, Star } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";

// core components
import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";

import componentStyles from "assets/theme/components/admin-navbar.js";
import { Link } from "react-router-dom";
import boxShadows from "assets/theme/box-shadow.js";
import { Button, Modal } from "@material-ui/core";
const useStyles = makeStyles(componentStyles);

export default function AdminNavbar({ brandText }) {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        classes={{ root: classes.appBarRoot }}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop="0.5rem"
            >
              <div>
                <Typography
                  className={classes.brandTitle}
                  variant="h4"
                  component="a"
                >
                  {brandText}
                </Typography>
              </div>
              <Box display="flex" alignItems="center" width="auto">
                <Link onClick={handleOpen}>

                  <Box
                    width="3rem"
                    height="3rem"
                    padding="12px"
                    textAlign="center"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                    boxShadow={boxShadows.boxShadow}
                    color={theme.palette.white.main}
                    className={classes["bgInfo"]}
                  >
                    {Star && typeof Star === "object" ? (
                      <Box
                        component={Star}
                        width="1.5rem!important"
                        height="1.5rem!important"
                      />
                    ) : null}
                    {Star && typeof Star === "string" ? (
                      <Box component="i" fontSize="1.25rem" className={Star} />
                    ) : null}
                  </Box>

                </Link>

                <NavbarDropdown />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Si me pide la ubicación para saber donde estoy, ES MALTRATÓ PSICOLÓGICO</h2>
          <p id="parent-modal-description">
            ¿Te ha pasado?
          </p>
          <Button variant="outlined">Si</Button>
          
          <Button variant="outlined">No</Button>
        </Box>
      </Modal>
    </>
  );
}
