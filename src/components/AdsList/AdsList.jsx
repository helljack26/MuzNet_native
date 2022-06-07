import React from "react";
// Components
import ItemMusician from './ItemMusician'

// Styles
import styled from 'styled-components/native';

const AdsListContainer = styled.View`
width: 100%;
margin-top: 16px;
`;
const AdsList = ({ adsList, isForContractor }) => {
    if (adsList === undefined) { return }

    return (
        <AdsListContainer>
            {adsList.map((item, id) => {
                return isForContractor === true ? <ItemMusician data={item} key={id} /> : null;
            })}
        </AdsListContainer>
    );
}

export default AdsList;