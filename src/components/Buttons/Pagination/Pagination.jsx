import React from "react";

import F from '@/res/fonts'
import C from '@/res/colors'
// Images
import IMAGES from '@/res/images'
import styled from 'styled-components/native';

const { ArrowLeftPagin, ArrowRightPagin } = IMAGES

// Styles
const PaginationContainer = styled.View`
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    width: 99%;
    justify-content: center;
    align-items: center;
    height: 39px;

`;
const Control = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: row;
    width: 39px;  
`;

const PaginationBlock = styled.View`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const PaginationItem = styled.TouchableOpacity`
    height: 100%;
    border: 1px solid ${C.borderGray}; 
    background-color: white;
text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 39px;  
    margin: 0px 4px;
`;
const PaginationItemActive = styled(PaginationItem)`
    background-color: ${C.mainBlack};
`;
const PaginationItemNumActive = styled.Text`

    color: white;
    font-family: ${F.regular};
    font-size: 12px;  
`;
const PaginationItemNum = styled.Text`

    color:  ${C.mainBlack};
    font-family: ${F.regular};
    font-size: 12px;  
`;

const Pagination = () => {
    return (<PaginationContainer>
        {/* Left */}
        <Control>
            <ArrowLeftPagin />
        </Control>

        <PaginationBlock>
            <PaginationItemActive>
                <PaginationItemNumActive>
                    1
                </PaginationItemNumActive>
            </PaginationItemActive>
            <PaginationItem>
                <PaginationItemNum>
                    2
                </PaginationItemNum>
            </PaginationItem>
            <PaginationItem>
                <PaginationItemNum>
                    3
                </PaginationItemNum>
            </PaginationItem>
            <PaginationItem>
                <PaginationItemNum>
                    ...
                </PaginationItemNum>
            </PaginationItem>
            <PaginationItem>
                <PaginationItemNum>
                    32
                </PaginationItemNum>
            </PaginationItem>
        </PaginationBlock>
        {/* Right */}
        <Control>
            <ArrowRightPagin />
        </Control>
    </PaginationContainer>
    )
}
export default Pagination; 