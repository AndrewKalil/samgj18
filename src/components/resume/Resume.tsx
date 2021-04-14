import { Link } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/styles';

import { Avatar, Navigation, Animated } from '../../components';
import {languages, frameworks, appliedKnowledge, education, langData, experience} from './data'
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './style';
interface Props {
  classes: any;
};

const Resume = ({ classes }: Props) => (
  <div className= {classes.container}>
    <div className={classes.firstColumn}>
        <div className={classes.progLangSection}>
            <h4 className={classes.sectionHeader}>PROGRAMMING LANGUAGES</h4>
            <div className={classes.rectangleLarge}>
                <div>
                    {languages.map((item, index) => {
                    const {name, level} = item
                     return(
                         <p className={classes.sectionText} key={index}>{`${name}: ${level}`}</p>
                     )
                    })}
                </div>
                <div style={{height: '15px'}}/>
                <div>
                    <p className={classes.sectionText}>FRAMEWORKS</p>
                    {frameworks.map((item, index) => {
                    const {name, level} = item
                     return(
                         <p className={classes.sectionText} key={index}>{`${name}: ${level}`}</p>
                     )
                    })}
                </div>
                <div style={{height: '15px'}}/>
                <div>
                    <p className={classes.sectionText}>APPLIED KNOWLEDGE</p>
                    {appliedKnowledge.map((item, index) => {
                    const {name, level} = item
                     return(
                         <p className={classes.sectionText} key={index}>{`${name}: ${level}`}</p>
                     )
                    })}
                </div>
            </div>
        </div>
        <div className={classes.progLangSection}>
            <h4 className={classes.sectionHeader}>Education</h4>
            <div className={classes.rectangleLarge}>
                {education.map((item, index) => {
                    const {school, profession, date} = item
                    return (
                        <div key={index}>
                            <h5 className={classes.institution}>{school}</h5>
                            <h6 className={classes.profession}>{profession}</h6>
                            <p className={classes.date}>{date}</p>
                            <div style={{height: '15px'}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    <div className={classes.secondColumn}>
    <h4 className={classes.sectionHeader}>EXPERIENCE</h4>
    <div className={classes.secondColumnContainer}>
        {experience.map((item, index) => {
            const {company, date, desc, technologies} = item
            return (
                <div key={index} className={classes.expSection}>
                    <h5 className={classes.company}>{company}</h5>
                    <h6 className={classes.expDate}>{date}</h6>
                    <p className={classes.desc}>{desc}</p>
                    <p style={{marginBottom: "0"}} className={classes.desc}>{technologies.length > 0 && `TECHNOLOGIES: ${technologies}`}</p>
                </div>
            )
        })}
    </div>
    </div>
  </div>
);

export default withStyles(styles)(Resume);