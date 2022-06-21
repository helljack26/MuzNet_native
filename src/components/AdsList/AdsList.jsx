import React from "react";
// Components
import ItemMusician from './ItemMusician'
import ItemVendor from './ItemVendor'

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
                return isForContractor === true ?
                    <ItemMusician data={item} key={id} />
                    :
                    <ItemVendor data={item} key={id} />;
            })}
        </AdsListContainer>
    );
}

export default AdsList;