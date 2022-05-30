import React from 'react';

import IMAGES from '@/res/images'
import ComplainLink from '@/components/Buttons/ComplainLink/ComplainLink';

import { styleForCard } from './styleForCard.js'
import { styleForAccount } from './styleForAccount.js'

const { CollectionIcon, DocIcon, PdfIcon } = IMAGES;


const CardSaveButton = ({ isForAccount }) => {
    const style = isForAccount === true ? styleForAccount : styleForCard
    const {
        Container,
        Container_block,
        Container_block_btn,
        Container_block_btn_text,
    } = style;

    const docButtonText = isForAccount ? "Выгрузить в DOC" : 'в DOC'
    const pdfButtonText = isForAccount ? "Выгрузить в PDF" : 'в PDF'
    return (
        <>
            <Container>
                <Container_block>

                    <Container_block_btn>
                        <Container_block_btn_text>
                            В подборку
                        </Container_block_btn_text>
                        <CollectionIcon width='16px' />
                    </Container_block_btn>

                    <Container_block_btn>
                        <Container_block_btn_text>{docButtonText}</Container_block_btn_text>
                        <DocIcon width='14px' />
                    </Container_block_btn>

                    <Container_block_btn>
                        <Container_block_btn_text>{pdfButtonText}</Container_block_btn_text>
                        <PdfIcon width='14px' />
                    </Container_block_btn>

                </Container_block>
            </Container>

            {/* Complain link */}
            {isForAccount === undefined && <ComplainLink />}
        </>
    )
}

export default CardSaveButton;