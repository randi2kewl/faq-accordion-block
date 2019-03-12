import "./style.scss";
import "./editor.scss";

const __ = wp.i18n.__;

var el = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType,
    RichText = wp.editor.RichText;

registerBlockType('fab/faq-accordion-block', {
    title: __('FAQ Accordion'),
    description: __('Block that acts as an accordion when header clicked'),
    icon: 'sort',
    category: 'widgets',
    keywords: [__('faq'), __('fab'), __('accordion')],
    styles: [
        {
            name: 'default',
            label: __('Default'),
            isDefault: true
        },
    ],

    attributes: {
        question: {
            type: 'string',
            source: 'html',
            selector: 'h3'
        },
        answer: {
            type: 'array',
            source: 'children',
            selector: '.faq-accordion-answer'
        }
    },

    edit: function (props) {

        return el('div',
            { className: 'faq-accordion' },

            el(
                'h3',
                { className: 'faq-accordion-question' },
                el(
                    RichText,
                    {
                        placeholder: 'Enter a question.',
                        value: props.attributes.question,
                        onChange: (val) => {
                            props.setAttributes({ question: val });
                        }
                    }
                )
            ),
            el(
                RichText,
                {
                    key: 'editable',
                    tagName: 'div',
                    className: 'faq-accordion-answer',
                    placeholder: 'Enter an answer.',
                    value: props.attributes.answer,
                    onChange: (val) => {
                        props.setAttributes({ answer: val });
                    }
                }
            ),
        );
    },

    save: function (props) {
        return el(
            'div',
            { className: 'faq-accordion' },
            el('h3', {
                className: 'faq-accordion-question',
            }, props.attributes.question),
            el(
                RichText.Content, {
                    tagName: 'div',
                    className: 'faq-accordion-answer',
                    value: props.attributes.answer
                }
            )
        );
    },
});