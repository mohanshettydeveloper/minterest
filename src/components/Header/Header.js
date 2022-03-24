import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    title: {
        fontWeight: 'bold',
        fontFamily:'verdana',
        fontSize:'30px',
        color:'green'

    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.title}>Mokemon Minterest</h1>
            <hr/>
        </div>
    );
};

export default Header;