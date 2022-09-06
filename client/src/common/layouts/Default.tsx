import { ILayout } from '../lib/interfaces';

import SeoTags from '../components/SeoTags';

import Router from 'next/router';
import { trackPageview } from '../utils/data/analytics';
import concat from '../utils/helpers/concat';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const DefaultLayout = ({
  title,
  desc,
  url,
  className,
  children,
}: ILayout & { className?: string }) => {
  return (
    <div className="flex flex-col">
      <SeoTags title={title} desc={desc} url={url} />
      <main
        className={concat(
          className ? className : '',
          'w-full px-5 py-4 pb-16 mx-auto flex flex-col max-w-2xl',
        )}
      >
        {children}
      </main>
    </div>
  );
};
