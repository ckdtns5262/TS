import { Menu } from "./model/restaurant";


interface BestMenuProps extends Omit<Menu, 'price'>{
    showBestMenuName(name:string):string
}


const BestMenu:React.FC<BestMenuProps> = ({name, category, showBestMenuName}) => {
    return ( 
        <div>
            {name}
        </div>
     );
}
 
export default BestMenu