import { useLayoutEffect } from 'react';

export default function useDocumentTitle(title) {
  useLayoutEffect(() => {
    if (title) {
      document.title = title + ' - Play Podcasts';
    } else {
      document.title = 'Play Podcasts';
    }
  }, [title]);
}
