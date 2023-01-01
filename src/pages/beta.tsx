import { NextSeo } from 'next-seo';
import { DefaultLayout } from '../common/layouts/Default';
import concat from '../common/utils/helpers/concat';

export default function Beta() {
  const planned = [
    {
      label: `Generate plain CSS on every component page, even if it's written in TailwindCSS or other libraries.`,
      done: false,
    },
    {
      label: `Possible "request component|page" feature.`,
      done: false,
    },
    {
      label: `Follow other profiles. This should unlock a special "Following" feed.`,
      done: false,
    },
    {
      label: `Interactions such as comment, rate, like & bookmark. This can later be added to the sorting methods.`,
      done: false,
    },
    {
      label: `Remove "Landing Page" from tags, and rather create a completely new schema just for "Pages" as we have done with "Components".`,
      done: false,
    },
    {
      label: `Add visibility setting to component and pages. (hidden|public|unlisted)`,
      done: false,
    },

    {
      label:
        'Automatically suggest CSS library upon pasting code into the editor.',
      done: false,
    },
    {
      label: 'Format editor on save.',
      done: false,
    },
    {
      label: 'Improve wrapped lines in editor.',
      done: false,
    },
  ];
  const bugs = [
    {
      label: `There's no way to update tags on a currently existing component or page.`,
      done: false,
    },
    {
      label: `Thumbnails seems to ignore clipped gradients.`,
      done: false,
    },
  ];
  return (
    <DefaultLayout className="-mt-1d0">
      <NextSeo title={`Browse components for `} />
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3">
          <h1 className="px-2 text-lg text-white">
            👀 In progress & known bugs
          </h1>
          <div className="flex flex-col p-4 mt-2 border rounded-md bg-types-100 border-types-150">
            <div className="flex items-center">
              <div className="flex px-2 py-1 mr-2 text-sm rounded-md text-white/60 bg-types-50">
                {planned.filter((x) => x.done).length}/{planned.length}
              </div>
              Planned
            </div>
            <ul className="mt-3 space-y-3">
              {planned
                .sort((a, b) => Number(b.done) - Number(a.done))
                .map((x) => (
                  <li
                    className={concat(
                      x.done ? 'text-white/40' : 'text-white/60',
                      'flex items-start',
                    )}
                  >
                    <div
                      className={concat(
                        x.done
                          ? 'border-brand-primary-150 text-brand-primary-100'
                          : 'border-types-150',
                        'flex items-center flex-shrink-0 justify-center mr-3 border-2 rounded-full w-6 h-6 ',
                      )}
                    >
                      {x.done && <i className="text-xs fa-solid fa-check" />}{' '}
                    </div>
                    {x.label}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col p-4 mt-5 border rounded-md bg-types-100 border-types-150">
            <div className="flex items-center">
              <div className="flex px-2 py-1 mr-2 text-sm rounded-md text-white/60 bg-types-50">
                {bugs.filter((x) => x.done).length}/{bugs.length}
              </div>
              Bugs
            </div>
            <ul className="mt-3 space-y-3">
              {bugs
                .sort((a, b) => Number(b.done) - Number(a.done))
                .map((x) => (
                  <li
                    className={concat(
                      x.done ? 'text-white/40' : 'text-white/60',
                      'flex items-start',
                    )}
                  >
                    <div
                      className={concat(
                        x.done
                          ? 'border-brand-primary-150 text-brand-primary-100'
                          : 'border-types-150',
                        'flex items-center flex-shrink-0 justify-center mr-3 border-2 rounded-full w-6 h-6 ',
                      )}
                    >
                      {x.done && <i className="text-xs fa-solid fa-check" />}{' '}
                    </div>
                    {x.label}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="px-2 text-lg text-white">
            🥳 New features & Changelog
          </h1>
          <div className="p-4 mt-2 border rounded-md bg-types-100 border-types-150">
            heh
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
