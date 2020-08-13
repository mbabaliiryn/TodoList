// eslint-disable-next-line import/extensions
import Accordion from 'accordion/src/accordion.mjs';

const closeFold = (fold) => {
  fold.open = false;
};

const openFold = (fold) => {
  fold.open = true;
};

const createAccordions = () => {
  const accordions = document.querySelectorAll('#project-list, .project-todos');
  for (let i = 0; i < accordions.length; i += 1) {
    // eslint-disable-next-line no-new
    new Accordion(accordions[i], {
      modal: true,
    });
  }
};

export { createAccordions, closeFold, openFold };