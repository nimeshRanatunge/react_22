import classes from './Card.module.css';

const Card= (props)=> {
    return(
        // access children
        <div className={`${classes.card} ${props.cardclz}`}>{props.children}</div> 
    );
};

export default Card;
