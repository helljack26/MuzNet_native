import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
// Icon
import { AntDesign } from '@expo/vector-icons';
// Styles
import { style } from './style'
const {
    DropBlock,
    Drop,
    DropHeader,
    DropContainer,
    DropContainerList,
    DropContainerListLink,
    DropContainerListLinkText,
} = style;

const PlanHeaderSelect = ({ complexDetails, currentPlanName, screen, planPageLink }) => {
    const navigation = useNavigation();

    const DecorateFilters = {
        header: currentPlanName,
        item: []
    }
    const selectGenerate = (plansData) => {
        plansData.map((item) => {
            if (item.planName === currentPlanName) return null
            const selectItem = {
                planName: item.planName,
                planId: item.planId,
                complexId: complexDetails.complexId
            }
            return DecorateFilters.item.push(selectItem)
        })

    }
    selectGenerate(complexDetails.plans)
    const { header, item } = DecorateFilters;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = (state) => setIsOpen(state);

    return (
        <>
            <DropBlock>
                <Drop onPress={() => toggling(false)}  >
                    <DropHeader onPress={() => toggling(!isOpen)} >
                        <DropContainerListLinkText>
                            {selectedOption || header}
                        </DropContainerListLinkText>
                        <AntDesign
                            name={isOpen ? 'up' : 'down'}
                            size={15}
                            color="black"
                        />
                    </DropHeader>
                </Drop>
                {isOpen && (
                    <DropContainer style={{
                        zIndex: 2
                    }}>
                        <DropContainerList>
                            {item.map((item) =>
                                <DropContainerListLink
                                    onPress={() => {
                                        setIsOpen(false)
                                        setSelectedOption(item.planName)
                                        navigation.navigate(screen, {
                                            screen: planPageLink,
                                            params: {
                                                complexId: item.complexId,
                                                planId: item.planId,
                                            }
                                        });
                                    }}
                                    key={item.planId}
                                >
                                    <DropContainerListLinkText>
                                        {item.planName}
                                    </DropContainerListLinkText>
                                </DropContainerListLink>
                            )
                            }

                        </DropContainerList>
                    </DropContainer>
                )}
            </DropBlock >

        </>
    );
}

export default PlanHeaderSelect;



