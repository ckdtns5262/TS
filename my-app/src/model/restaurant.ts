

export type Restaurant = {
    name : string;
    category : string;
    address : Address;
    menu : Menu[]
}

export type Address = {
    city : string;
    detail : string;
    zipCode : number
}

export type Menu = {
    name : string;
    price : number;
    category : string;
}

// type에서 빼주고 싶을때 (필요없는게 있을때)
export type AddressWithoutZip = Omit<Address, 'zipCode'>

// type에서 하나만 선택하고 싶을때 
export type RestaurantOnlyCategor = Pick<Restaurant, 'category'>

export type ApiResponse<T> = {
    data : T[],
    totalPage : number,
    page : number
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResopnse = ApiResponse<Menu>