import styled from "styled-components";
import {DefaultStyle} from "./components/GlobalStyles/GlobalStyles.tsx";

function App() {


    return (
        <>
            <DefaultStyle/>
            <CardWrapper>
                <Card>
                    <CardImage src={"./images/1.png"}/>
                    <CardTitle>Headline</CardTitle>
                    <CardText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardText>
                    <ButtonWrapper>
                        <Button $primary>See more</Button>
                        <Button>Save</Button>
                    </ButtonWrapper>
                </Card>
            </CardWrapper>
        </>
    )
}

const CardWrapper = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 10px 22px 10px;
    border-radius: 15px;
    width: 300px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
`

const CardImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
`
const CardTitle = styled.h3`
    font-weight: 700;
    font-size: 16px;
    color: #000;
    align-self: flex-start;
    margin-left: 10px;
`

const CardText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    color: #abb3ba;
    width: 260px;
    margin: 0 auto;
`
const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 12px;
    align-self: flex-start;
    margin-left: 10px;
`
const Button = styled.button<{ $primary ?: boolean; }>`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    background: ${props => props.$primary ? "#4e71fe" : "#fff" } ;
    color: ${props => props.$primary ? "#fff" : "#4e71fe" } ;
    border: 2px solid #4e71fe;
`

export default App
