
import { Button, makeStyles, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {categories} from '../../constants/data';

const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#000080',
        color: '#ffffff',
        width:'86%',
    },
    table:{
        border:'1px solid rgb(228,224,224,1)'
    },
   link:{
       textDecoration:'none',
       color:"inherit",
   }
})
const Categories = () => {
    const classes = useStyles();
    return (
        <>
              <Link className={classes.link} to="/create">
            <Button variant="contained" className={classes.create}>Create Blog</Button>
            </Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link className={classes.link} to={`/`}>  
                                All Categories
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category =>(
                            <TableRow>
                                <TableCell>
                                    <Link className={classes.link} to={`/?categories=${category}`}>
                                        {category}
                                    </Link>
                                </TableCell>
                                </TableRow>
                        ))
                    }
                </TableBody>

            </Table>
        </>
    )
};

export default Categories