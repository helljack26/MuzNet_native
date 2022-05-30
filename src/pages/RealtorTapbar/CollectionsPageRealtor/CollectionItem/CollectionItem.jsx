import React from "react";

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import IMAGES from '@/res/images'

// Styles
import { style } from './style'
const { CheckIcon,
    DuplicateIcon,
    RenameIcon,
    CrossIcon
} = IMAGES;

const {
    CollectionItemBlock,
    CollectionItemBlockCol,
    CollectionItemBlockButtons,
    CollectionItemImageBlock,
    CollectionItemImage,
    CollectionItemInfo,
    CollectionItemTitle,
    CollectionItemInput,
    CollectionItemNumber,
    Button,

} = style;

const CollectionItem = ({ data }) => {
    const { collectionId, collectionName, collectionItems } = data;

    const imageCollectionItem = collectionItems[0].imagePath[0];
    const numberOfCollectionItem = collectionItems.length;

    const [rename, setRename] = useState(false);
    const [itemName, setItemName] = useState(collectionName);

    const combine = () => {
        setRename(true)
    }

    const navigation = useNavigation();

    return <CollectionItemBlock>
        <CollectionItemBlockCol>
            <CollectionItemImageBlock
                onPress={() => {
                    navigation.navigate('CollectionsCardPageRealtor', {
                        collectionId: collectionId,
                    });
                }}
            >
                <CollectionItemImage source={imageCollectionItem} />
            </CollectionItemImageBlock>
            <CollectionItemInfo>
                {rename === false ?
                    <CollectionItemTitle
                        numberOfLines={3}
                        onPress={() => {
                            navigation.navigate('CollectionsCardPageRealtor', {
                                collectionId: collectionId,
                            });
                        }}  >
                        {itemName}
                    </CollectionItemTitle>
                    :
                    <CollectionItemInput
                        autoFocus={true}
                        onChangeText={setItemName}
                        onBlur={() => setRename(false)}
                        value={itemName}
                        maxLength={50}
                        multiline={true}
                        keyboardType="default"
                        style={{ textAlignVertical: 'top' }}
                    />
                }
                <CollectionItemNumber>
                    {numberOfCollectionItem} объекта
                </CollectionItemNumber>
            </CollectionItemInfo>
        </CollectionItemBlockCol>

        <CollectionItemBlockButtons>

            <Button>
                <DuplicateIcon width={15} height={15} />
            </Button>

            {rename === false ?
                <Button
                    onPress={() => combine()}
                >
                    <RenameIcon width={15} height={15} />
                </Button>
                :
                <Button
                    onPress={() => setRename(false)}
                >
                    <CheckIcon width={15} height={15} />
                </Button>
            }

            <Button >
                <CrossIcon width={15} height={15} />
            </Button>

        </CollectionItemBlockButtons>
    </CollectionItemBlock >
}


export default CollectionItem;