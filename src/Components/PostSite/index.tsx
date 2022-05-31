// import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface divProps {
    onOpenNewTransactionModal: () => void;
}
export function PostSite({ onOpenNewTransactionModal }: divProps) {
    return (
        <Container>
            <Content>
                {/* <img src={logoImg} alt="dt money" /> */}
                <button type="button" onClick={onOpenNewTransactionModal}>
                    nova transação
                </button>
            </Content>

        </Container>
    );
}
