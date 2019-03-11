import "./style.scss";
import "./editor.scss";

const __ = wp.i18n.__;

var el = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType;

const { RichText } = wp.editor;

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
            type: 'html',
            source: 'html',
            selector: 'p'
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
            el('p',
                { className: 'faq-accordion-answer' },
                el(
                    RichText,
                    {
                        placeholder: 'Enter an answer.',
                        value: props.attributes.answer,
                        onChange: (val) => {
                            props.setAttributes({ answer: val });
                        }
                    }
                )
            ),
        );
    },

    save: function (props) {
        return el(
            'div',
            { className: 'faq-accordion' },
            el('h3', { className: 'faq-accordion-question' }, props.attributes.question),
            el('p', { className: 'faq-accordion-answer' }, props.attributes.answer),
        );
    },
});