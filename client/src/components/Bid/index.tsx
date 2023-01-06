import { AvatarUser } from "../AvatarUser"
import { Container } from "./style"

const Bid = () => {

    return (
        <Container>
            <div>
                <div>
                    <AvatarUser userName="Rodrigo Silva" />
                    <h3>Rodrigo Silva</h3>
                </div>

                <hr />
                
                <p>há 3 dias</p>
            </div>
            
            <span>R$ 58.000</span>
        </Container>
    )
}

export { Bid }
