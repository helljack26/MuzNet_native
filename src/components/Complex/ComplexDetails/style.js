import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'


const Container = styled.View`
margin-top: 22px;
width: 100%;
`;
const Name_block = styled.View`
width: 100%;
display: flex;

`;
const Name_block_header = styled.View`
display: flex;
`
const Name_block_header_text_block = styled.View`
display: flex;
justify-content: center;
align-items: center;
padding: 3px 10px;
margin-top: 20px;
border-radius: 20px;
background-color: ${C.orange};

`;
const Name_block_header_text_block_new = styled.View`
display: flex;
justify-content: center;
align-items: center;
padding: 3px 10px;
margin-top: 20px;
border-radius: 20px;
background-color: ${C.green};

`;
const Name_block_header_text = styled.Text`
font-size: 20px;
letter-spacing: 0.4px;
margin-right: 10px;

font-family:${F.medium};
line-height: 30px;

`;

const Name_block_header_type = styled.Text`
color: white;
font-size: 9px;
font-family: ${F.medium};
`;
const Place = styled.Text`
display: flex;
margin-top: 5px;
font-size: 12px;
font-family: ${F.light};
`;
const Price = styled.View`
display: flex;
`;
const Price_block = styled.View`
margin-top: 14px;
display: flex;
`;
const Price_block_price = styled.Text`
font-size: 24px;
margin-right: 16px;
font-family:${F.medium};
`;
const Price_block_square_rating = styled.View`
display: flex;
flex-direction: row;
`;
const Price_block_price_square = styled.Text`
font-family: ${F.light};
font-size: 12px;
`;
const Price_block_price_rating = styled.Text`
font-family: ${F.light};
font-size: 11px;
color: #6abd24;
`;

export const style = {
    Container: Container,
    Name_block: Name_block,
    Name_block_header: Name_block_header,
    Name_block_header_text_block: Name_block_header_text_block,
    Name_block_header_text_block_new: Name_block_header_text_block_new,
    Name_block_header_text: Name_block_header_text,
    Name_block_header_type: Name_block_header_type,
    Place: Place,
    Price: Price,
    Price_block: Price_block,
    Price_block_price: Price_block_price,
    Price_block_square_rating: Price_block_square_rating,
    Price_block_price_square: Price_block_price_square,
    Price_block_price_rating: Price_block_price_rating,
}