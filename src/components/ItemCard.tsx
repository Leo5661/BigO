import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ItemPlaceholder from "../assets/item.png";

export type Item = {
    id: number
    title: string;
    description: string;
    price: number;
    thumbnail: string;
};

export const ItemCard = ({ title, price, thumbnail }: Item) => {

    return (
        <div className="w-80 h-80 bg-foreground/5 shadow-xl border rounded space-y-2 flex p-4 flex-col items-center justify-end">
            <div className="flex border w-full flex-grow items-center justify-center drop-shadow ">
            <img className="h-40 w-40" src={thumbnail ? thumbnail : ItemPlaceholder} alt={`${title} image`} />
            </div>
            <div className="w-full flex flex-col justify-between space-y-2 items-center px-4">
                <div className="text-base flex flex-wrap font-semibold text-foreground truncate ...">{title}</div>
                <div className="text-base font-normal text-purple-300">{`$ ${price}`}</div>
            </div>
            <Separator className="my-4"/>
            <Button variant={"outline"} className="w-full">Buy Now</Button>
        </div>
    );
}