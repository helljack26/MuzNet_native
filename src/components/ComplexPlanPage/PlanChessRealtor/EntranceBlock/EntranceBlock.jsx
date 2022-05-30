import React from "react";
import { style } from './style'
// import { useLocation } from "react-router-dom"

import EntranceBlockItem from '../EntranceBlockItem/EntranceBlockItem'

// Styles
const {
    EntranceColumn,
    EntranceColumnHeader,
    EntranceColumnHeaderText,
    FloorRowBlock,
} = style;

const EntranceBlock = ({ entranceData, isLast }) => {
    const {
        entranceNumber,
        floors
    } = entranceData;
    // Get hash from url if it exist
    // const location = useLocation();
    // const hash = Number(location.hash.slice(1))

    const FloorRow = ({ floor, isLast }) => {
        const { apartments } = floor;

        const marginBottom = isLast ? 0 : 8
        return (
            <FloorRowBlock style={{ marginBottom: marginBottom }}>
                {apartments.map((item, id) => {
                    // const isOpenPopup = (item.id === hash)
                    const isLast = (id === apartments.length - 1)
                    return (
                        <EntranceBlockItem
                            // isOpenPopup={isOpenPopup}
                            isLast={isLast}
                            apartmentData={item}
                            key={id} />
                    )
                })}
            </FloorRowBlock>
        )
    }
    const bodredWidth = isLast ? 0 : 1
    const marginRight = isLast ? 0 : 8

    return (
        <EntranceColumn
            style={{
                borderRightWidth: bodredWidth,
                marginRight: marginRight,
            }}
        >
            <EntranceColumnHeader>
                <EntranceColumnHeaderText>
                    {entranceNumber} подъезд
                </EntranceColumnHeaderText>
            </EntranceColumnHeader>

            {floors.map((item, id) => {
                const isLast = (id === floors.length - 1)
                return <FloorRow floor={item} isLast={isLast} key={id} />
            })
            }

        </EntranceColumn>
    )
}
export default EntranceBlock;