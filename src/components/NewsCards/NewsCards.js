import React from 'react'
import { Grid, Grow, Typography } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard'
// import useStyles from './styles.js'

const NewsCards = ({ articles }) => {
  return (
    <Grow in>
      <Grid sx={{
        padding: '0 5%',
        width: '100%',
        margin: 0,
      }} container alignItems={'stretch'} spacing={3}>
        {articles.map((article, i) => {
          <Grid item xs={12} sm={6} md={4} style={{ display: 'flex' }}>
            <NewsCard article={article} i={i} />
          </Grid>
        })}
      </Grid>
    </Grow>
  )
}

export default NewsCards
