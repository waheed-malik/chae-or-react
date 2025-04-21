// Custom function to render a React-like element into the DOM
function customRender(reactElement, container) {
  // Create a DOM element based on the 'type' specified in the reactElement
  const domElement = document.createElement(reactElement.type);

  // Set the inner text or HTML content of the element
  // Note: There is a typo in 'children', which should be corrected
  domElement.innerHTML = reactElement.childern; // <-- 'childern' should be 'children'

  // Loop through the props object to set attributes on the created DOM element
  for (const prop in reactElement.props) {
    if (prop === 'children') continue; // Skip the 'children' prop if present
    domElement.setAttribute(prop, reactElement.props[prop]); // Set other props as attributes
  }

  // Finally, append the newly created element to the specified container
  container.appendChild(domElement); // <-- Missing in the original function
}

// Define a React-like element with type, props, and children
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  childern: 'Click me to visit google' // <-- Typo: should be 'children'
}

// Select the container element from the DOM
const mainContainer = document.querySelector('#root');

// Call the custom render function to render the element
customRender(reactElement, mainContainer);
