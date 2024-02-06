import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'
// import useStyles from './styles.js'

const NewsCard = ({ article:{ description, publishedAt, source, title, url, urlToImage }, i }) => {
    //: 
    //  const classes=useStyles();
    return (
        <Card href={url} target="_blank">
            <CardActionArea>
                <CardMedia sx={{ height: 250 }} image={urlToImage || "https://themayanagari.com/wp-content/uploads/2021/05/Breaking-News-Transparent.jpg.webp"} />
                <div>
                    <Typography variant='body2' color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography varian="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography varian="h5" color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
