import React from'react';
import {Card,cardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

 

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
      return 'loading...!';
    }
    
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12}  md={3} className={ cx( styles.Card, styles.infected)}>
                    <cardContent>
                    <Typography color="textSecondary" guetterBottom>Infected</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </cardContent>

                </Grid>
                <Grid item component={Card} xs={12}  md={3} className={cx(styles.Card,styles.recovered)}>
                    <cardContent>
                        <Typography color="textSecondary" guetterBottom>recovered</Typography>
                        <Typography variant="h5">
                         <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of recoveries  of COVID-19</Typography>
                    </cardContent>

                </Grid>
                <Grid item component={Card} xs={12}  md={3} className={cx(styles.Card,styles.deaths)}>
                    <cardContent>
                        <Typography color="textSecondary" guetterBottom>deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                       </Typography>
                       <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of deaths caused by  OVID-19</Typography>
                    </cardContent>

                </Grid>



            </Grid>
        </div>
    );
}
export default Cards;