import GoodItem from "./GoodItem";

export default function GoodList(props) {
    const {goods =[], onToggleBuy}= props;

    if(!goods.langht){
        <h3>Noting here</h3>
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodItem 
                key={item.id} 
                {...item} 
                onToggleBuy={onToggleBuy}
                />
            ))}
        </div>
    )
}
