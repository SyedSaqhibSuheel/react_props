import styles from "./Items.module.css"
const Item=({foodItem})=>{
    return(
        <li className={`${styles["kg-item"]} list-group-items`} >
            <span className={styles["kg-span"]}>{foodItem}</span></li>

    );

}
export default Item;