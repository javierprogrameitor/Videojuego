export function getCustomProperty(element, property) {
    // Using getComputedStyle to obtain the CSSStyleDeclaration object 
    //containing all computed styles applied to the element.
    // Then, using the getPropertyValue method to retrieve the value of the specific property indicated 
    //by the 'property' parameter.
    return parseFloat(getComputedStyle(element).getPropertyValue(property)) || 0;
}

export function setCustomProperty(element, property, value) {
    // Using the style.setProperty method to set the specified value to the given CSS property of the element.
    element.style.setProperty(property, value);
}
