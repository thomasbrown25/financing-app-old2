import { CardBody, CardContainer, CardHeader } from './card.styles';

const Card = ({ header, body }) => {
    return (
        <CardContainer>
            {header && <CardHeader>{header}</CardHeader>}
            {body && <CardBody>{body}</CardBody>}

            <div></div>
        </CardContainer>
    );
};

export default Card;
