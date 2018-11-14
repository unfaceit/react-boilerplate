/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage:
      'Welcome. This is a revolutionary app that distrups the tech industry. It takes your thoughts and stores them as an anonymous text somewhere in the cloud. You can access it, everyone can access it. No way to filter/ find or associate. Go figure.',
  },
});
