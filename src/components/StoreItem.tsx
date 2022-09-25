import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'


type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }}></Card.Img>

            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>
                    ) :
                        <div>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart.
                                </div>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            </div>
                            <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                                <Button onClick={()=> removeFromCart(id)} variant="danger" size="sm">Remove</Button>
                            </div>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}