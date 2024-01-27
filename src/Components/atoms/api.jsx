
export const data = async () => {
    const dataOrders = await fetch("http://localhost:3000/api/v1/orders/own-orders",
        {
            credentials: "include"
        }
    )
    const response = await dataOrders.json()
    console.log(response)
    // setOrder(response)
    
}
