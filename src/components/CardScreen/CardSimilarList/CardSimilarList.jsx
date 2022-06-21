import React from "react";
import { apiMocks } from '@/api/mock/apiMocks'
// Components
import ItemMusician from '@/components/AdsList/ItemMusician'
import ItemVendor from '@/components/AdsList/ItemVendor'
// Styles
import styled from 'styled-components/native';
import { M } from '@/res/mixin'

const SimilarListContainer = styled.View`
width: 100%;
margin-top: 24px;
`;
const SimilarItem = styled.TouchableOpacity`

`;
const SimilarListTitle = styled(M.TitleBold20)`
margin-bottom: 16px;
`;
const CardSimilarList = ({ isMusician }) => {
    if (isMusician === undefined) return
    const mockApi = isMusician ? apiMocks.MusicianMockApi : apiMocks.ContractorAdsMockApi;

    return (
        <SimilarListContainer>
            <SimilarListTitle>
                You also may like
            </SimilarListTitle>
            {mockApi.map((item, id) => {
                if (id > 2) {
                    return
                } else {
                    return isMusician === true ?
                        <ItemMusician key={id} data={item} />
                        :
                        <ItemVendor key={id} data={item} />
                }
            }
            )}
        </SimilarListContainer>
    );
}

export default CardSimilarList;