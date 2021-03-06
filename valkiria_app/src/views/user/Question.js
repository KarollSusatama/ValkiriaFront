import React, { useState } from "react";
// import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import boxShadows from "assets/theme/box-shadow.js";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import componentStyles from "assets/theme/components/card-stats.js";
import { Link } from "react-router-dom";
import PieChart from "@material-ui/icons/PieChart";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import { SentimentSatisfiedAlt, SentimentVeryDissatisfied } from "@material-ui/icons";
const useStyles = makeStyles(componentStyles);
function Question() {
    const theme = useTheme();
    const classes = useStyles();

    const preguntas = [
        "¿Cómo está tu estado de animo hoy?",
        "¿Tienes una pareja sentimental actualmente?",
        "¿Actualmente Trabajas?"
    ]
    const [numPregunta, setNumPregunta] = useState(0);
    const changeQuestion = ()=> {
        console.log(preguntas.length);
        console.log(numPregunta);
        console.log(numPregunta > preguntas.length);
        if(numPregunta === preguntas.length -1){
            setNumPregunta(0)
        }else{
            setNumPregunta(numPregunta+1)
        }
        
    }
    return (
        <div>
            <h1>{preguntas[numPregunta]}</h1>
            
            <div style={{position:"absolute",left:"25%"}}>


                <Link onClick={changeQuestion}>

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
                        className={classes["bgError"]}
                    >
                        {SentimentVeryDissatisfied && typeof SentimentVeryDissatisfied === "object" ? (
                            <Box
                                component={SentimentVeryDissatisfied}
                                width="1.5rem!important"
                                height="1.5rem!important"
                            />
                        ) : null}
                        {SentimentVeryDissatisfied && typeof SentimentVeryDissatisfied === "string" ? (
                            <Box component="i" fontSize="1.25rem" className={SentimentVeryDissatisfied} />
                        ) : null}
                    </Box>
                </Link>
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
                // className={classes["bgError"]}
                >

                </Box>

                <Link onClick={changeQuestion}>

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
                        {SentimentSatisfiedAlt && typeof SentimentSatisfiedAlt === "object" ? (
                            <Box
                                component={SentimentSatisfiedAlt}
                                width="1.5rem!important"
                                height="1.5rem!important"
                            />
                        ) : null}
                        {SentimentSatisfiedAlt && typeof SentimentSatisfiedAlt === "string" ? (
                            <Box component="i" fontSize="1.25rem" className={SentimentSatisfiedAlt} />
                        ) : null}
                    </Box>

                </Link>
            </div>
        </div>)

}

export default Question;