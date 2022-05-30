import React from 'react';

import { style } from './style'
// Styles
const {
    PlanFiltersMobile,
    PlanFiltersMobileText,
    PlanFiltersMobileNumber,
    PlanFiltersMobileNumberText,
} = style;

const PlanFilters = () => {
    const filterCounter = 3;

    return (<>
        < PlanFiltersMobile
            style={{
                zIndex: 0,
                elevation: 0,
                // overflow: 'visible',
            }}
        >
            <PlanFiltersMobileText>
                Фильтры
            </PlanFiltersMobileText>

            <PlanFiltersMobileNumber >
                <PlanFiltersMobileNumberText >
                    {filterCounter}
                </PlanFiltersMobileNumberText>
            </PlanFiltersMobileNumber>
        </PlanFiltersMobile >
    </>
    )
}

export default PlanFilters;