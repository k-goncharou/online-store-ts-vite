import {Button, Card, CardImg} from "react-bootstrap";
import {formatCurrency} from "../utilitis/formatCurrency";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const quantity: number = 0
    return (

        <Card className="h-100">
            <CardImg variant="top"
                     src={imgUrl}
                     height="200px"
                     style={{objectFit: "cover"}}>

                <Card.Body className="d-flex flex-column">

                    <Card.Title className="d-flex justify-content-between aline-items-baseline mb-4">

                        <span>{name}</span>
                        <span>{formatCurrency(price)}</span>

                    </Card.Title>

                    <div className="mt-auto">
                        {quantity === 1 ? (
                            <Button className="w-100"> Add to Card </Button>
                        ) : (
                            <div className="d-flex align-items-center flex-column"
                                 style={{gap: ".5rem"}}>
                                <div className="d-flex align-items-center justify-content-center"
                                     style={{gap: ".5rem"}}>
                                    <Button> - </Button>
                                    <div>
                                        <span>
                                            {quantity}
                                        </span>
                                    </div>

                                    <Button> + </Button>
                                </div>
                               <Button> Remove </Button>
                            </div>
                        )}

                    </div>

                </Card.Body>
            </CardImg>
        </Card>

    )
}