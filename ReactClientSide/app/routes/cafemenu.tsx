import type { Route } from "./+types/cafemenu";



export async function clientLoader({params,}: Route.ClientLoaderArgs) {
    const menuId = params.menuid;
    //const menuItem = await fetch(`https://artisancafeapi-b7fyfyh9ccb7dpee.australiaeast-01.azurewebsites.net/cafemenu/${menuId}`);
    const menuItems = await fetch(`https://artisancafeapi-b7fyfyh9ccb7dpee.australiaeast-01.azurewebsites.net/cafemenu`);
    const response = await menuItems.json();
    //const text = await menuItems.text();
    //const response = text ? JSON.parse(text) : {};
    if (!response || response.length === 0) {
        return [];
    }
    return response;
}

export default function CafeMenu({loaderData,}: Route.ComponentProps) {
    
    type MenuItem = {
        id: string | number;
        dishName: string;
        imageName: string;
        price: number;
        IsShown: boolean;
    };
    if (!loaderData || loaderData.length === 0) {
        return <p>No menu items available.</p>;
    }
    //const menuItems = loaderData as string;
    //const menuItems = loaderData as MenuItem[];
    //const menuItems = '[{"id":1,"dishName":"burgerwitheggs","imageName":"burgerwitheggs.jpg","price":20.15,"validUntil":null,"isShown":true},{"id":2,"dishName":"petty","imageName":"petty.jpg","price":15.5,"validUntil":null,"isShown":true},{"id":3,"dishName":"prowndish","imageName":"prowndish.jpg","price":25,"validUntil":null,"isShown":true}]';
    const items = loaderData as MenuItem[];
    return (
        <div>
            <table className="table-auto w-full text-left border-collapse">
            {items.map(item => (
                <tr key={item.id} className="table-row  align-middle  text-center   bg-dark text-white">
                    <td>Dish Name: {item.dishName}</td>
                    <td><img src= {`app/welcome/${item.imageName}`} alt={item.dishName} width="340" height="255" /></td>
                    <td>Price: {item.price}</td>
                    <td>Display Indicator: {item.IsShown}</td>
                    <td><form action="/action_page.php" method="post"><input type="hidden" name="dishid" value={item.id} /><button className="btn btn-success" type="submit">Order</button></form></td>
                </tr>
            ))}
            </table>
        </div>
    );
}
