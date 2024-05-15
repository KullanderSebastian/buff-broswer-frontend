import React from "react";
import Collapsible from 'react-collapsible';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import PropTypes from "prop-types";

const DropdownMenu = ({triggerName, content, weapons}) => {
    const createTrigger = (name) => (
        <div>
            {name} <IoMdArrowDropdown className="arrow" />
        </div>
    );
    
    const createTriggerWhenOpen = (name) => (
        <div>
            {name} <IoMdArrowDropup className="arrow" />
        </div>
    );

    const trigger = createTrigger(triggerName);
    const triggerWhenOpen = createTriggerWhenOpen(triggerName);
    
    return (
        <Collapsible className="weaponsMobile" weapons={weapons} trigger={trigger} triggerWhenOpen={triggerWhenOpen}>
            {content}
        </Collapsible>
    );
};

DropdownMenu.defaultProps = {
    weapons: undefined,
    wears: undefined,
}

DropdownMenu.propTypes = {
    triggerName: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    weapons: PropTypes.array,
    wears: PropTypes.array
}

export default DropdownMenu;